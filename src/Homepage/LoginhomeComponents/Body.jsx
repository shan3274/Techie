import Link from "next/link";
import React from "react";

const Body = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center gap-10">
        <Link
          href="#"
          className="w-[200px] h-[70px] bg-[rgba(0,0,0,0.1)] border flex items-center justify-center border-orange-500 text-orange-500 text-[30px] font-[500] rounded-lg duration-300 hover:scale-[1.05] hover:bg-orange-500 hover:text-white"
        >
          Buy
        </Link>

        <Link
          href="/sell"
          className="w-[200px] h-[70px] bg-[rgba(0,0,0,0.1)] border flex items-center justify-center border-orange-500 text-orange-500 text-[30px] font-[500] rounded-lg duration-300 hover:scale-[1.05] hover:bg-orange-500 hover:text-white"
        >
          Sell
        </Link>
      </div>
    </>
  );
};

export default Body;
