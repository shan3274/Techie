import { useRouter } from "next/router";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
const Successful = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-400">
      <div className="w-[80%] h-[80%] bg-white border rounded-md drop-shadow-lg relative flex items-center justify-around flex-col">
        <BiArrowBack
          className="absolute top-3 left-3 cursor-pointer"
          size={20}
          onClick={() => router.back()}
        />

        <div className="text-[40px] text-green-500">Successfully</div>
        <div className="text-[25px] text-gray-600 text-center">
          Your product has been sent for approval once approve by approver{" "}
          <br /> it will publish on website.
        </div>
        <button
          className="w-[150px] h-[40px] rounded-full bg-green-500 text-white transition-[1s] hover:scale-[1.02]"
          onClick={() => router.push("/")}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Successful;
