import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import Header from "@/src/Homepage/Header";
import Footer from "@/src/Homepage/Footer";
import Link from "next/link";

const index = () => {
  const [divHover, setDivHover] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let name = localStorage.getItem("userName");
      setUserName(name);
    }
    if (userName != "") {
      setIsUserLogin(true);
    }
    if (userName == null) {
      setIsUserLogin(false);
    }
  }, [userName]);
  console.log(isUserLogin, userName);
  return (
    <>
      <Header />
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={true}
        modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <div
            className="w-full h-[90vh] flex items-center justify-center relative top-[150px] cursor-pointer overflow-hidden"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseOver={() => {
              setDivHover(true);
            }}
            onMouseOut={() => {
              setDivHover(false);
            }}
          >
            {/* this dynamic left side div */}
            <div
              className={`absolute top-0 left-[-40%] w-[40%] h-[90%] bg-gradient-to-r from-[rgba(0,0,0,0.8)] duration-300 overflow-hidden flex flex-col items-center justify-center pl-5 gap-10 ${
                divHover && "left-[0%]"
              }`}
            >
              <h1 className={`text-white text-[35px] font-[500]`}>
                This is demo
              </h1>
              <p className={`text-white text-[15px] font-[400]`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, vel cumque, velit neque earum esse adipisci eveniet
                harum, numquam odio inventore optio quos blanditiis consequuntur
                nam laborum aperiam veritatis quam.
              </p>
              <button className="bg-white text-black rounded-lg drop-shadow-lg w-[150px] h-[40px]">
                Know more
              </button>
            </div>
            {isUserLogin ? (
              <div
                className={`absolute right-[-30%] top-0 w-[30%] duration-300 bg-gradient-to-l from-[rgba(0,0,0,0.8)] h-[90%] gap-10 flex items-center justify-center flex-col  ${
                  divHover && "right-[0%]"
                }`}
              >
                {" "}
                <h1 className="text-white text-[25px] font-[500]">
                  Add your service here
                </h1>
                <p className="text-white text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  culpa assumenda voluptate labore sunt officia corrupti, minus,
                  fugiat dignissimos aperiam ab reiciendis laboriosam nulla
                  nesciunt laudantium sit unde odio eligendi!
                </p>
                <Link
                  href="/consultancy/Form"
                  className="w-[100px] h-[35px] bg-blue-400 text-white rounded-lg drop-shadow-lg flex items-center justify-center transition-[1s] hover:scale-[1.05]"
                >
                  Add +
                </Link>
              </div>
            ) : (
              <div
                className={`absolute right-[-30%] top-0 w-[30%] duration-300 bg-gradient-to-l from-[rgba(0,0,0,0.8)] h-[90%] gap-10 flex items-center justify-center flex-col  ${
                  divHover && "right-[0%]"
                }`}
              >
                <h1 className="text-white text-[25px] font-[500]">
                  Please loging into your account
                </h1>
                <div className="w-[100%] flex items-center justify-center gap-5">
                  <Link
                    href="/authentication/Login"
                    className="w-[100px] h-[35px] bg-blue-400 text-white rounded-lg drop-shadow-lg flex items-center justify-center transition-[1s] hover:scale-[1.05]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[90vh] flex items-center justify-center relative top-[150px] cursor-pointer overflow-hidden"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseOver={() => {
              setDivHover(true);
            }}
            onMouseOut={() => {
              setDivHover(false);
            }}
          >
            {/* this dynamic left side div */}
            <div
              className={`absolute top-0 z-[-1] left-[-40%] w-[40%] h-[90%] bg-gradient-to-r from-[rgba(0,0,0,0.8)] duration-300 overflow-hidden flex flex-col items-center justify-center pl-5 gap-10 ${
                divHover && "left-[0%] z-[1]"
              }`}
            >
              <h1 className={`text-white text-[35px] font-[500]`}>
                This is demo
              </h1>
              <p className={`text-white text-[15px] font-[400]`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, vel cumque, velit neque earum esse adipisci eveniet
                harum, numquam odio inventore optio quos blanditiis consequuntur
                nam laborum aperiam veritatis quam.
              </p>
              <button className="bg-white text-black rounded-lg drop-shadow-lg w-[150px] h-[40px]">
                Know more
              </button>
            </div>
            {isUserLogin ? (
              <div
                className={`absolute right-[-30%] top-0 w-[30%] duration-300 bg-gradient-to-l from-[rgba(0,0,0,0.8)] h-[90%] gap-10 flex items-center justify-center flex-col  ${
                  divHover && "right-[0%]"
                }`}
              >
                {" "}
                <h1 className="text-white text-[25px] font-[500]">
                  Add your service here
                </h1>
                <p className="text-white text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  culpa assumenda voluptate labore sunt officia corrupti, minus,
                  fugiat dignissimos aperiam ab reiciendis laboriosam nulla
                  nesciunt laudantium sit unde odio eligendi!
                </p>
                <Link
                  href="/consultancy/Form"
                  className="w-[100px] h-[35px] bg-blue-400 text-white rounded-lg drop-shadow-lg flex items-center justify-center transition-[1s] hover:scale-[1.05]"
                >
                  Add +
                </Link>
              </div>
            ) : (
              <div
                className={`absolute right-[-30%] top-0 w-[30%] duration-300 bg-gradient-to-l from-[rgba(0,0,0,0.8)] h-[90%] gap-10 flex items-center justify-center flex-col  ${
                  divHover && "right-[0%]"
                }`}
              >
                <h1 className="text-white text-[25px] font-[500]">
                  Please loging into your account
                </h1>
                <div className="w-[100%] flex items-center justify-center gap-5">
                  <Link
                    href="/authentication/Login"
                    className="w-[100px] h-[35px] bg-blue-400 text-white rounded-lg drop-shadow-lg flex items-center justify-center transition-[1s] hover:scale-[1.05]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[90vh] flex items-center justify-center relative top-[150px] cursor-pointer overflow-hidden"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseOver={() => {
              setDivHover(true);
            }}
            onMouseOut={() => {
              setDivHover(false);
            }}
          >
            {/* this dynamic left side div */}
            <div
              className={`absolute top-0 left-[-40%] w-[40%] h-[90%] bg-gradient-to-r from-[rgba(0,0,0,0.8)] duration-300 overflow-hidden flex flex-col items-center justify-center pl-5 gap-10 ${
                divHover && "left-[0%]"
              }`}
            >
              <h1 className={`text-white text-[35px] font-[500]`}>
                This is demo
              </h1>
              <p className={`text-white text-[15px] font-[400]`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, vel cumque, velit neque earum esse adipisci eveniet
                harum, numquam odio inventore optio quos blanditiis consequuntur
                nam laborum aperiam veritatis quam.
              </p>
              <button className="bg-white text-black rounded-lg drop-shadow-lg w-[150px] h-[40px]">
                Know more
              </button>
            </div>
            {isUserLogin ? (
              <div
                className={`absolute right-[-30%] top-0 w-[30%] duration-300 bg-gradient-to-l from-[rgba(0,0,0,0.8)] h-[90%] gap-10 flex items-center justify-center flex-col  ${
                  divHover && "right-[0%]"
                }`}
              >
                {" "}
                <h1 className="text-white text-[25px] font-[500]">
                  Add your service here
                </h1>
                <p className="text-white text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  culpa assumenda voluptate labore sunt officia corrupti, minus,
                  fugiat dignissimos aperiam ab reiciendis laboriosam nulla
                  nesciunt laudantium sit unde odio eligendi!
                </p>
                <Link
                  href="/consultancy/Form"
                  className="w-[100px] h-[35px] bg-blue-400 text-white rounded-lg drop-shadow-lg flex items-center justify-center transition-[1s] hover:scale-[1.05]"
                >
                  Add +
                </Link>
              </div>
            ) : (
              <div
                className={`absolute right-[-30%] top-0 w-[30%] duration-300 bg-gradient-to-l from-[rgba(0,0,0,0.8)] h-[90%] gap-10 flex items-center justify-center flex-col  ${
                  divHover && "right-[0%]"
                }`}
              >
                <h1 className="text-white text-[25px] font-[500]">
                  Please loging into your account
                </h1>
                <div className="w-[100%] flex items-center justify-center gap-5">
                  <Link
                    href="/authentication/Login"
                    className="w-[100px] h-[35px] bg-blue-400 text-white rounded-lg drop-shadow-lg flex items-center justify-center transition-[1s] hover:scale-[1.05]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[90vh] flex items-center justify-center relative top-[150px] cursor-pointer overflow-hidden"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseOver={() => {
              setDivHover(true);
            }}
            onMouseOut={() => {
              setDivHover(false);
            }}
          >
            {/* this dynamic left side div */}
            <div
              className={`absolute top-0 left-[-40%] w-[40%] h-[90%] bg-gradient-to-r from-[rgba(0,0,0,0.8)] duration-300 overflow-hidden flex flex-col items-center justify-center pl-5 gap-10 ${
                divHover && "left-[0%]"
              }`}
            >
              <h1 className={`text-white text-[35px] font-[500]`}>
                This is demo
              </h1>
              <p className={`text-white text-[15px] font-[400]`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, vel cumque, velit neque earum esse adipisci eveniet
                harum, numquam odio inventore optio quos blanditiis consequuntur
                nam laborum aperiam veritatis quam.
              </p>
              <button className="bg-white text-black rounded-lg drop-shadow-lg w-[150px] h-[40px]">
                Know more
              </button>
            </div>
            {isUserLogin ? (
              <div
                className={`absolute right-[-30%] top-0 w-[30%] duration-300 bg-gradient-to-l from-[rgba(0,0,0,0.8)] h-[90%] gap-10 flex items-center justify-center flex-col  ${
                  divHover && "right-[0%]"
                }`}
              >
                {" "}
                <h1 className="text-white text-[25px] font-[500]">
                  Add your service here
                </h1>
                <p className="text-white text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  culpa assumenda voluptate labore sunt officia corrupti, minus,
                  fugiat dignissimos aperiam ab reiciendis laboriosam nulla
                  nesciunt laudantium sit unde odio eligendi!
                </p>
                <Link
                  href="/consultancy/Form"
                  className="w-[100px] h-[35px] bg-blue-400 text-white rounded-lg drop-shadow-lg flex items-center justify-center transition-[1s] hover:scale-[1.05]"
                >
                  Add +
                </Link>
              </div>
            ) : (
              <div
                className={`absolute right-[-30%] top-0 w-[30%] duration-300 bg-gradient-to-l from-[rgba(0,0,0,0.8)] h-[90%] gap-10 flex items-center justify-center flex-col  ${
                  divHover && "right-[0%]"
                }`}
              >
                <h1 className="text-white text-[25px] font-[500]">
                  Please login into your account
                </h1>
                <div className="w-[100%] flex items-center justify-center gap-5">
                  <Link
                    href="/authentication/Login"
                    className="w-[100px] h-[35px] bg-blue-400 text-white rounded-lg drop-shadow-lg flex items-center justify-center transition-[1s] hover:scale-[1.05]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[90vh] flex items-center justify-center relative top-[150px] cursor-pointer overflow-hidden"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseOver={() => {
              setDivHover(true);
            }}
            onMouseOut={() => {
              setDivHover(false);
            }}
          >
            {/* this dynamic left side div */}
            <div
              className={`absolute top-0 left-[-40%] w-[40%] h-[90%] bg-gradient-to-r from-[rgba(0,0,0,0.8)] duration-300 overflow-hidden flex flex-col items-center justify-center pl-5 gap-10 ${
                divHover && "left-[0%]"
              }`}
            >
              <h1 className={`text-white text-[35px] font-[500]`}>
                This is demo
              </h1>
              <p className={`text-white text-[15px] font-[400]`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, vel cumque, velit neque earum esse adipisci eveniet
                harum, numquam odio inventore optio quos blanditiis consequuntur
                nam laborum aperiam veritatis quam.
              </p>
              <button className="bg-white text-black rounded-lg drop-shadow-lg w-[150px] h-[40px]">
                Know more
              </button>
            </div>
            {isUserLogin ? (
              <div
                className={`absolute right-[-30%] top-0 w-[30%] duration-300 bg-gradient-to-l from-[rgba(0,0,0,0.8)] h-[90%] gap-10 flex items-center justify-center flex-col  ${
                  divHover && "right-[0%]"
                }`}
              >
                {" "}
                <h1 className="text-white text-[25px] font-[500]">
                  Add your service here
                </h1>
                <p className="text-white text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  culpa assumenda voluptate labore sunt officia corrupti, minus,
                  fugiat dignissimos aperiam ab reiciendis laboriosam nulla
                  nesciunt laudantium sit unde odio eligendi!
                </p>
                <Link
                  href="/consultancy/Form"
                  className="w-[100px] h-[35px] bg-blue-400 text-white rounded-lg drop-shadow-lg flex items-center justify-center transition-[1s] hover:scale-[1.05]"
                >
                  Add +
                </Link>
              </div>
            ) : (
              <div
                className={`absolute right-[-30%] top-0 w-[30%] duration-300 bg-gradient-to-l from-[rgba(0,0,0,0.8)] h-[90%] gap-10 flex items-center justify-center flex-col  ${
                  divHover && "right-[0%]"
                }`}
              >
                <h1 className="text-white text-[25px] font-[500]">
                  Please loging into your account
                </h1>
                <div className="w-[100%] flex items-center justify-center gap-5">
                  <Link
                    href="/authentication/Login"
                    className="w-[100px] h-[35px] bg-blue-400 text-white rounded-lg drop-shadow-lg flex items-center justify-center transition-[1s] hover:scale-[1.05]"
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full flex items-center justify-center mb-10">
        <div className="w-[95vw] h-[50vh]  bg-[rgba(0,0,0,0.5)] gap-10 rounded-2xl border drop-shadow-xl mt-10 flex flex-col items-center justify-center">
          <h1 className="text-[35px] text-white font-[600]">Consultancy</h1>
          <p className=" text-center text-white w-[60%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            dolores quo quas inventore accusamus aspernatur possimus adipisci
            molestias doloribus. Praesentium, corrupti. Recusandae, voluptas
            neque repudiandae dolores porro in asperiores sint.
          </p>
          <button className="w-[150px] h-[40px] rounded-lg bg-white drop-shadow-lg transition-[1s] hover:scale-[1.05]">
            Know more
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
