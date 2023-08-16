import React from "react";

const FAQ = () => {
  return (
    <div className="w-full h-[20vh] bg-white absolute top-[200px] flex items-end justify-around">
      <div className="w-[60%] h-[100%] flex items-center justify-around">
        <div
          className="w-[20%] h-[60%] bg-white rounded-lg text-orange-600 text-[15px] font-[600] flex items-center justify-center transition-[1s] hover:scale-[1.05] cursor-pointer border border-orange-500 drop-shadow-lg"
          title="this who we are"
        >
          Who we are?
        </div>
        <div
          className="w-[20%] h-[60%] bg-white rounded-lg text-orange-600 text-[15px] font-[600] flex items-center justify-center transition-[1s] hover:scale-[1.05] cursor-pointer border border-orange-500 drop-shadow-lg"
          title="this who we are"
        >
          What we Do?
        </div>
        <div
          className="w-[20%] h-[60%] bg-white rounded-lg text-orange-600 text-[15px] font-[600] flex items-center justify-center transition-[1s] hover:scale-[1.05] cursor-pointer border border-orange-500 drop-shadow-lg"
          title="this who we are"
        >
          How to Contact Us?
        </div>
        <div
          className="w-[20%] h-[60%] bg-white rounded-lg text-orange-600 text-[15px] font-[600] flex items-center justify-center transition-[1s] hover:scale-[1.05] cursor-pointer border border-orange-500 drop-shadow-lg"
          title="this who we are"
        >
          Business Profile
        </div>
      </div>
    </div>
  );
};

export default FAQ;
