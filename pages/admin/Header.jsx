import React, { useEffect, useId, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { MenuOpen } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
const Homepage = () => {
  // menu check state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   rounting
  const route = useRouter();

  // admin details state
  const [userid, setUserid] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("adminLogedin")) {
      route.push("/admin");
    }
    setUserid(localStorage.getItem("adminId"));
  }, []);
  return (
    <>
      {/* logout */}
      <div className="absolute top-0 right-0  w-[30rem] h-[5rem] flex items-center justify-center gap-5  z-[10002] text-white">
        <div className=""> {userid}</div>
        <button
          className="px-5 py-2 bg-blue-400 rounded-lg text-white"
          onClick={() => {
            localStorage.removeItem("adminLogedin");
            localStorage.removeItem("adminId");
            localStorage.removeItem("adminPassword");
            route.push("/admin");
          }}
        >
          Logout
        </button>
      </div>
      {/* Heading */}
      <div className="absolute top-0 left-0 w-full h-[5rem] bg-blue-950 flex items-center justify-center z-[10001]">
        <h1 className="text-[35px] font-[500] text-white transition-[1s] hover:scale-[1.03] cursor-pointer">
          Admin <span className="text-red-500">panel</span>
        </h1>
      </div>
      {/* Sidebar */}
      <div
        className={`absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] h-screen z-[10002]  ${
          isMenuOpen && "w-full"
        }`}
      >
        {/* main side bar */}
        <div
          className={`fixed top-0 left-[-300px] w-[300px] h-screen bg-white rounded-r-xl border drop-shadow-2xl duration-300   ${
            isMenuOpen && "left-[0px]"
          }`}
        >
          {/* menu button */}
          <div className="relative w-[60px] h-[60px] top-5 left-[300px] text-white text-[30px] duration-300 cursor-pointer">
            {isMenuOpen ? (
              <AiOutlineMenuFold
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            ) : (
              <AiOutlineMenuUnfold
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              />
            )}
          </div>
          {/* menu items */}
          <div className="w-[100%] h-[100%]  absolute top-0 rounded-r-xl flex items-center flex-col justify-center gap-5 text-[20px] text-blue-400">
            <h1 className="text-[25px] text-blue-950 absolute top-5 font-[500]">
              Admin dashboard
            </h1>
            <Link href="/admin/Homepage">Product request</Link>
            <Link href="/admin/Account">Account request</Link>
            <Link href="/admin/addusers">Add users</Link>
            <Link href="/admin/Users">Users</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
