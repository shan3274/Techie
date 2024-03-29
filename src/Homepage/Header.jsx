import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Typewriter from "typewriter-effect";
import { BiSearch } from "react-icons/bi";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { duration } from "@mui/material";

import * as icon from "react-icons/bi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase-config";
import Userdash from "@/pages/authentication/Userdash";
import { useRouter } from "next/router";
import Assistant from "./Assistant";
const Header = () => {
  const [placeholder, setPlaceholder] = useState(true);
  const [search, setSearch] = useState("");
  const [menuActive, setMenuActive] = useState(false);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState([]);
  const [userEmail, setUserEmail] = useState("");

  // navigation

  const route = useRouter();

  // modal state
  const [userModal, setUserModal] = useState(false);

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
    userCall();
  }, []);
  useEffect(() => {
    let localemail;
    if (typeof window !== "undefined") {
      localemail = window.localStorage.getItem("userEmail");
      setUserEmail(localemail);
    }
    if (localStorage.getItem("userEmail")) {
      setUserLogin(true);
      user.map((data) => {
        if (localemail === data.email) {
          setUserName(data.fullName);
          localStorage.setItem("sellerType", data.industryType);
          localStorage.setItem("userName", data.userName);
        }
      });
    }
  }, [user]);

  return (
    <>
      <div
        className={` w-0 h-screen fixed top-0 z-[10001] ${
          menuActive && "bg-[rgba(0,0,0,0.7)]"
        } ${menuActive && "w-full "} `}
      >
        <div
          className={`relative top-0 left-[-300px] w-[300px] flex flex-col ${
            menuActive && "left-[0px]"
          } h-screen bg-white duration-300 rounded-r-lg border-l drop-shadow-lg`}
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
              <icon.BiUserCircle className="text-[30px]" /> Hello {userName}
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

      <div className="w-full flex flex-col items-center justify-center h-[100px] fixed text-white bg-gradient-to-b from-orange-500 to-white z-[1000]">
        <div className="w-[65%] h-[10F0%] flex items-center justify-center">
          <div className="w-[100%] h-[100%] flex gap-10 items-center justify-end ">
            <Link
              className="text-[30px] w-[35%] h-[100%] flex items-center justify-end "
              href="/"
            >
              <img src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2FSaaro-removebg-preview.png?alt=media&token=9e15bc67-b468-427c-96e6-2e6dd235871c" />
            </Link>
            <div className="w-[100%] h-[100%] flex gap-10 items-center justify-center text-[13px] xl:text-[15px] cursor-pointer">
              <Link
                href="/"
                className=" transition-[1s]   hover:border rounded-full py-1 px-2 hover:border-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className=" transition-[1s]   hover:border rounded-full py-1 px-2 hover:border-white"
              >
                About us
              </Link>
              {/* <Link
                href="#"
                className=" transition-[1s]   hover:border rounded-full py-1 px-2 hover:border-white"
              >
                Work
              </Link> */}
              <Link
                href="/business"
                className=" transition-[1s]   hover:border rounded-full py-1 px-2 hover:border-white"
              >
                Our Business
              </Link>
              <Link
                href="/contact"
                className=" transition-[1s]   hover:border rounded-full py-1 px-2 hover:border-white"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="w-[30%] h-[100%] flex gap-5 items-center justify-center">
            {isUserLogin ? (
              <>
                <div className="">{userName}</div>
                <div className=" text-[30px] cursor-pointer">
                  <icon.BiSolidUserCircle
                    onClick={() => {
                      setUserModal(!userModal);
                    }}
                  />
                </div>
              </>
            ) : (
              <>
                <Link href="/authentication/Login">Login</Link>
                <Link
                  href="/authentication/Signup"
                  className="py-1 px-6 text-orange-500 bg-white border border-white  rounded-md"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {/* user profile */}
      <div
        className={`fixed right-[-300px] top-0 w-[300px] h-screen bg-white z-[10005] boreder rounded-l-lg drop-shadow-lg duration-300  ${
          userModal && "right-[0px]"
        }`}
      >
        <div className="w-[100%] h-[100%] relative flex items-center justify-center">
          <div className="absolute top-10 text-[20px] font-[500] text-gray-600">
            {userName}
          </div>
          <div className="absolute bottom-10">
            <button
              className="w-[100px] h-[40px] bg-black rounded-lg text-white drop-shadow-md"
              onClick={() => {
                localStorage.removeItem("userEmail");
                localStorage.removeItem("sellerType");
                localStorage.removeItem("userName");
                window.location.reload(true);
              }}
            >
              Logut
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
