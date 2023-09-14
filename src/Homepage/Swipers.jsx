import React, { useEffect, useRef, useState } from "react";
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
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase-config";

const Swipers = () => {
  const [datas, setDatas] = useState([]);
  const data = async () => {
    await getDocs(collection(db, "Ads")).then((response) => {
      setDatas(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };
  console.log(datas);
  useEffect(() => {
    data();
  }, []);
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
          {datas.map((item) => {
            return (
              <SwiperSlide>
                <div className="w-[100%] h-[100%] flex items-center justify-center">
                  <div className="w-[80%] h-[100%] bg-orange-400 flex  items-center justify-center rounded-2xl border border-orange-500">
                    <div className="w-[50%] h-[100%] flex flex-col items-start justify-center gap-10 pl-10">
                      <div className="w-[150px] font-[500] text-white">
                        <img src={item?.logo} alt="" className="w-[100px]" />
                      </div>
                      <div className="xl:text-[40px] text-[30px] text-blue-950 font-[600] text-left ">
                        {item.title}
                      </div>
                      <div className="w-[60%] xl:text-[15px] text-[13px] text-left text-white">
                        {item.address}
                      </div>
                      <Link
                        href={{
                          pathname: "/ads",
                          query: {
                            id: item.id,
                          },
                        }}
                        className="w-[150px] h-[40px] bg-white text-orange-500 rounded-full transition-[1s] hover:scale-[1.02] flex items-center justify-center"
                      >
                        Know more
                      </Link>
                    </div>
                    <div className="w-[50%] h-[100%] rounded-2xl">
                      <img
                        src={item?.image}
                        alt=""
                        className="w-[10%] h-[80% rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Swipers;
