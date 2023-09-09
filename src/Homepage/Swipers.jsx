import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Typewriter from "typewriter-effect";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import house from "@/public/house.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const Swipers = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center absolute top-[45vh]  ">
      <div className="w-[100%] h-[100%] flex items-center justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-[100%] h-[100%] flex items-center justify-center">
              <div className="w-[80%] h-[100%] bg-orange-400 flex  items-center justify-center rounded-2xl border border-orange-500">
                <div className="w-[50%] h-[100%] flex flex-col items-start justify-center gap-10 pl-10">
                  <div className="w-[150px] font-[500] text-white">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2FScreenshot_2023-09-06_at_7.26.26_PM-removebg-preview.png?alt=media&token=5d47c80d-ec71-4f20-adef-55e3a6d467f9"
                      alt=""
                      className="w-[100px]"
                    />
                  </div>
                  <div className="xl:text-[40px] text-[30px] text-blue-950 font-[600] text-left ">
                    LIGHTNING PROTECTION SYSTEMS
                  </div>
                  <div className="w-[90%] xl:text-[15px] text-[13px] text-justify text-white">
                    Doksun Power Private Limited
                    <br />
                    Plot No. SPL 4305-1-2, Road No.
                    <br />
                    4, GIDC Sachin, Opp. Shilpa Dyeing Mills, Nr. Sagar Hotel,
                    <br />
                    Sachin GIDC 394230 (Gujarat) Contact: 9925012385,
                    <br />
                    9978788822, 8209766170
                    <br />
                    Email:sales@doksunpower.com,
                    <br />
                    doksunpower@gmail.com, dpplsrt@gmail.com
                    <br />
                  </div>
                  <Link
                    href={{
                      pathname: "/ads",
                      query: {
                        logo: "https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2FScreenshot_2023-09-06_at_7.26.26_PM-removebg-preview.png?alt=media&token=5d47c80d-ec71-4f20-adef-55e3a6d467f9",
                        img: "https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2FScreenshot%202023-09-06%20at%207.07.36%E2%80%AFPM.png?alt=media&token=d6f6ba1f-2006-4f19-8f6e-ede6f3aab696",
                      },
                    }}
                    className="w-[150px] h-[40px] bg-white text-orange-500 rounded-full transition-[1s] hover:scale-[1.02] flex items-center justify-center"
                  >
                    Know more
                  </Link>
                </div>
                <div className="w-[50%] h-[100%] rounded-2xl">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2FScreenshot%202023-09-06%20at%207.07.36%E2%80%AFPM.png?alt=media&token=d6f6ba1f-2006-4f19-8f6e-ede6f3aab696"
                    alt=""
                    className="w-[10%] h-[80% rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[100%] flex items-center justify-center">
              <div className="w-[80%] h-[100%] bg-orange-400 flex  items-center justify-center rounded-2xl border border-orange-500">
                <div className="w-[50%] h-[100%] flex flex-col items-start justify-center gap-10 pl-10">
                  <div className="w-[150px] font-[500] text-white">
                    <img
                      src="https://scontent.fdel11-2.fna.fbcdn.net/v/t39.30808-6/307360982_403517838622510_3643671835826484352_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=lLYV_h-KVq0AX8fms9c&_nc_ht=scontent.fdel11-2.fna&oh=00_AfB4fiRXjWM9olkBRnjbQRIOqZP0PsSJzgJcBiUNZGPnOw&oe=64FE5E0E"
                      alt=""
                      className="w-[100px]"
                    />
                  </div>
                  <div className="xl:text-[40px] text-[30px] text-blue-950 font-[600] text-left ">
                    LIGHTNING PROTECTION SYSTEMS
                  </div>
                  <div className="w-[90%] xl:text-[15px] text-[13px] text-justify text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sint fuga dicta voluptatum architecto, a aperiam molestiae.
                    Veritatis ipsum expedita nesciunt ea quis tempora dolorem
                    beatae. Voluptatum facere similique incidunt quo.
                  </div>
                  <Link
                    href={{
                      pathname: "/ads",
                      query: {
                        logo: "https://scontent.fdel11-2.fna.fbcdn.net/v/t39.30808-6/307360982_403517838622510_3643671835826484352_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=lLYV_h-KVq0AX8fms9c&_nc_ht=scontent.fdel11-2.fna&oh=00_AfB4fiRXjWM9olkBRnjbQRIOqZP0PsSJzgJcBiUNZGPnOw&oe=64FE5E0E",
                        img: "https://images.jdmagicbox.com/quickquotes/images_main/ms-pipe-galvanized-jindal-india-385792770-hwh6i.png",
                      },
                    }}
                    className="w-[150px] h-[40px] bg-white text-orange-500 rounded-full transition-[1s] hover:scale-[1.02] flex items-center justify-center"
                  >
                    Know more
                  </Link>
                </div>
                <div className="w-[50%] h-[100%] rounded-2xl">
                  <img
                    src="https://images.jdmagicbox.com/quickquotes/images_main/ms-pipe-galvanized-jindal-india-385792770-hwh6i.png"
                    alt=""
                    className="w-[10%] h-[80% rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipers;
