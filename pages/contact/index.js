import Header from "@/src/Homepage/Header";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const index = () => {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[35%] h-[70%] bg-white border drop-shadow-lg rounded-md flex items-center justify-center flex-col gap-10 py-10">
          <label className="text-[30px] text-blue-600 font-[600]">
            Contact Us
          </label>
          <textarea
            className="w-[80%] h-[30%] border resize-none border-black pl-5 pt-5 rounded-md"
            placeholder="Your Query"
          />
          <input
            type="email"
            className="w-[80%] h-[40px] border border-black  rounded-md pl-5"
            placeholder="Email"
          />
          <button className="w-[150px] h-[40px] bg-green-500 text-white rounded-md transition-[1s] hover:scale-[1.02]">
            Send
          </button>
          <div className="">abc 124 north east absc thsh</div>
          <div className="w-[50%] h-[10%] flex items-center justify-around text-[30px] text-blue-800 cursor-pointer">
            <AiFillInstagram />
            <AiFillFacebook />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
