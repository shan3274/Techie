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

const Swipers = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center absolute top-[55vh]  ">
      <div className=" lg:top-[-17rem] top-[10rem] px-2 text-[30px] animate-pulse font-[700] z-[1000] absolute text-blue-950  ">
        ONE STOP SOLUTION FOR TECHNICAL PRODUCTS AND SERVICES
      </div>
      <div className="w-[100%] h-[100%] flex items-center justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 5500,
          //   disableOnInteraction: false,
          // }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-[100%] h-[100%] flex items-center justify-center">
              <div className="w-[80%] h-[100%] bg-orange-400 flex  items-center justify-center rounded-2xl">
                <div className="w-[70%] h-[100%]  flex sm:flex-row flex-col items-center justify-center">
                  <div className="w-[50%] h-[100%] flex flex-col items-start justify-center">
                    <p className="text-[18px] text-white w-[80%] flex items-start justify-start ">
                      Welcom to X Company
                    </p>
                    <h1 className="lg:text-[40px] w-[70%] text-left text-blue-950">
                      This is demo heading page of here
                    </h1>
                    <div className="h-[100px] w-[80%] text-justify text-[15px] text-white my-10">
                      <Typewriter
                        options={{
                          strings: [
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis nemo ex laborum, assumenda cumque incidunt. Vel,pariatur. Fugit ea omnis, sint laboriosam eaque velit sedfacere aperiam odit voluptate quasi.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                    <button className="px-5 py-2 bg-white text-orange-500 border  rounded-full">
                      Know more
                    </button>
                  </div>
                  <div className="w-[50%] h-[100%] flex flex-col items-center justify-center">
                    <div className="w-[20rem] h-[15rem]  object-cover relative flex items-center justify-center  ">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                        alt="not found"
                        className="rounded-lg absolute left-0 top-0 w-[20rem] h-[10rem] object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="w-[100%] h-[100%] relative object-cover">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                alt="not found"
                className="rounded-lg absolute left-0 top-0 w-[100%]  object-cover"
              />
            </div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[100%] flex items-center justify-center">
              <div className="w-[80%] h-[100%] bg-orange-400 flex  items-center justify-center rounded-2xl">
                <div className="w-[70%] h-[100%]  flex sm:flex-row flex-col items-center justify-center">
                  <div className="w-[50%] h-[100%] flex flex-col items-start justify-center">
                    <p className="text-[18px] text-white w-[80%] flex items-start justify-start ">
                      Welcom to X Company
                    </p>
                    <h1 className="sm:text-[60px] w-[100%] text-left text-blue-950">
                      This is demo heading page of here
                    </h1>
                    <div className="h-[100px] w-[80%] text-justify text-white my-10">
                      <Typewriter
                        options={{
                          strings: [
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis nemo ex laborum, assumenda cumque incidunt. Vel,pariatur. Fugit ea omnis, sint laboriosam eaque velit sedfacere aperiam odit voluptate quasi.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                    <button className="px-5 py-2 bg-white text-orange-500 border  rounded-full">
                      Know more
                    </button>
                  </div>
                  <div className="w-[50%] h-[100%] flex flex-col items-center justify-center">
                    <div className="w-[500px] h-[300px] object-cover relative flex items-center justify-center  ">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                        alt="not found"
                        className="rounded-lg absolute left-0 top-0 w-[500px] h-[300px] object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="w-[100%] h-[100%] relative object-cover">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                alt="not found"
                className="rounded-lg absolute left-0 top-0 w-[100%]  object-cover"
              />
            </div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[100%] flex items-center justify-center">
              <div className="w-[80%] h-[100%] bg-orange-400 flex  items-center justify-center rounded-2xl">
                <div className="w-[70%] h-[100%]  flex sm:flex-row flex-col items-center justify-center">
                  <div className="w-[50%] h-[100%] flex flex-col items-start justify-center">
                    <p className="text-[18px] text-white w-[80%] flex items-start justify-start ">
                      Welcom to X Company
                    </p>
                    <h1 className="sm:text-[60px] w-[100%] text-left text-blue-950">
                      This is demo heading page of here
                    </h1>
                    <div className="h-[100px] w-[80%] text-justify text-white my-10">
                      <Typewriter
                        options={{
                          strings: [
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis nemo ex laborum, assumenda cumque incidunt. Vel,pariatur. Fugit ea omnis, sint laboriosam eaque velit sedfacere aperiam odit voluptate quasi.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                    <button className="px-5 py-2 bg-white text-orange-500 border  rounded-full">
                      Know more
                    </button>
                  </div>
                  <div className="w-[50%] h-[100%] flex flex-col items-center justify-center">
                    <div className="w-[500px] h-[300px] object-cover relative flex items-center justify-center  ">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                        alt="not found"
                        className="rounded-lg absolute left-0 top-0 w-[500px] h-[300px] object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="w-[100%] h-[100%] relative object-cover">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                alt="not found"
                className="rounded-lg absolute left-0 top-0 w-[100%]  object-cover"
              />
            </div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[100%] flex items-center justify-center">
              <div className="w-[80%] h-[100%] bg-orange-400 flex  items-center justify-center rounded-2xl">
                <div className="w-[70%] h-[100%]  flex sm:flex-row flex-col items-center justify-center">
                  <div className="w-[50%] h-[100%] flex flex-col items-start justify-center">
                    <p className="text-[18px] text-white w-[80%] flex items-start justify-start ">
                      Welcom to X Company
                    </p>
                    <h1 className="sm:text-[60px] w-[100%] text-left text-blue-950">
                      This is demo heading page of here
                    </h1>
                    <div className="h-[100px] w-[80%] text-justify text-white my-10">
                      <Typewriter
                        options={{
                          strings: [
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis nemo ex laborum, assumenda cumque incidunt. Vel,pariatur. Fugit ea omnis, sint laboriosam eaque velit sedfacere aperiam odit voluptate quasi.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                    <button className="px-5 py-2 bg-white text-orange-500 border  rounded-full">
                      Know more
                    </button>
                  </div>
                  <div className="w-[50%] h-[100%] flex flex-col items-center justify-center">
                    <div className="w-[500px] h-[300px] object-cover relative flex items-center justify-center  ">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                        alt="not found"
                        className="rounded-lg absolute left-0 top-0 w-[500px] h-[300px] object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="w-[100%] h-[100%] relative object-cover">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                alt="not found"
                className="rounded-lg absolute left-0 top-0 w-[100%]  object-cover"
              />
            </div> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[100%] h-[100%] flex items-center justify-center">
              <div className="w-[80%] h-[100%] bg-orange-400 flex  items-center justify-center rounded-2xl">
                <div className="w-[70%] h-[100%]  flex sm:flex-row flex-col items-center justify-center">
                  <div className="w-[50%] h-[100%] flex flex-col items-start justify-center">
                    <p className="text-[18px] text-white w-[80%] flex items-start justify-start ">
                      Welcom to X Company
                    </p>
                    <h1 className="sm:text-[60px] w-[100%] text-left text-blue-950">
                      This is demo heading page of here
                    </h1>
                    <div className="h-[100px] w-[80%] text-justify text-white my-10">
                      <Typewriter
                        options={{
                          strings: [
                            " Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis nemo ex laborum, assumenda cumque incidunt. Vel,pariatur. Fugit ea omnis, sint laboriosam eaque velit sedfacere aperiam odit voluptate quasi.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                    <button className="px-5 py-2 bg-white text-orange-500 border  rounded-full">
                      Know more
                    </button>
                  </div>
                  <div className="w-[50%] h-[100%] flex flex-col items-center justify-center">
                    <div className="w-[500px] h-[300px] object-cover relative flex items-center justify-center  ">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                        alt="not found"
                        className="rounded-lg absolute left-0 top-0 w-[500px] h-[300px] object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="w-[100%] h-[100%] relative object-cover">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-3fbf8.appspot.com/o/poster%2Fposter1.jpg?alt=media&token=7416ccdf-f557-483e-879b-7900b677459a"
                alt="not found"
                className="rounded-lg absolute left-0 top-0 w-[100%]  object-cover"
              />
            </div> */}
              </div>
            </div>
          </SwiperSlide>
          s
        </Swiper>
      </div>
    </div>
  );
};

export default Swipers;
