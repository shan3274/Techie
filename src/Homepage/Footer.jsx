import React from "react";
import Accordion from "./Accordion/Disclaimer";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { StyledEngineProvider } from "@mui/material";
const Footer = () => {
  return (
    <div className="w-full h-[70vh]  relative top-[158vh]  flex flex-col items-center justify-center text-blue-950">
      <div className="w-[100%] h-[15%] flex items-center justify-center ">
        <div className="w-[100%] h-[100%] flex items-center justify-center p-3 text-center text-[15px] text-gray-500 border-b ">
          <Typewriter
            options={{
              strings: [
                "Company X is a platform facilitating online transactions between sellers and buyers. We do not assume any liability or warranty for the products or services listed on our platform. Sellers and buyers are solely responsible for all aspects of selling, buying, and any related disputes.",
                "Company X acts as a facilitator for online transactions between sellers and buyers. We do not bear any responsibility or provide any warranty for the products or services listed on our platform. All aspects of selling, buying, and any disputes arising from transactions are the sole responsibility of the sellers and buyers involved.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="w-[100%] h-[90%] flex ">
        <div className="w-[60%] h-[100%] flex-col flex items-center justify-center">
          <div className="w-[100%] h-[80%] flex items-center justify-center">
            <div className="w-[80%] h-[80%] flex items-start justify-around ">
              <div className="w-[20%] h-[100%] flex flex-col items-start justify-center gap-5">
                <div className="cursor-pointer">Disclaimer</div>
                <div className="cursor-pointer">About</div>
                <div className="cursor-pointer">Career</div>
                <div className="cursor-pointer">Disclaimer</div>
                <div className="cursor-pointer">Disclaimer</div>
              </div>
              <div className="w-[20%] h-[100%] flex flex-col items-start justify-center gap-5">
                <div className="cursor-pointer">Disclaimer</div>
                <div className="cursor-pointer">About</div>
                <div className="cursor-pointer">Career</div>
                <div className="cursor-pointer">Disclaimer</div>
                <div className="cursor-pointer">Disclaimer</div>
              </div>
              <div className="w-[20%] h-[100%] flex flex-col items-start justify-center gap-5">
                <div className="cursor-pointer">Disclaimer</div>
                <div className="cursor-pointer">About</div>
                <div className="cursor-pointer">Career</div>
                <div className="cursor-pointer">Disclaimer</div>
                <div className="cursor-pointer">Disclaimer</div>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[20%] flex items-center justify-center gap-10 text-[30px] text-blue-950">
            <AiFillInstagram className="cursor-pointer" />
            <AiFillTwitterSquare className="cursor-pointer" />
            <AiFillFacebook className="cursor-pointer" />
            <AiFillYoutube className="cursor-pointer" />
          </div>
        </div>
        <div className="w-[40%] h-[100%] flex items-center justify-center flex-col">
          <div className="w-[100%] h-[20%] flex items-center justify-center text-[30px] font-[600] text-blue-950">
            Ask Your Query
          </div>
          <div className="w-[100%] h-[80%] flex flex-col items-center justify-center">
            <div className="w-[100%] h-[20%] flex item-center justify-center gap-5">
              <input
                type="text"
                className="w-[30%] h-[40px] border border-black rounded-lg pl-4"
                placeholder="first name"
              />

              <input
                type="text"
                className="w-[30%] h-[40px] border border-black rounded-lg pl-4"
                placeholder="last name"
              />
            </div>
            <div className="w-[100%] h-[20%] flex item-center justify-center gap-5">
              <input
                type="email"
                className="w-[63%] h-[40px] border border-black rounded-lg pl-4"
                placeholder="email"
              />
            </div>
            <div className="w-[100%] h-[40%] flex item-center justify-center gap-5">
              <textarea
                className="w-[63%] h-[100px] border border-black rounded-lg pl-4 pt-1 resize-none"
                placeholder="your query"
              ></textarea>
            </div>
            <div className="w-[100%] h-[20%] flex item-center justify-center gap-5">
              <button className="w-[30%] h-[40px] bg-blue-950 rounded-lg text-white transition-[1s] hover:scale-[1.05]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
