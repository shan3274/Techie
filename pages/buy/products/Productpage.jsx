import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/src/utils/firebase-config";
import Header from "../Header";
import Footer from "../Footer";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import Link from "next/link";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Productpage = () => {
  const { query } = useRouter();
  const [data, setData] = useState();
  const [similarProdcut, setSimilarProdcut] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  useMemo(async () => {
    if (query.path) {
      try {
        await getDoc(doc(db, query.path + "/" + query.productId)).then(
          (res) => {
            setData(res.data());
          }
        );
      } catch (error) {}
    }
    if (query.similarproduct) {
      try {
        await getDocs(collection(db, query.similarproduct)).then((response) => {
          setSimilarProdcut(
            response.docs.map((data) => {
              return { ...data.data(), id: data.id };
            })
          );
        });
      } catch (error) {}
    }

    await getDocs(collection(db, "User")).then((response) => {
      response.docs.map((data) => {
        setUsers(
          response.docs.map((data) => {
            return { ...data.data(), id: data.id };
          })
        );
      });
    });
  }, [query]);
  useEffect(() => {
    users?.map((item) => {
      if (item.email == data.sellerEmail) {
        setUser(item);
      }
    });
  }, [data]);
  console.log(user);

  return (
    <>
      {data ? (
        <>
          <Header />

          <div className="w-full h-screen flex items-center justify-center  mt-[2.5%]">
            <div className="w-[45%] h-[90%]  flex items-center justify-center flex-col gap-10">
              {data.imageUrls ? (
                <img
                  src={data?.imageUrls[0]}
                  className="w-[70%] p-10 bg-white drop-shadow"
                />
              ) : (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                  alt="loading"
                  className="h-[180px]"
                />
              )}
              <div className="flex items-center justify-center w-[100%] gap-5">
                <button
                  className="w-[30%] h-[40px] bg-gray-500 text-white"
                  disabled={true}
                >
                  <i class="ri-shopping-cart-fill"></i> Cart
                </button>
                <button
                  className="w-[30%] h-[40px] bg-gray-500 text-white"
                  disabled={true}
                >
                  <i class="ri-shopping-bag-2-line"></i> Buy
                </button>
              </div>
            </div>
            <div className="w-[25%] h-[90%] flex flex-col gap-5 justify-center items-start pl-10 text-gray-500">
              <div className="text-[25px] text-black font-[500]">
                Basic details
              </div>
              <div className="">{data?.productName}</div>
              <div className="">{data?.productCode}</div>
              <div className="">{data?.category}</div>
              <div className="">{data?.type}</div>
              <div className="w-[300px] h-[200px] overflow-scroll text-justify">
                {data?.productDescription}
              </div>
              <div className="w-[300px] h-[200px] overflow-scroll text-justify">
                {data?.TypicalSpecification}
              </div>
            </div>
            <div className="w-[30%] h-[90%] overflow-scroll flex flex-col gap-3 justify-start mt-10 items-center pl-10 text-gray-500">
              <h1 className="text-[25px] text-black font-[500]">Catalogue</h1>
              <Link
                href={data?.documentURLs[0]}
                className="bg-blue-500 text-white w-[150px] h-[40px] rounded-lg drop-shadow-md transition-[1s] hover:scale-[1.03] flex items-center justify-center"
              >
                Download
              </Link>

              <h1 className="text-[25px] text-black font-[500]">
                Seller Information
              </h1>
              <div className="text-black">{user?.fullName}</div>
              <div className="text-black">{user?.email}</div>
              <div className="text-black">{user?.userName}</div>
              <div className="text-black">{user?.website}</div>
              <div className="text-black">
                {user?.countryCode}-{user?.phone}
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center my-10 text-[50px] text-black font-[600]">
            Similar<span className="text-gray-600"> products</span>
          </div>

          <div className="w-full h-[400px]  ">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
            >
              {similarProdcut.map((item) => {
                if (query.productId != item.id) {
                  return (
                    <SwiperSlide>
                      <Link
                        href={{
                          pathname: "/buy/products/Productpage",
                          query: {
                            path: query.path,
                            similarproduct: query.path,
                            productId: item.id,
                          },
                        }}
                        className="w-[300px] h-[400px] mx-10 flex items-center justify-center relative flex-col gap-10 cursor-pointer border"
                      >
                        <img
                          src={item.imageUrls[0]}
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
                            {item.productName}
                          </p>
                          <p className="text-gray-500">{item.type}</p>
                        </div>
                        <button className="absolute bottom-2 w-[70%] h-[40px] rounded-lg bg-black text-white">
                          Buy now
                        </button>
                      </Link>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
          </div>

          <Footer />
        </>
      ) : (
        <div className="w-full h-screen flex items-center justify-center relative top-[5%]">
          <Skeleton height={200} highlightColor="rgb(182, 163, 255)" />
          <div className="flex gap-4">
            <Skeleton
              width={400}
              height={500}
              highlightColor="rgb(163, 221, 255)"
            />
            <Skeleton
              height={500}
              width={"92vw"}
              highlightColor="rgb(182, 193, 255)"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Productpage;
