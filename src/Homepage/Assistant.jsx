import React, { useState } from "react";

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`absolute bottom-10 right-10 w-[5rem] h-[5rem] border border-orange-500 bg-white drop-shadow-xl duration-300  rounded-full flex items-center justify-center cursor-pointer z-[10000] ${
        isOpen && "h-[26rem] w-[21rem] rounded-lg"
      }`}
    >
      <div
        className={`text-[30px] font-[500] duration-300 text-orange-500 ${
          isOpen && "relative top-[-11rem] right-[-8.5rem] rotate-[45deg]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        +
      </div>
    </div>
  );
};

export default Assistant;
