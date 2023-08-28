import { auth, db } from "@/src/utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, updateDoc } from "firebase/firestore";
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
        <div className="w-[100%] h-[10%] flex items-center justify-center absolute top-10 text-[30px] font-[500]">
          {user?.fullName}
        </div>
        <div className="w-[70%] h-[100%] flex items-center justify-center text-[17px]">
          <div className="w-[30%] h-[80%] flex flex-col justify-center gap-5">
            <div className="">Username</div>
            <div className="">User ID</div>
            <div className="">Email</div>
            <div className="">Company Name</div>
            <div className="">GSTIN</div>
            <div className="">Address</div>
            <div className="">Industry Type</div>
            <div className="">Nature</div>
            <div className="">Application</div>
            <div className="">
              {user?.approve == "true" && (
                <div className="">Number of products</div>
              )}
            </div>
          </div>
          <div className="w-[30%] h-[80%] flex flex-col justify-center text-gray-600 gap-5">
            <div className="">{user?.userName}</div>
            <div className="">{user?.id}</div>
            <div className="">{user?.email}</div>
            <div className="">{user?.companyName}</div>
            <div className="">{user?.gstin}</div>
            <div className="">{user?.address}</div>
            <div className="">{user?.industryType}</div>
            <div className="">{user?.nature}</div>
            <div className="">{user?.application}</div>
            <div className="">
              {user?.approve == "true" && (
                <div className="">{userData?.length}</div>
              )}
            </div>
          </div>
        </div>
        {user?.approve == "false" ? (
          <div className="absolute bottom-0 w-[100%] h-[10%] flex items-center justify-center gap-5">
            <select
              onChange={(e) => setApprove(e.target.value)}
              className="w-[150px] h-[40px] border border-black rounded-md"
            >
              <option value="">Select</option>
              <option value={true}>Approve</option>
              <option value={false}>Not Approve</option>
            </select>

            <button
              className={
                approve == "true"
                  ? `py-2 px-5 rounded-md bg-green-500  text-white`
                  : `py-2 px-5 rounded-md bg-red-500  text-white`
              }
              onClick={async () => {
                if (approve == "true") {
                  try {
                    await createUserWithEmailAndPassword(
                      auth,
                      user.email,
                      user.password
                    ).then(async () => {
                      await updateDoc(doc(db, "User", user.id), {
                        approve: approve,
                      }).then(() => window.location.reload(true));
                    });
                  } catch (error) {
                    alert(error.message);
                  }
                }
              }}
            >
              submit
            </button>
          </div>
        ) : (
          <Link
            href={{
              pathname: "/admin/Addproducts",
              query: {
                category: user.industryType,
                sellerName: user.userName,
                sellerEmail: user.email,
              },
            }}
            className="absolute bottom-5  w-[150px] h-[40px] bg-green-500 text-white flex items-center justify-center rounded-md"
          >
            Add product +
          </Link>
        )}
      </div>
    </div>
  );
};

export default Approvemodal;
