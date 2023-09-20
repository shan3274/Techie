import Footer from "@/src/Homepage/Footer";
import Header from "@/src/Homepage/Header";
import { db } from "@/src/utils/firebase-config";
import { Password } from "@mui/icons-material";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useMemo } from "react";
import { BallTriangle } from "react-loader-spinner";

const Registeruser = () => {
  //   data state
  const [userID, setUserID] = useState("");
  const [contactPersonName, setConatactPersonName] = useState("");
  const [phone, setPhone] = useState("");
  const [landline, setLandline] = useState("");
  const [email, setEmail] = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [companyName, setComapanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [gstin, setGstin] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerfyPassword] = useState("");
  const [tc, setTc] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [landlineCode, setLandlineCode] = useState("");

  // error state
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Loader state
  const [loading, setLoading] = useState(false);

  // error state
  const [passwordError, setPasswordError] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState("");
  const [validEmailError, setValidEmailError] = useState("");

  //   navigation
  const route = useRouter();
  //   database opration
  const [databaseRef, setDatabaseRef] = useState();
  const [user, setUser] = useState([]);
  const [emails, setEmails] = useState([]);
  const [userNames, setUserNames] = useState([]);

  const register = async () => {
    if (
      password == verifyPassword &&
      tc == "on" &&
      userNameError == "" &&
      emailError == ""
    ) {
      await addDoc(collection(db, "User"), {
        userName: userID,
        fullName: contactPersonName,
        phone: phone,
        landline: landline,
        email: email,
        secondaryEmail: secondaryEmail,
        companyName: companyName,
        website: website,
        gstin: gstin,
        landmark: landmark,
        city: city,
        pin: pin,
        country: country,
        type: type,
        password: password,
        countryCode: countryCode,
        landlineCode: landlineCode,
        approve: "true",
      })
        .then(() => {
          route.push("/authentication/Successful");
        })
        .catch((err) => {
          alert("error: " + err.message);
        });
    } else {
      if (tc == "") {
        alert("please accept terms and conditions");
      } else {
        alert("please check the fields");
      }
    }
  };

  useMemo(async () => {
    await getDocs(collection(db, "User")).then((response) => {
      setUser(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
    if (user) {
      setLoading(true);
    }
  }, []);
  useEffect(() => {
    setEmails(
      user.map((data) => {
        return data.email;
      })
    );
    setUserNames(
      user.map((data) => {
        return data.userName;
      })
    );
  }, [user]);
  console.log(tc, userNameError, emailError, password, verifyPassword);
  return (
    <>
      <Header />
      {user.length > 0 ? (
        <div className="w-full h-[120vh] xl:h-[100vh] flex items-center justify-center flex-col relative">
          <div className="absolute top-[120px] lg:top-[100px] text-[30px] font-[600] text-blue-950">
            Sign up
          </div>
          <div className="w-[80%] flex items-center justify-center h-screen gap-10">
            <div className="w-[50%] flex items-end justify-center flex-col gap-5 ">
              <input
                type="text"
                placeholder="User ID"
                className={`w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5 ${
                  userNameError != "" && "border-red-500 text-red-500"
                } `}
                onMouseOut={() => {
                  if (userNames.includes(userID)) {
                    setUserNameError("Username already in use");
                  } else {
                    setUserNameError("");
                  }
                }}
                onChange={(event) => {
                  setUserID(event.target.value);
                  setUserNameError("");
                }}
              />

              <input
                type="text"
                placeholder="Contact person name"
                className="w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5"
                onChange={(event) => setConatactPersonName(event.target.value)}
              />
              <div className="w-[50%] lg:w-[40%] lg:h-[30px] h-[40px] flex gap-3">
                <select
                  name=""
                  id=""
                  className="w-[30%] lg:text-[11px] h-[40px] lg:h-[30px] border border-black rounded-md pl-1"
                  onChange={(event) => setCountryCode(event.target.value)}
                >
                  <option value="+91">+91</option>
                  <option value="+91">+92</option>
                  <option value="+91">+93</option>
                  <option value="+91">+94</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-[70%] h-[40px] lg:h-[30px] lg:text-[13px] border border-black rounded-md pl-5"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="w-[50%] lg:w-[40%] lg:h-[30px] h-[40px] flex gap-3">
                <select
                  name=""
                  id=""
                  className="w-[30%] lg:text-[11px] h-[40px] lg:h-[30px] border border-black rounded-md pl-1"
                  onChange={(event) => setLandlineCode(event.target.value)}
                >
                  <option value="+91">+91</option>
                  <option value="+91">+92</option>
                  <option value="+91">+93</option>
                  <option value="+91">+94</option>
                </select>
                <input
                  type="text"
                  placeholder="Landline"
                  className="w-[70%] h-[40px] lg:h-[30px] lg:text-[13px] border border-black rounded-md pl-5"
                  onChange={(event) => setLandline(event.target.value)}
                />
              </div>
              <input
                type="email"
                placeholder="Primary email"
                className={`w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5 ${
                  emailError != "" && "border-red-500 text-red-500"
                } `}
                onMouseOut={() => {
                  if (emails.includes(email)) {
                    setEmailError("Username already in use");
                  } else {
                    setEmailError("");
                  }
                }}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError("");
                }}
              />
              <input
                type="email"
                placeholder="Secondary email"
                className="w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5"
                onChange={(event) => setSecondaryEmail(event.target.value)}
              />
              <input
                type="text"
                placeholder="Company website"
                className="w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5"
                onChange={(event) => setWebsite(event.target.value)}
              />
              <input
                type="text"
                placeholder="Comapny name"
                className="w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5"
                onChange={(event) => setComapanyName(event.target.value)}
              />
            </div>
            {/* section 2 */}
            <div className="w-[50%] flex items-start justify-center flex-col gap-5">
              <input
                type="text"
                placeholder="Landmark"
                className="w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5"
                onChange={(event) => setLandmark(event.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                className="w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5"
                onChange={(event) => setCity(event.target.value)}
              />
              <input
                type="text"
                placeholder="Pin"
                className="w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5"
                onChange={(event) => setPin(event.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                className="w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5"
                onChange={(event) => setCountry(event.target.value)}
              />
              <select
                name=""
                id=""
                className="w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5"
                onChange={(event) => setType(event.target.value)}
              >
                <option value="">Deals in</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electrical">Electrical</option>
                <option value="Oil and gas">Oil and gas</option>
                <option value="Marine Industry">Marine Industry</option>
                <option value="Civil">Civil</option>
                <option value="Instrument">Instrument</option>
                <option value="Chemical">Chemical</option>
                <option value="Multi">Multi</option>
                <option value="Others">Others</option>
              </select>
              <input
                type="text"
                placeholder="Gstin"
                className="w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5"
                onChange={(event) => setGstin(event.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className={`w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5 ${
                  passwordError != "" && "border-red-500 text-red-500"
                } `}
                onChange={(event) => setPassword(event.target.value)}
              />
              <input
                type="password"
                placeholder="Verify password"
                className={`w-[50%] lg:w-[40%] lg:h-[30px] lg:text-[13px] h-[40px] border border-black rounded-md pl-5 ${
                  passwordError != "" && "border-red-500 text-red-500"
                } `}
                onMouseOut={() => {
                  if (password != verifyPassword) {
                    setPasswordError("Username already in use");
                  } else {
                    setPasswordError("");
                  }
                }}
                onChange={(event) => {
                  setVerfyPassword(event.target.value);
                  setPasswordError("");
                }}
              />
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-center h-[40px] gap-3 absolute bottom-[100px]">
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => setTc(e.target.value)}
            />{" "}
            Accept terms & conditions{" "}
          </div>

          <div className="absolute bottom-[80px]">
            Already user ?{" "}
            <Link href="/authentication/Login" className="text-blue-500">
              Login
            </Link>{" "}
          </div>
          <button
            className="w-[150px] h-[40px] bg-green-500 text-white rounded-full absolute bottom-[20px]"
            onClick={() => register()}
          >
            Sign up
          </button>
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <BallTriangle />
        </div>
      )}
    </>
  );
};

export default Registeruser;
