import Footer from "@/src/Homepage/Footer";
import Header from "@/src/Homepage/Header";
import { db } from "@/src/Homepage/utils/firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useMemo } from "react";
import { BallTriangle } from "react-loader-spinner";

const Signup = () => {
  const [userHover, setUserHover] = useState(false);
  const [passwordHover, setPasswordHover] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [emailHover, setEmailHover] = useState(false);
  const [verifyPasswordHover, setVerifyPasswordHover] = useState(false);
  const [companyNameHover, setCompanyNameHover] = useState(false);
  const [gstinHover, setGstinHover] = useState(false);
  const [addressHover, setAddressHover] = useState(false);
  const [industryTypeHover, setIndustryTypeHover] = useState(false);
  const [natureHover, setNatureHover] = useState(false);
  const [applicationHover, setApplicatioHovern] = useState(false);

  //   data state
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [gstin, setGstin] = useState("");
  const [address, setAddress] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [nature, setNature] = useState("");
  const [application, setApplication] = useState("");

  // Loader state
  const [loading, setLoading] = useState(false);

  // error state
  const [passwordError, setPasswordError] = useState("");
  const [passwordLengthError, setPasswordLengthError] = useState("");
  const [validEmailError, setValidEmailError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  //   navigation
  const route = useRouter();
  //   database opration
  const [databaseRef, setDatabaseRef] = useState();
  const [user, setUser] = useState([]);
  const [emails, setEmails] = useState([]);
  const [userNames, setUserNames] = useState([]);
  useEffect(() => {
    try {
      setDatabaseRef(collection(db, `User`));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const register = async () => {
    if (
      password == verifyPassword &&
      passwordLengthError == "" &&
      passwordError == "" &&
      validEmailError == "" &&
      userNameError == ""
    ) {
      try {
        const dataShow = {
          email: email,
          userName: userName,
          password: password,
          companyName: companyName,
          gstin: gstin,
          address: address,
          industryType: industryType,
          nature: nature,
          application: application,
          approve: false,
        };
        const res = addDoc(databaseRef, dataShow).then((re) => {
          alert("done");
          route.push("/authentication/Successful");
        });
      } catch (error) {
        console.log(error.message);
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
  console.log(userNames);
  return (
    <>
      {loading ? (
        <div className=" w-full min-h-screen">
          <Header />
          <div className="w-full min-h-[120vh]  flex items-start  justify-center absolute top-[200px] text-blue-950 ">
            <div className="w-[30%] min-h-[100%] border bg-white rounded-xl drop-shadow-xl mt-5 flex flex-col items-center justify-center py-10 ">
              <div className="relative top-[10%] text-[35px] font-[500] text-blue-950">
                Sign up
              </div>
              {/* user name */}
              <label
                htmlFor=""
                className={
                  userHover
                    ? ` relative right-[23%] ] top-[12px] bg-white duration-300 text-blue-900`
                    : "relative top-[33px]  right-[23%] text-gray-400 duration-300 z-[1000]"
                }
              >
                User Name
              </label>
              <input
                title="this is user Name field"
                type="text"
                className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
                  userHover && "rounded-none"
                }`}
                value={userName}
                onMouseOver={() => {
                  setUserHover(true);
                }}
                onMouseOut={() => {
                  if (userName == "") setUserHover(false);

                  if (userNames.includes(userName)) {
                    setUserNameError("Username already in use");
                  } else {
                    setUserNameError("");
                  }
                }}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setUserNameError("");
                }}
              />
              <div className=" text-[12px] text-red-700">{userNameError}</div>
              {/* email */}
              <label
                htmlFor=""
                className={
                  emailHover
                    ? ` relative right-[27%] top-[12px] bg-white duration-300 text-blue-900`
                    : "relative top-[33px] right-[27%] text-gray-400 duration-300 z-[1000]"
                }
              >
                Email
              </label>
              <input
                title="this is email field"
                type="email"
                className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
                  emailHover && "rounded-none"
                }`}
                value={email}
                onMouseOver={() => {
                  setEmailHover(true);
                }}
                onMouseOut={() => {
                  if (email == "") setEmailHover(false);
                  if (email != "") {
                    let hold = email.split("@");
                    if (hold[1] != "gmail.com") {
                      setValidEmailError("");
                    } else {
                      setValidEmailError("Please enter a valid email");
                    }
                  }

                  if (emails.includes(email)) {
                    setValidEmailError("Email already in use");
                  }
                }}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setValidEmailError("");
                }}
              />
              <div className=" text-[12px] text-red-700">{validEmailError}</div>
              {/* Conpany name */}
              <label
                htmlFor=""
                className={
                  companyNameHover
                    ? ` relative right-[20%] top-[12px] bg-white duration-300 text-blue-900`
                    : "relative top-[33px] right-[20%] text-gray-400 duration-300 z-[1000]"
                }
              >
                Company Name
              </label>
              <input
                title="this is Company name field"
                type="text"
                className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
                  companyNameHover && "rounded-none"
                }`}
                value={companyName}
                onMouseOver={() => {
                  setCompanyNameHover(true);
                }}
                onMouseOut={() => {
                  if (companyName == "") setCompanyNameHover(false);
                }}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />

              {/* gstin */}

              <label
                htmlFor=""
                className={
                  gstinHover
                    ? ` relative right-[29%] top-[12px] bg-white duration-300 text-blue-900`
                    : "relative top-[33px] right-[29%] text-gray-400 duration-300 z-[1000]"
                }
              >
                Gstin
              </label>
              <input
                title="this is GST Number field"
                type="text"
                className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
                  gstinHover && "rounded-none"
                }`}
                value={gstin}
                onMouseOver={() => {
                  setGstinHover(true);
                }}
                onMouseOut={() => {
                  if (gstin == "") setGstinHover(false);
                }}
                onChange={(e) => {
                  setGstin(e.target.value);
                }}
              />
              {/* address */}
              <label
                htmlFor=""
                className={
                  addressHover
                    ? ` relative right-[19%] top-[12px] bg-white duration-300 text-blue-900`
                    : "relative top-[33px] right-[19%] text-gray-400 duration-300 z-[1000]"
                }
              >
                Company address
              </label>
              <input
                title="Company address"
                type="text"
                className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
                  addressHover && "rounded-none"
                }`}
                value={address}
                onMouseOver={() => {
                  setAddressHover(true);
                }}
                onMouseOut={() => {
                  if (address == "") setAddressHover(false);
                }}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              {/* Type */}
              <label
                htmlFor=""
                className={
                  industryTypeHover
                    ? ` relative right-[21%] top-[12px] bg-white duration-300 text-blue-900`
                    : "relative top-[33px] right-[21%] text-gray-400 duration-300 z-[1000]"
                }
              >
                Type of industry
              </label>

              <select
                title="Industry Type"
                name=""
                id=""
                className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
                  industryTypeHover && "rounded-none"
                }`}
                value={industryType}
                onMouseOver={() => {
                  setIndustryTypeHover(true);
                }}
                onMouseOut={() => {
                  if (industryType == "") setIndustryTypeHover(false);
                }}
                onChange={(e) => {
                  setIndustryType(e.target.value);
                }}
              >
                <option value=""></option>
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
              {/*  Nature of business*/}
              <label
                htmlFor=""
                className={
                  natureHover
                    ? ` relative right-[19%] top-[12px] bg-white duration-300 text-blue-900`
                    : "relative top-[33px] right-[19%] text-gray-400 duration-300 z-[1000]"
                }
              >
                Nature of business
              </label>
              <select
                title="Nature of business"
                name=""
                id=""
                className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
                  natureHover && "rounded-none"
                }`}
                value={nature}
                onMouseOver={() => {
                  setNatureHover(true);
                }}
                onMouseOut={() => {
                  if (nature == "") setNatureHover(false);
                }}
                onChange={(e) => {
                  setNature(e.target.value);
                }}
              >
                <option value=""></option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
                <option value="Both">Both</option>
              </select>
              {/* Application */}
              <label
                htmlFor=""
                className={
                  applicationHover
                    ? ` relative right-[25%] top-[12px] bg-white duration-300 text-blue-900`
                    : "relative top-[33px] right-[25%] text-gray-400 duration-300 z-[1000]"
                }
              >
                Application
              </label>
              <select
                title="Application"
                name=""
                id=""
                className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
                  applicationHover && "rounded-none"
                }`}
                value={application}
                onMouseOver={() => {
                  setApplicatioHovern(true);
                }}
                onMouseOut={() => {
                  if (application == "") setApplicatioHovern(false);
                }}
                onChange={(e) => {
                  setApplication(e.target.value);
                }}
              >
                <option value=""></option>
                <option value="Thermal power">Thermal power</option>
                <option value="Nuclear power">Nuclear power</option>
                <option value="Solar power">Solar power</option>
                <option value="Wind">Wind</option>
                <option value="Hydro">Hydro</option>
                <option value="Defence">Defence</option>
                <option value="Civil">Civil</option>
                <option value="Steal">Steal</option>
                <option value="Others">Others</option>
              </select>
              {/*password  */}

              <label
                htmlFor=""
                className={
                  passwordHover
                    ? ` relative right-[25%] top-[12px] bg-white duration-300 text-blue-900`
                    : "relative top-[33px] right-[25%] text-gray-400 duration-300 z-[1000]"
                }
              >
                Password
              </label>
              <input
                title="Password"
                type="password"
                className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
                  passwordHover && "rounded-none"
                }`}
                value={password}
                onMouseOver={() => {
                  setPasswordHover(true);
                }}
                onMouseOut={() => {
                  if (password == "") setPasswordHover(false);
                  if (password.length < 6 && password != "") {
                    setPasswordLengthError("Password must be at least 6");
                  } else {
                    setPasswordLengthError("");
                  }
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className=" text-[12px] text-red-700">
                {passwordLengthError}
              </div>
              {/* verify passsword */}
              <label
                htmlFor=""
                className={
                  verifyPasswordHover
                    ? ` relative right-[21%] top-[12px] bg-white duration-300 text-blue-900`
                    : "relative top-[33px] right-[21%] text-gray-400 duration-300 z-[1000]"
                }
              >
                Verify Password
              </label>
              <input
                title="verify feild"
                type="password"
                className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
                  verifyPasswordHover && "rounded-none"
                }`}
                value={verifyPassword}
                onMouseOver={() => {
                  setVerifyPasswordHover(true);
                }}
                onMouseOut={() => {
                  if (verifyPassword == "") setVerifyPasswordHover(false);
                  if (password == verifyPassword) {
                    setPasswordError("");
                  } else {
                    setPasswordError("Password not match");
                  }
                }}
                onChange={(e) => {
                  setVerifyPassword(e.target.value);
                }}
              />
              <button
                className={`relative mt-10  top-[25%] w-[50%] bg-blue-950 text-white h-[40px] rounded-xl hover:rounded-sm duration-300 hover:scale-[1.05]`}
                onClick={register}
              >
                Singup
              </button>
              <div className="absolute bottom-[7rem] text-red-700">
                {passwordError}
              </div>
              <div className="relative top-5">
                Already user?{" "}
                <Link
                  href="/authentication/Login"
                  className="underline text-blue-500"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>

          <Footer className="absolute top[-12rem]" />
        </div>
      ) : (
        <div className="">
          <Header />
          <div className="w-full h-screen flex items-center justify-center">
            <BallTriangle />
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;