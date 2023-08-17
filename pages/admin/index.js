import { db } from "@/src/Homepage/utils/firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
const index = () => {
  // hover state
  const [userHover, setUserHover] = useState(false);
  const [passwordHover, setPasswordHover] = useState(false);
  //   data state
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // check user login state
  const [userLogedin, setUserLogedin] = useState(false);
  //   rounting
  const route = useRouter();
  //   database  opretion

  const [data, setData] = useState([]);

  const login = async () => {
    try {
      await getDocs(
        collection(db, `admin/pXEyByEojw8Y4MuHnaa2/${userName}`)
      ).then((response) => {
        setData(
          response.docs.map((data) => {
            return { ...data.data(), id: data.id };
          })
        );
      });
    } catch (error) {}
  };
  useEffect(() => {
    data.map((res) => {
      if (res.userName === userName && res.password === password) {
        localStorage.setItem("adminLogedin", true);
        localStorage.setItem("adminId", userName);
        localStorage.setItem("adminPassword", password);
        route.push("/admin/Homepage");
      }
    });
  }, [data]);
  useLayoutEffect(() => {
    if (localStorage.getItem("adminLogedin")) {
      setUserLogedin(false);
      route.push("/admin/Homepage");
    } else {
      setUserLogedin(true);
    }
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {userLogedin && (
        <div className="w-[30%] h-[70%] bg-white rounded-xl drop-shadow-xl border flex items-center justify-center flex-col relative ">
          <div className="absolute top-[15%] text-[30px] font-[500]">
            {" "}
            Admin <span className="text-red-500">Login</span>
          </div>
          <label
            htmlFor=""
            className={
              userHover
                ? ` relative right-[26%] top-[12px] bg-white duration-300 text-blue-900`
                : "relative top-[33px] right-[25%] text-gray-400 duration-300 z-[1000]"
            }
          >
            Username
          </label>
          <input
            title="this is email feild"
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
            }}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
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
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className={`absolute bottom-[23%] w-[50%] bg-blue-950 text-white h-[40px] rounded-xl hover:rounded-sm duration-300 hover:scale-[1.05]`}
            onClick={login}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default index;
