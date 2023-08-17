import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Typewriter from "typewriter-effect";
import { BiSearch } from "react-icons/bi";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { duration } from "@mui/material";

import * as icon from "react-icons/bi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./utils/firebase-config";
const Header = () => {
  const [placeholder, setPlaceholder] = useState(true);
  const [search, setSearch] = useState("");
  const [menuActive, setMenuActive] = useState(false);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  const [isUserLogin, setUserLogin] = useState(false);

  const userCall = async () => {
    await getDocs(collection(db, "User")).then((res) => {
      setUser(
        res.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };

  useEffect(() => {
    if (localStorage.getItem("userEmail")) {
      setUserLogin(true);
      userCall();
      let email = localStorage.getItem("userEmail");
      user.map((data) => {
        if (email === data.email) {
          console.log("done");
        }
        console.log(email);
      });
    }
  }, []);

  return (
    <>
      <div
        className={` w-[100px] h-screen fixed top-0 z-[10001] ${
          menuActive && "bg-[rgba(0,0,0,0.7)]"
        } ${menuActive && "w-full "} `}
      >
        <div
          className={`relative top-0 left-[-300px] w-[300px] flex flex-col ${
            menuActive && "left-[0px]"
          } h-screen bg-white duration-300`}
        >
          {!menuActive && (
            <CiMenuBurger
              className="absolute right-[-30px] top-2 text-[30px] cursor-pointer text-white"
              onClick={() => setMenuActive(!menuActive)}
            />
          )}
          {menuActive && (
            <CiMenuFries
              className="absolute right-[-30px] top-2 text-[30px] cursor-pointer text-white"
              onClick={() => setMenuActive(!menuActive)}
            />
          )}
          <div className="w-[100%] min-h-[50px]  flex items-center justify-center text-blue-950">
            <p className="w-[80%] h-[100%] flex items-center justify-start gap-5 text-[25x] font-[700]">
              <icon.BiUserCircle className="text-[30px]" /> Hello User
            </p>
          </div>
          {/* tranding */}
          <div className="w-[100%] min-h-[50px] border-b  gap-2 flex flex-col items-center justify-start">
            <div className="w-[100%] h-[40px] flex items-center justify-start">
              <h1 className="pl-[10%] text-[20px] font-[600] font-serif">
                Trading
              </h1>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start ">
              <p className="pl-[10%]  h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                Best Seller
              </p>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                New Releases
              </p>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                Others
              </p>
            </div>
          </div>
          {/*  */}
          <div className="w-[100%] min-h-[50px] border-b  gap-2 flex flex-col items-center justify-start">
            <div className="w-[100%] h-[40px] flex items-center justify-start">
              <h1 className="pl-[10%] text-[20px] font-[600] font-serif">
                Trading
              </h1>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start ">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                Best Seller
              </p>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                New Releases
              </p>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                Others
              </p>
            </div>
          </div>
          {/*  */}
          <div className="w-[100%] min-h-[50px] border-b  gap-2 flex flex-col items-center justify-start">
            <div className="w-[100%] h-[40px] flex items-center justify-start">
              <h1 className="pl-[10%] text-[20px] font-[600] font-serif">
                Trading
              </h1>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start ">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                Best Seller
              </p>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                New Releases
              </p>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                Others
              </p>
            </div>
          </div>
          {/*  */}
          <div className="w-[100%] min-h-[50px] border-b  gap-2 flex flex-col items-center justify-start">
            <div className="w-[100%] h-[40px] flex items-center justify-start">
              <h1 className="pl-[10%] text-[20px] font-[600] font-serif">
                Trading
              </h1>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start ">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                Best Seller
              </p>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                New Releases
              </p>
            </div>
            <div className="w-[100%] h-[30px] flex items-center justify-start">
              <p className="pl-[10%] h-[100%] flex items-center hover:bg-slate-100 w-[100%] cursor-pointer">
                Others
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center h-[200px] fixed text-white bg-gradient-to-b from-orange-500 z-[1000]">
        <div className="w-[60%] h-[50%] flex items-center justify-center">
          <div className="w-[100%] h-[100%] flex gap-10 items-center justify-end ">
            <Link
              className="text-[30px] w-[20%] h-[100%] flex items-center justify-end "
              href="/"
            >
              Logo
            </Link>
            <div className="w-[80%] h-[100%] flex gap-10 items-center justify-center text-[13px] cursor-pointer">
              <Link
                href="/"
                className=" transition-[1s]   hover:border rounded-full py-1 px-2 hover:border-white"
              >
                Home
              </Link>
              <Link
                href="#"
                className=" transition-[1s]   hover:border rounded-full py-1 px-2 hover:border-white"
              >
                Features
              </Link>
              <Link
                href="#"
                className=" transition-[1s]   hover:border rounded-full py-1 px-2 hover:border-white"
              >
                Service
              </Link>
              <Link
                href="#"
                className=" transition-[1s]   hover:border rounded-full py-1 px-2 hover:border-white"
              >
                Listed
              </Link>
              <Link
                href="#"
                className=" transition-[1s]   hover:border rounded-full py-1 px-2 hover:border-white"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="w-[30%] h-[100%] flex gap-5 items-center justify-center">
            {isUserLogin ? (
              <div className="">
                <icon.BiSolidUserCircle />
              </div>
            ) : (
              <>
                <Link href="/authentication/Login">Login</Link>
                <Link
                  href="/authentication/Signup"
                  className="py-1 px-6 text-orange-500 bg-white border border-white  rounded-md"
                >
                  Singup
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="w-[100%] h-[50%] flex items-start justify-center relative">
          <input
            type="text"
            className="w-[50%] h-[40%] border border-gray-500 rounded-md  pl-5"
            value={search}
            onMouseEnter={() => {
              setPlaceholder(false);
            }}
            onMouseOut={() => {
              if (search == "") {
                setPlaceholder(true);
              }
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
          {placeholder && (
            <div className="absolute left-[26.5%] top-2 text-gray-400">
              {" "}
              <Typewriter
                options={{
                  strings: ["Search anything", "Sarch anytime"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          )}
          <div className="w-[50px] h-[40%] bg-blue-950 ml-1 rounded-md absolute right-[25%] text-white flex items-center justify-center text-[25px] cursor-pointer">
            <BiSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
