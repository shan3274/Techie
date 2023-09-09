import React, { useState } from "react";
import Header from "./Header";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/src/utils/firebase-config";
const UI = () => {
  const [updateDis, setUpadteDis] = useState();
  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[50%] h-[60%] flex flex-col items-center justify-center">
          <div className="w-[100%] flex items-center justify-center gap-5">
            <input
              type="text"
              className="w-[60%] h-[40px] border border-black rounded-md pl-5 text-[15px]"
              placeholder="Disclaimer"
              value={updateDis}
              onChange={(e) => setUpadteDis(e.target.value)}
            />
            <button
              className="w-[20%] h-[40px] bg-green-500 text-white rounded-md"
              onClick={async () => {
                await updateDoc(doc(db, "Disclaimer", "JeSaKh7S6QbLp5Fjefj9"), {
                  disclaimer: updateDis,
                }).then(() => {
                  alert("done");
                });
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UI;
