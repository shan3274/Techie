import Footer from "@/src/Homepage/Footer";
import Header from "@/src/Homepage/Header";
import { auth } from "@/src/utils/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { use, useState } from "react";

const Login = () => {
  // hover state
  const [userHover, setUserHover] = useState(false);
  const [passwordHover, setPasswordHover] = useState(false);
  //   data state
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // navigation
  const route = useRouter();
  return (
    <div className=" w-full min-h-screen">
      <Header />
      <div className="w-full h-[75vh]  flex items-start  justify-center absolute top-[200px] text-blue-950 ">
        <div className="w-[30%] h-[80%] bg-white border rounded-xl drop-shadow-xl mt-5 flex flex-col items-center justify-center ">
          <div className="fixed top-[10%] text-[35px] font-[500] text-blue-950">
            Login
          </div>
          <label
            htmlFor=""
            className={
              userHover
                ? ` relative right-[27%] top-[12px] bg-white duration-300 text-blue-900`
                : "relative top-[33px] right-[27%] text-gray-400 duration-300 z-[1000]"
            }
          >
            Email
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
            onClick={async () => {
              try {
                await signInWithEmailAndPassword(auth, userName, password).then(
                  () => {
                    localStorage.setItem("userEmail", userName);
                    
                    route.push("/");
                  }
                );
              } catch (error) {
                let err = error.message.split("/");
                alert(err[1]);
              }
            }}
          >
            Login
          </button>
          <div className="absolute bottom-10">
            New User?{" "}
            <Link
              href="/authentication/Signup"
              className="underline text-blue-500 mr-2"
            >
              Signup
            </Link>
            ||
            <Link
              href="/authentication/Passwordrest"
              className="underline text-blue-500 ml-2"
            >
              forget password?
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[-25rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
