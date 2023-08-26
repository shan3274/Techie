import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import Link from "next/link";

const Productcards = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {Object.keys(props).map((key, item) => {
          return (
            <SwiperSlide key={key}>
              <Link
                href={{
                  pathname: `/buy/${props[key].id}`,
                  query: {
                    productPath: props[key].path,
                  },
                }}
                className="w-[300px] h-[400px] mx-10 flex items-center justify-center relative flex-col gap-10 cursor-pointer border"
              >
                <img
                  src={props[key].imageUrls[0]}
                  style={{
                    width: "100%",
                    height: "60%",
                    zIndex: "1000",
                    position: "absolute",
                    top: "0",
                  }}
                />
                <div className="w-full flex flex-col items-center justify-center gap-3 absolute top-[68%]">
                  <p className="font-[500] text-[23px] ">
                    {props[key].productName}
                  </p>
                  <p className="text-gray-500">{props[key].type}</p>
                </div>
                <button className="absolute bottom-2 w-[70%] h-[40px] rounded-lg bg-black text-white">
                  Buy now
                </button>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Productcards;
