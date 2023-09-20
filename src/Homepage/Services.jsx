import { getDoc, doc } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase-config";

const Services = () => {
  const [dis, setDis] = useState();
  const disclaimer = async () => {
    await getDoc(doc(db, "Disclaimer", "JeSaKh7S6QbLp5Fjefj9")).then((res) => {
      setDis(res.data().disclaimer);
    });
  };
  useEffect(() => {
    disclaimer();
  }, []);
  return (
    <>
      <div className="w-full h-[30vh]   absolute xl:top-[135vh] top-[135vh]  flex items-center  justify-center text-white text-[20px] font-[500]">
        <div className="w-[70%] h-[100%] flex items-center justify-around">
          <Link
            href="/buy/products/techinalproducts"
            className="w-[20%] h-[50%] bg-white text-orange-600 border border-orange-500 drop-shadow-lg rounded-lg transition-[1s] hover:scale-[1.05] flex items-center justify-center text-[16px] cursor-pointer"
          >
            Technical Product
          </Link>
          <Link
            href="/service"
            className="w-[20%] h-[50%] bg-white text-orange-600 border border-orange-500 rounded-lg transition-[1s] hover:scale-[1.05] flex items-center justify-center text-[16px] cursor-pointer"
          >
            Technical Services
          </Link>
          <Link
            href="/consultancy"
            className="w-[20%] h-[50%] bg-white text-orange-600 border border-orange-500 drop-shadow-lg rounded-lg transition-[1s] hover:scale-[1.05] flex items-center justify-center text-[16px] cursor-pointer"
          >
            Technical Consultancy
          </Link>
        </div>
      </div>
      <div className="w-full h-[30vh] absolute top-[165vh] flex items-center justify-center flex-col gap-5">
        <div className="w-[80%] h-[30%] bg-white drop-shadow-md border border-orange-500 text-orange-500 rounded-md cursor-pointer flex items-center justify-center">
          Procedure / Step to buy & sell on this web site
        </div>
        <div className="w-[80%] h-[40%] p-10 pt-20 bg-white drop-shadow-md border border-orange-500 text-orange-500 rounded-md cursor-pointer flex items-center justify-center overflow-scroll">
          {dis}
        </div>
      </div>
    </>
  );
};

export default Services;
