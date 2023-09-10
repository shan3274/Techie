import React, { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";

import { getDownloadURL, ref, getStorage, uploadBytes } from "firebase/storage";

import { useState } from "react";
import { db, app } from "@/src/utils/firebase-config";
import Header from "@/src/Homepage/Header";

const Form = () => {
  const [type, setType] = useState();
  const [details, setDetails] = useState();
  const [work, setWork] = useState();
  const [value, setValue] = useState();
  const [catalog, setCatalog] = useState();
  const [image, setImage] = useState();

  const handleSubmit = async () => {
    console.log("onSubmit");
    const storageRef = getStorage(app);
    const imageURLs = await uploadBytes(
      ref(storageRef, `Post/Image/'${Date.now()}-${image?.name}`),
      image
    );
    const logoURLs = await uploadBytes(
      ref(storageRef, `Post/Image/'${Date.now()}-${catalog?.name}`),
      catalog
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
      type: type,
      details: details,
      work: work,
      value: value,
      catalog: downloadLogoURLs,
      image: downloadImageURLs,
    };
    await addDoc(collection(db, "Services"), data).then(() => {
      alert("Success");
      setType("");
      setDetails("");
      setWork("");
      setValue("");
      setImage();
      setCatalog();
    });
  };

  console.log(image, catalog);

  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col items-center justify-center relative top-[100px] gap-5 pt-10">
        <label className="text-[40px] text-blue-950 font-[600]">Services</label>
        {/* type */}
        <select
          name="type"
          id="type"
          className="w-[30%] h-[40px] border border-black rounded-md pl-2"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Expert Civil Services">Expert Civil Services</option>
          <option value="Expert Mechanical Services">
            Expert Mechanical Services
          </option>
          <option value="Expert Electrical services">
            Expert Electrical services
          </option>
          <option value="Contractor Civil">Contractor Civil</option>
          <option value="Contractor Mechanical">Contractor Mechanical</option>
          <option value="Contractor Electrical">Contractor Electrical</option>
          <option value="Contractor Instrumentation">
            Contractor Instrumentation
          </option>
          <option value="Lease / Hire - Cranes, Generator, Pumps, Equipment etc">
            Lease / Hire - Cranes, Generator, Pumps, Equipment etc
          </option>
          <option value="Annual Maintenance Contract ">
            Annual Maintenance Contract
          </option>
        </select>
        <textarea
          className="w-[30%] h-[100px] border border-black rounded-md pl-2 pt-2 resize-none"
          placeholder="Details"
          onChange={(e) => setDetails(e.target.value)}
        />
        <input
          type="text"
          className="w-[30%] h-[40px] border border-black rounded-md pl-2 "
          placeholder="Major Technical Services Work"
          onChange={(e) => setWork(e.target.value)}
        />
        <input
          type="text"
          className="w-[30%] h-[40px] border border-black rounded-md pl-2"
          placeholder="Value / Price of Major work"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="w-[100%] flex items-center justify-center">
          {" "}
          <label
            htmlFor="catalog"
            className="w-[20%] h-[50px] flex items-center justify-center text-white rounded-md bg-yellow-500 cursor-pointer"
            title="Upload Unpriced PO copy or Company Profile or Catalogue"
          >
            Upload +
          </label>
          <input
            type="file"
            name="catalog"
            id="catalog"
            className="hidden"
            onChange={(e) => setCatalog(e.target.files[0])}
          />
        </div>
        <div className="w-[100%] flex items-center justify-center">
          {" "}
          <label
            htmlFor="image"
            className="w-[20%] h-[50px] flex items-center justify-center text-white rounded-md bg-yellow-500 cursor-pointer"
            title="Upload Image"
          >
            Image +
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button
          className="w-[15%] h-[50px] bg-green-500 text-white rounded-md transition-[1s] hover:scale-[1.02]"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Form;
