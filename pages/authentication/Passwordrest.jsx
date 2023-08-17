import { db } from "@/src/utils/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Passwordrest = () => {
  const [email, setEmail] = useState("");
  const [emailHover, setEmailHover] = useState(false);

  const route = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-300">
      <div className="w-[40%] h-[80%] bg-white border rounded-lg drop-shadow-lg flex items-center justify-center flex-col gap-5 relative">
        {/* heading */}
        <div className="absolute top-20 text-[30px] font-[500] text-red-500">
          Rest password
        </div>
        {/* email */}
        <label
          htmlFor=""
          className={
            emailHover
              ? ` relative right-[27%] top-[32px] bg-white duration-300 text-blue-900`
              : "relative top-[53px] right-[27%] text-gray-400 duration-300 z-[1000]"
          }
        >
          Email
        </label>
        <input
          title="this is email field"
          type="email"
          className={`w-[70%] h-[40px] border pl-5 border-black rounded-xl duration-300 ${
            emailHover && "rounded-none"
          }`}
          value={email}
          onMouseOver={() => {
            setEmailHover(true);
          }}
          onMouseOut={() => {
            if (email == "") setEmailHover(false);
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        {/* button */}
        <button
          className="w-[30%] h-[40px] bg-green-500 rounded-lg text-white drop-shadow-md"
          onClick={async () => {
            await addDoc(collection(db, "Passwordrequest"), {
              userEmail: email,
            }).then(() => {
              route.push("/authentication/Successful");
            });
          }}
        >
          Request
        </button>
      </div>
    </div>
  );
};

export default Passwordrest;
