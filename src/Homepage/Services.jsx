import React from "react";

const Services = () => {
  return (
    <div className="w-full h-[30vh]   absolute xl:top-[135vh] top-[135vh]  flex items-center  justify-center text-white text-[20px] font-[500]">
      <div className="w-[70%] h-[100%] flex items-center justify-around">
        <div className="w-[20%] h-[50%] bg-white text-orange-600 border border-orange-500 drop-shadow-lg rounded-lg transition-[1s] hover:scale-[1.05] flex items-center justify-center">
          Technical Product
        </div>
        <div className="w-[20%] h-[50%] bg-white text-orange-600 border border-orange-500 rounded-lg transition-[1s] hover:scale-[1.05] flex items-center justify-center">
          Technical Services
        </div>
        <div className="w-[20%] h-[50%] bg-white text-orange-600 border border-orange-500 drop-shadow-lg rounded-lg transition-[1s] hover:scale-[1.05] flex items-center justify-center">
          Consultancy
        </div>
      </div>
    </div>
  );
};

export default Services;
