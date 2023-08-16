import React from "react";

const Approvemodal = ({ closeModal, user }) => {
  console.log(user);
  return (
    <div className="w-full h-screen bg-transparent flex items-center justify-center absolute top-10">
      <div className="w-[70%] h-[80%] bg-white rounded-xl drop-shadow-xl border relative flex gap-5 items-center justify-center">
        {/* close button */}
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeModal(false)}
        >
          X
        </div>
        <div className="w-[100%] h-[10%] flex items-center justify-center absolute top-10 text-[30px] font-[500]">
          {user.userName}
        </div>
        <div className="w-[70%] h-[100%] flex items-center justify-center text-[25px]">
          <div className="w-[30%] h-[80%] flex flex-col justify-center gap-5">
            <div className="">Username</div>
            <div className="">User ID</div>
            <div className="">Email</div>
          </div>
          <div className="w-[30%] h-[80%] flex flex-col justify-center text-gray-600 gap-5">
            <div className="">{user.userName}</div>
            <div className="">{user.id}</div>
            <div className="">{user.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approvemodal;
