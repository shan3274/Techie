import React, { useMemo, useState } from "react";
import Header from "./Header";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/utils/firebase-config";
import ProductModal from "../../src/Homepage/ProductModal";

const Homepage = () => {
  // switching between approved and not approved account state
  const [isApprovedUser, setIsApprovedUser] = useState(true);
  // data base for users
  const [user, setUser] = useState([]);

  // particular user
  const [singleUser, setSingleUser] = useState();

  // modal for approved
  const [approveModal, setApproveModal] = useState(false);
  useMemo(async () => {
    await getDocs(collection(db, "Products")).then((response) => {
      setUser(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  }, []);

  console.log(user);

  return (
    <>
      <Header />

      <div className="w-full h-screen flex  items-center justify-center">
        {/* Approve and not Approved lable */}
        <div className="w-full h-[10%] flex items-center justify-center gap-10 absolute top-[9%]">
          <h1 className="text-[25px] font-[500] text-green-500">Products</h1>
        </div>

        <div className="w-[70%] min-h-[30%] grid grid-cols-4 gap-4 mt-[10%]">
          {/* display users */}
          {user.map((data) => {
            if (data?.firstapprove == "Not approve") {
              return (
                <div
                  className=" bg-white rounded-lg drop-shadow-xl border flex items-center justify-center h-[100px] cursor-pointer transition-[1s] hover:scale-[1.05]"
                  onClick={() => {
                    setApproveModal(true);
                    setSingleUser(data);
                  }}
                >
                  <div className=" ">{data.productName}</div>
                </div>
              );
            }
          })}
        </div>

        {/* Approve and not Approved modal */}
        {approveModal && (
          <ProductModal closeModal={setApproveModal} user={singleUser} />
        )}
      </div>
    </>
  );
};

export default Homepage;
