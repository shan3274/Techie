import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const What = () => {
  return (
    <>
      <header className="w-full h-[100px] bg-[#ffffff] flex items-center justify-around z-10 sticky top-0">
        <div className="w-[50%] h-[100%] flex items-center ml-20">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2FSaaro-removebg-preview.png?alt=media&token=9e15bc67-b468-427c-96e6-2e6dd235871c"
            className="h-[50px]"
          />
        </div>
        <div className="w-[50%] h-[100%] flex justify-around items-center text-blue-500 text-[18px] px-10">
          <Link href="/about">About</Link>
          <Link href="/about/Who">Who we are?</Link>
          <Link href="/about/What">What we do?</Link>

          <Link
            href="#"
            className="py-2 px-10 bg-black text-white rounded-full flex items-center justify-center gap-3"
          >
            Button
            <BsArrowUpRight size={15} />
          </Link>
        </div>
      </header>

      <div className="w-full h-screen flex  items-center justify-center sticky top-[100px]  bg-[#8fdcff]  z-0">
        <div className="w-[50%] h-[100%] flex items-start flex-col justify-center gap-10 ml-10">
          <div className="text-[60px] font-[500]">What we do?</div>
          <div className="w-[90%] text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            ipsum beatae facilis autem minima fugit! Iste dolores repudiandae,
            deserunt facere est laborum cum amet! Aut tempore vero vel fugit
            numquam?
          </div>
        </div>
        <div className="w-[50%] h-[100%] flex items-center justify-center drop-shadow-md">
          <img
            src="https://images.pexels.com/photos/18129594/pexels-photo-18129594/free-photo-of-fisherman-selling-fishes-on-boat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-[90%]"
          />
        </div>
      </div>
    </>
  );
};

export default What;
