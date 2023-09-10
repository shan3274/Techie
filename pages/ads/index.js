import Header from "@/src/Homepage/Header";
import { db } from "@/src/utils/firebase-config";
import { getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const { query } = useRouter();
  const [datas, setDatas] = useState();

  const data = async () => {
    if (query.id) {
      await getDoc(doc(db, "Ads", query.id)).then((res) => {
        setDatas(res.data());
      });
    }
  };

  useEffect(() => {
    data();
  }, [query]);
  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-start sticky top-0">
        <div className="w-[50%] h-screen flex flex-col justify-center gap-10 ml-10">
          <div className="w-[250px] font-[500] text-white">
            <img src={datas?.logo[0]} className="xl:w-[250px] w-[200px]" />
          </div>
          <div className="xl:text-[40px] text-[30px] w-[80%] text-blue-950 font-[600] text-left ">
            {datas?.title}
          </div>
          <div className="text-[15px] text-gray-600 text-justify">
            {datas?.details}
          </div>
        </div>
        <div className="w-[50%] h-screen flex items-center justify-center">
          <img src={datas?.image[0]} className="w-[80%]" />
        </div>
      </div>
    </>
  );
};

export default index;
