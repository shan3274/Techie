import React, { useState } from "react";
import Header from "./Header";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "@/src/utils/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/src/utils/firebase-config";
const Updateads = () => {
  const [logo, setLogo] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [details, setDetails] = useState();

  const handleSubmit = async () => {
    console.log("onSubmit");
    const storageRef = getStorage(app);
    const imageURLs = await uploadBytes(
      ref(storageRef, `Post/Image/'${Date.now()}-${image.name}`),
      image
    );
    const logoURLs = await uploadBytes(
      ref(storageRef, `Post/Image/'${Date.now()}-${logo.name}`),
      logo
    );
    const downloadImageURLs = [];
    await getDownloadURL(ref(storageRef, imageURLs.ref.fullPath)).then(
      (response) => {
        downloadImageURLs.push(response);
      }
    );
    const downloadLogoURLs = [];
    await getDownloadURL(ref(storageRef, logoURLs.ref.fullPath)).then(
      (response) => {
        downloadLogoURLs.push(response);
      }
    );
    const data = {
      title: title,
      details: details,
      address: address,
      logo: downloadLogoURLs,
      image: downloadImageURLs,
    };
    await addDoc(collection(db, "Ads"), data).then(() => {
      alert("Success");
      setTitle("");
      setDetails("");
      setAddress("");
      setImage();
      setLogo();
    });
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center mt-[100px]">
        <div className="w-[40%] h-[90%] flex flex-col gap-5 items-center justify-center bg-white drop-shadow-lg rounded-md border">
          <p className="text-[30px] font-[700]">Post UI</p>
          <label
            htmlFor="logo"
            className="w-[200px] h-[50px] bg-yellow-400 text-white flex items-center justify-center rounded-md drop-shadow-md cursor-pointer"
          >
            Logo +
          </label>
          <input
            type="file"
            name="logo"
            id="logo"
            className="hidden"
            onChange={(e) => {
              setLogo(e.target.files[0]);
            }}
          />
          <label
            htmlFor="image"
            className="w-[200px] h-[50px] bg-yellow-400 text-white flex items-center justify-center rounded-md drop-shadow-md cursor-pointer"
          >
            Image +
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-[70%] h-[40px] border border-black pl-5 rounded-md"
            placeholder="Title"
          />
          <textarea
            className="resize-none w-[70%] h-[100px] border border-black rounded-md pl-3 pt-3"
            placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <textarea
            className="resize-none w-[70%] h-[150px] border border-black rounded-md pl-3 pt-3"
            placeholder="Details"
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button
            className="w-[150px] h-[40px] rounded-md bg-green-500 text-white transition-[1s] hover:scale-[1.02]"
            onClick={() => handleSubmit()}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default Updateads;
