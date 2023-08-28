import { auth, db } from "@/src/utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import Link from "next/link";
import React, { useState, useMemo } from "react";

const Approvemodal = ({ closeModal, user }) => {
  const [approve, setApprove] = useState(true);
  const [userData, setUserData] = useState([]);
  useMemo(async () => {
    if (user) {
      getDocs(
        collection(db, `SellerProduct/hjSXho3U2Ictlf1XdAIu/${user.email}`)
      ).then((response) => {
        setUserData(
          response.docs.map((data) => {
            return { ...data.data(), id: data.id };
          })
        );
      });
    }
  }, [user]);
  console.log(userData?.length);
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
        <div className="w-[100%] h-[10%]  flex items-center gap-5 justify-center absolute top-10 text-[30px] font-[500] flex-col">
          {user?.productName}
        </div>
        <div className="w-[100%] h-[100%] flex items-center justify-center  text-[15px]">
          <div className="text-black w-[30%] flex justify-center items-start flex-col">
            <img src={user?.imageUrls[0]} className="h-[300px]" />
          </div>
          <div className="text-black w-[30%] flex gap-5 justify-center items-start flex-col">
            <div className="">Name</div>
            <div className="">Type</div>
            <div className="">Category</div>
            <div className="">ID</div>
            <div className="">Product Code</div>
            <div className="">Seller Name</div>
            <div className="">Seller Email</div>
          </div>
          <div className="text-gray-600 w-[30%] gap-5 flex justify-center items-start flex-col">
            <div className="">{user?.productName}</div>
            <div className="">{user?.type}</div>
            <div className="">{user?.category}</div>
            <div className="">{user?.id}</div>
            <div className="">{user?.productCode}</div>
            <div className="">{user?.sellerName}</div>
            <div className="">{user?.sellerEmail}</div>
          </div>
        </div>
        <button
          className="absolute bottom-10 w-[150px] h-[40px] bg-green-500 text-white rounded-md"
          onClick={async () => {
            await updateDoc(doc(db, `Products`, user?.id), {
              firstapprove: "approve",
            }).then(() => {
              window.location.reload(true);
            });
          }}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default Approvemodal;
