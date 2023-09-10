// import React from "react";
// import Header from "../../Header";
// import Footer from "../../Footer";

// const index = () => {
//   return (
//     <>
//       <Header />
//       <div className="w-full h-screen sticky top-0 flex items-center justify-center ">
//         <div className="w-[50%] h-[100%] flex flex-col justify-center gap-10 pl-10">
//           <div className="text-[50px] font-[500]">This is Heading</div>
//           <div className="w-[90%] text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
//             nostrum eaque assumenda, enim sapiente id dolor rerum officia
//             repellendus. Qui repellat ipsa incidunt perferendis optio obcaecati
//             facilis, est nisi temporibus?
//           </div>
//         </div>
//         <div className="w-[50%] h-[100%] flex items-center justify-center">
//           <img
//             src="https://rukminim2.flixcart.com/image/832/832/xif0q/blazer/f/t/l/40-supreme-black-darbar-in-original-imagdczhnrtudw6c-bb.jpeg?q=70"
//             className="w-[60%]"
//           />
//         </div>
//       </div>
//       <div className="w-full h-screen sticky top-0 flex items-center justify-center bg-white">
//         <div className="w-[50%] h-[100%] flex items-center justify-center">
//           <img
//             src="https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/y/m/z/-original-imags7jvrkxnfege.jpeg?q=70"
//             className="w-[60%]"
//           />
//         </div>
//         <div className="w-[50%] h-[100%] flex flex-col justify-center gap-10 pl-10">
//           <div className="text-[50px] font-[500]">This is Heading</div>
//           <div className="w-[90%] text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
//             nostrum eaque assumenda, enim sapiente id dolor rerum officia
//             repellendus. Qui repellat ipsa incidunt perferendis optio obcaecati
//             facilis, est nisi temporibus?
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-screen sticky top-0 flex items-center justify-center bg-white">
//         <div className="w-[50%] h-[100%] flex flex-col justify-center gap-10 pl-10">
//           <div className="text-[50px] font-[500]">This is Heading</div>
//           <div className="w-[90%] text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
//             nostrum eaque assumenda, enim sapiente id dolor rerum officia
//             repellendus. Qui repellat ipsa incidunt perferendis optio obcaecati
//             facilis, est nisi temporibus?
//           </div>
//         </div>
//         <div className="w-[50%] h-[100%] flex items-center justify-center">
//           <img
//             src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/s/h/t/l-0822-sh360-01-the-indian-garage-co-original-imagmnqjmkdytdmj.jpeg?q=70"
//             className="w-[60%]"
//           />
//         </div>
//       </div>
//       <div className="w-[full] h-[60vh] sticky top-[40vh] flex items-center justify-center bg-white">
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default index;

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import Header from "@/src/Homepage/Header";
import { Dna } from "react-loader-spinner";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/utils/firebase-config";

const index = () => {
  const [divHover, setDivHover] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const datas = async () => {
    await getDocs(collection(db, "Services")).then((response) => {
      setLoading(true);
      setData(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };
  useEffect(() => {
    datas();
  }, []);

  console.log(data);
  return (
    <>
      {loading != null ? (
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
            {data.map((item) => {
              return (
                <SwiperSlide>
                  <div
                    className="w-full h-[90vh] flex items-center justify-center relative top-[150px] cursor-pointer overflow-hidden"
                    style={{
                      backgroundImage: `url(${item?.image[0]})`,
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
                    <div className="w-[100%] h-[100%] absolute top-0 left-0">
                      <img src={item.image[0]} className="w-[100%] h-[100%]" />
                    </div>
                    {/* this dynamic left side div */}

                    <div
                      className={`absolute top-0 left-[-40%] w-[40%] h-[90%] bg-gradient-to-r from-[rgba(0,0,0,0.8)] duration-300 overflow-hidden flex flex-col items-center justify-center pl-5 gap-10 ${
                        divHover && "left-[0%]"
                      }`}
                    >
                      <h1 className={`text-white text-[35px] font-[500]`}>
                        {item.type}
                      </h1>
                      <p className={`text-white text-[15px] font-[400]`}>
                        {item.details}
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
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quo culpa assumenda voluptate labore sunt
                          officia corrupti, minus, fugiat dignissimos aperiam ab
                          reiciendis laboriosam nulla nesciunt laudantium sit
                          unde odio eligendi!
                        </p>
                        <Link
                          href="/service/Form"
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
              );
            })}
          </Swiper>
          <div className="w-full flex items-center justify-center mb-10">
            <div className="w-[95vw] h-[50vh]  bg-[rgba(0,0,0,0.5)] gap-10 rounded-2xl border drop-shadow-xl mt-10 flex flex-col items-center justify-center">
              <h1 className="text-[35px] text-white font-[600]">
                Technical Products
              </h1>
              <p className=" text-center text-white w-[60%]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati dolores quo quas inventore accusamus aspernatur
                possimus adipisci molestias doloribus. Praesentium, corrupti.
                Recusandae, voluptas neque repudiandae dolores porro in
                asperiores sint.
              </p>
              <button className="w-[150px] h-[40px] rounded-lg bg-white drop-shadow-lg transition-[1s] hover:scale-[1.05]">
                Know more
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <Dna />
        </div>
      )}
    </>
  );
};

export default index;
