// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

const Headingswiper = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3975055/pexels-photo-3975055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide
          style={{
            background: "rgba(0,0,0,0)",
            height: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="text-[70px] font-[700] text-[rgba(255,255,255,0.7)]"
            data-swiper-parallax="-300"
          >
            Product
          </div>

          <div
            className="text-[17px] text-white text-align px-[50px] py-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          <button className="w-[200px] h-[40px] bg-green-500 rounded-lg text-white">
            Continue
          </button>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "rgba(0,0,0,0)",
            height: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="text-[70px] font-[700] text-[rgba(255,255,255,0.7)]"
            data-swiper-parallax="-300"
          >
            Consultancy
          </div>

          <div
            className="text-[17px] text-white text-align px-[50px] py-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          <button className="w-[200px] h-[40px] bg-green-500 rounded-lg text-white">
            Continue
          </button>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "rgba(0,0,0,0)",
            height: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="text-[70px] font-[700] text-[rgba(255,255,255,0.7)]"
            data-swiper-parallax="-300"
          >
            Services
          </div>

          <div
            className="text-[17px] text-white text-align px-[50px] py-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          <button className="w-[200px] h-[40px] bg-green-500 rounded-lg text-white">
            Continue
          </button>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Headingswiper;
