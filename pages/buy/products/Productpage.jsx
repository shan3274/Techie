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

  const [discription, setDiscription] = useState(false);

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
      setUsers(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  }, [query]);
  return (
    <>
      {data ? (
        <>
          <Header />
          <div className="w-full min-h-[110vh] relative top-20 flex items-start flex-col bg-slate-200 pt-2 gap-2">
            <div className="w-full h-screen flex items-start justify-center relative gap-2 pl-1">
              <div className="w-[70%] h-screen  bg-white drop-shadow-lg flex items-start pt-5 justify-center relative">
                <div className="w-[50%] h-[100%] flex items-start justify-center pt-10">
                  <img
                    src={data?.imageUrls[0]}
                    alt="no imgae"
                    className="w-[80%] h-[50%]"
                  />
                </div>
                <div className="w-[50%] h-[100%] flex items-start justify-start gap-5 flex-col pt-10 pl-10">
                  <div className="text-[25px] font-[600]">
                    {data?.productName}
                  </div>
                  <div className="text-[15px] text-gray-500 ">
                    by{" "}
                    <span className="text-orange-500">{data?.sellerName}</span>
                  </div>
                  <div className="w-[100%] border-t"></div>
                  <div className="text-[25px] font-[600]">About</div>
                  <div className="w-[100%] flex items-center justify-center">
                    <div className="w-[50%] flex flex-col gap-2 text-[15px] text-gray-500">
                      <div className="">Product code :</div>
                      <div className="">Type :</div>
                      <div className="">Company :</div>
                      <div className="">Website :</div>
                    </div>
                    <div className="w-[50%] flex flex-col gap-2 text-[15px] text-gray-500">
                      <div className="">{data?.productCode}</div>
                      <div className="">{data?.type}</div>
                      {users?.map((user) => {
                        if (data?.sellerEmail == user.email) {
                          return (
                            <>
                              <div className="">{user?.companyName}</div>
                              <Link
                                href={`https://${user?.website}`}
                                className="hover:text-blue-500 hover:underline"
                              >
                                {user?.website}
                              </Link>
                            </>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-[100%] h-[40%] border-t">
                  <div className="w-[100%] h-[100%] relative flex items-center justify-center">
                    <div className="absolute top-0 left-0">
                      <button
                        className={`px-3 py1 border border-t-transparent ${
                          !discription && "bg-gray-100"
                        }`}
                        onClick={() => setDiscription(false)}
                      >
                        Description
                      </button>
                      <button
                        className={`px-3 py1 border border-t-transparent ${
                          discription && "bg-gray-100"
                        }`}
                        onClick={() => setDiscription(true)}
                      >
                        Typical Specification
                      </button>
                      {discription ? (
                        <div className="w-[100%] h-[90%] text-justify p-10 text-[15px] text-gray-500 overflow-scroll">
                          {data?.TypicalSpecification}
                        </div>
                      ) : (
                        <div className="w-[100%] h-[90%] text-justify p-10 text-[15px] text-gray-500 overflow-scroll">
                          {data?.productDescription}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[30%] h-screen sticky top-10 flex flex-col items-start justify-start gap-5">
                <div className="w-[98%] h-[30%] bg-white flex items-center justify-start pt-10 flex-col gap-10">
                  <div className="text-[25px] text-green-700">Catalogue</div>
                  <div className="">Product catalogue here</div>
                  <Link
                    href={data?.documentURLs[0]}
                    className="w-[150px] h-[40px] bg-green-500 text-white rounded-full flex items-center justify-center"
                  >
                    Download +
                  </Link>
                </div>
                <div className="w-[98%] h-[3%] text-center text-[20px] text-orange-500 font-[700]">
                  Seller details
                </div>
                <div className="w-[98%] h-[50%] bg-white flex flex-col gap-3 items-center justify-center">
                  {users ? (
                    <>
                      {" "}
                      {users.map((item) => {
                        if (item.email == data.sellerEmail) {
                          return (
                            <>
                              <div className="w-[100%] h-[90%] flex items-start justify-center text-[15px] text-gray-500 pl-10 pt-10">
                                <div className="w-[30%] h-[100%] flex flex-col justify-start items-start gap-2">
                                  <div className="">Full name :</div>
                                  <div className="">Email :</div>
                                  <div className="">Phone :</div>
                                  <div className="">Landline :</div>
                                  <div className="">Address :</div>
                                  <div className="text-white">m</div>
                                </div>
                                <div className="w-[70%] h-[100%] flex flex-col justify-start items-start gap-2">
                                  <div className="">{item.fullName}</div>
                                  <div className="">{item.email}</div>
                                  <div className="">
                                    {item.countryCode}-{item.phone}
                                  </div>
                                  <div className="">
                                    {item.landlineCode}-{item.landline}
                                  </div>
                                  <div className="">
                                    {item.landmark},{item.city},
                                  </div>
                                  <div className="">
                                    {item.country},{item.pin}
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                      })}
                    </>
                  ) : (
                    <div className="w-[100%] h-[100%] flex items-center justify-center">
                      Loading...
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-[69.5%] text-center text-[25px] font-[700] text-blue-500">
              Recommended Products
            </div>
            <div className="w-[69.5%] h-[40vh] bg-white mb-10 drop-shadow-lg ml-1 grid grid-flow-col gap-5 overflow-scroll px-5 items-center">
              {similarProdcut.map((items) => {
                if (query.productId != items.id) {
                  return (
                    <Link
                      href={{
                        pathname: "/buy/products/Productpage",
                        query: {
                          path: "Products",
                          similarproduct: "Products",
                          productId: items.id,
                        },
                      }}
                      className="w-[200px] h-[90%] border flex flex-col gap-2"
                    >
                      <img
                        src={items?.imageUrls[0]}
                        alt=""
                        className="w-[100%] h-[50%]"
                      />
                      <h1 className="w-[100%] text-center text-[13px] px-5">
                        {items?.productName}
                      </h1>
                      <div className="text-[15px] text-gray-500 w-[100%] h-[40px] flex items-center justify-center gap-2">
                        by{" "}
                        <span className="text-orange-500">
                          {data?.sellerName}
                        </span>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
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
