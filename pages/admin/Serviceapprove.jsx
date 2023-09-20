import React, { useEffect, useState } from "react";
import Header from "./Header";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "@/src/utils/firebase-config";

const Modal = ({ closeModal, data }) => {
  return (
    <div className="w-full h-screen backdrop-blur-md absolute top-[50px] left-0 flex items-center justify-center ">
      <div className="w-[80%] h-[80%] bg-white rounded-md border relative flex items-center justify-center">
        <button
          className="absolute top-3 right-3"
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
        <div className="w-[100%] h-[100%] flex flex-col gap-5 items-center justify-center">
          <img
            src={data.image[0]}
            alt=""
            className="w-[30%] rounded-md drop-shadow-md"
          />
          <div className="text-[25px] font-[700]">{data.type}</div>
          <div className="">{data.work}</div>
          <div className="w-[60%] text-center">{data.details}</div>
          <div className="">{data.value}</div>
          <button
            className="w-[150px] h-[40px] rounded-full bg-green-500 text-white"
            onClick={async () => {
              await updateDoc(doc(db, "Services", data.id), {
                approve: "true",
              }).then(() => {
                window.location.reload(true);
              });
            }}
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

const Serviceapprove = () => {
  const [consultancy, setConsultancy] = useState([]);
  const [closeModal, setCloseModal] = useState(false);
  const [singleData, setSingleData] = useState("");
  const data = async () => {
    await getDocs(collection(db, "Services")).then((response) => {
      setConsultancy(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center relative top-[50px]">
        <div className="w-[70%] min-h-[30%] grid grid-cols-4 gap-4 mt-[10%]">
          {consultancy.map((item, key) => {
            if (item.approve != "true") {
              return (
                <div
                  className="w-[200px] h-[100px] border bg-white drop-shadow-md flex items-center justify-center cursor-pointer"
                  key={item.id}
                  onClick={() => {
                    setCloseModal(true);
                    setSingleData(item);
                  }}
                >
                  <div className="">{item.type}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
      {closeModal && <Modal closeModal={setCloseModal} data={singleData} />}
    </>
  );
};

export default Serviceapprove;
