import React, { useEffect, useState } from "react";
import Header from "./Header";
import Swiper from "./Swipers";
import Services from "./Services";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase-config";
import FAQ from "./FAQ";

const Tagline = () => {
  return (
    <div className="z-0 px-2 xl:text-[30px] text-[25px] animate-pulse font-[700]  absolute   text-blue-950 top-[150px] xl:top-[200px] left-[36%] ">
      Technology delivered fast
    </div>
  );
};

const Users = () => {
  const [numberOfUsers, setNumberOFusers] = useState();
  const data = async () => {
    await getDocs(collection(db, "User")).then((res) => {
      setNumberOFusers(res.docs.length);
    });
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div className=" h-[5vh] flex items-center justify-center fixed top-[30px] right-[100px] z-[10000] text-[10px] xl:text-[15px] text-blue-950">
      Registered Users {numberOfUsers}
    </div>
  );
};

const Homepage = () => {
  return (
    <>
      <div className="bg-white ">
        <Header />
        <Users />
        {/* <FAQ /> */}
        <Tagline />
        <Swiper />
        <Services />
      </div>
    </>
  );
};

export default Homepage;
