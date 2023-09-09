import Header from "@/src/Homepage/Header";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const { query } = useRouter();
  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-start sticky top-0">
        <div className="w-[50%] h-screen flex flex-col justify-center gap-10 ml-10">
          <div className="w-[250px] font-[500] text-white">
            <img src={query.logo} className="w-[250px]" />
          </div>
          <div className="text-[40px] w-[80%] text-blue-950 font-[600] text-left ">
            LIGHTNING PROTECTION SYSTEMS
          </div>
          <div className="text-[15px] text-gray-600 text-justify">
            The spectacle of lightning has inspired awe and fear as long as been
            life on this planet. Our fascination with lightning is akin to our
            fascination with potentially dangerous animals or activities. The
            truth of the matter is that with the exception of floods (which
            affect entire populated area in a single event) lightning is the
            biggest weather-linked killer. Whilst lightning may not threaten
            everyday lightning protection is still essential; it only needs to
            strike once and it could kill the people who work in and around the
            premises and easily destroy everything any organization needs to
            operate, if the site/building is inadequately protected. Many things
            are covered under insurance policies but does it cover the
            consequential loss of human, data, machinery/data, reputation etc.
            For these reasons Doksun make Lightning Protection System is
            regarded as the prudent choice to approach for any, and all,
            lightning protection system needs.
          </div>
        </div>
        <div className="w-[50%] h-screen flex items-center justify-center">
          <img src={query.img} className="w-[80%]" />
        </div>
      </div>
    </>
  );
};

export default index;
