import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Successful = () => {
  const route = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-100">
      <div className="w-[80%] h-[80%] bg-white rounded-lg drop-shadow-lg flex items-center justify-center flex-col gap-5 relative">
        <div
          className="absolute top-5 left-5 cursor-pointer text-[20px]"
          onClick={() => {
            route.push("/authentication/Signup");
          }}
        >
          <AiOutlineArrowLeft />
        </div>
        <h1 className="text-[60px] text-green-600">Successfull</h1>
        <p className="text-[20px] text-blue-500">
          Your request is successfully sent to our server.
        </p>
        <p className="text-[20px] text-blue-500">Please check your email</p>
        <button
          className="border py-2 px-10 rounded-full text-white bg-green-500 transition-[1s] hover:scale-[1.05]"
          onClick={() => {
            route.push("/");
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Successful;
