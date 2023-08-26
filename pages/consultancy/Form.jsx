import React, { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";

import { getDownloadURL, ref, getStorage, uploadBytes } from "firebase/storage";

import { useState } from "react";
import { db } from "@/src/utils/firebase-config";

const Form = () => {
  const [category, setCategory] = useState("");

  // const [productPrice, setproductPrice] = useState("");
  const [img, setImg] = useState([]);
  const [doc, setDoc] = useState();
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  // states for
  // Consultancy_Work_Group
  // Title_of_the_Consultancy_work
  // Brief_Description_Scope
  // Consultancy_Work_Trade_Name
  // Detailed_description
  // Previous_work_done_Experience
  // Rate_Basis
  // Currency
  // Unit_Price
  // Price_Valid_Till_Date
  // percentage_GST_Applicable

  const [consultancyWorkGroup, setConsultancyWorkGroup] = useState("");
  const [titleOfTheConsultancyWork, setTitleOfTheConsultancyWork] =
    useState("");
  const [briefDescriptionScope, setBriefDescriptionScope] = useState("");
  const [consultancyWorkTradeName, setConsultancyWorkTradeName] = useState("");
  const [detailedDescription, setDetailedDescription] = useState("");
  const [previousWorkDoneExperience, setPreviousWorkDoneExperience] =
    useState("");
  const [rateBasis, setRateBasis] = useState("");
  const [currency, setCurrency] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [priceValidTillDate, setPriceValidTillDate] = useState("");
  const [percentageGSTApplicable, setPercentageGSTApplicable] = useState("");

  useEffect(() => {
    setCategory(localStorage.getItem("sellerType"));
    setSellerName(localStorage.getItem("userName"));
    setSellerEmail(localStorage.getItem("userEmail"));
  }, []);

  const downloadImageURLs = [];
  let downloadDocumentURLs = "";

  const sellfun = async () => {
    try {
      const storageRef = getStorage();
      let imageURLs = "";
      let documentURLs = "";
      if (previousWorkDoneExperience == "" && detailedDescription == "") {
        console.log("in file section");
        for (const image of img) {
          imageURLs = await uploadBytes(
            ref(storageRef, `Post/Image/'${Date.now()}-${image.name}`),
            image
          );
          await getDownloadURL(ref(storageRef, imageURLs.ref.fullPath)).then(
            (response) => {
              downloadImageURLs.push(response);
            }
          );
        }
        const documentRef = ref(
          storageRef,
          `Post/Document/'${Date.now()}-${doc.name}`
        );
        documentURLs = await uploadBytes(documentRef, doc);
        await getDownloadURL(ref(storageRef, documentURLs.ref.fullPath)).then(
          (response) => {
            downloadDocumentURLs = response;
          }
        );
      }
      let dataShow;
      {
        previousWorkDoneExperience != "" && detailedDescription != ""
          ? (dataShow = {
              category: category,
              sellerEmail: sellerEmail,
              sellerName: sellerName,
              consultancyWorkGroup: consultancyWorkGroup,
              titleOfTheConsultancyWork: titleOfTheConsultancyWork,
              briefDescriptionScope: briefDescriptionScope,
              consultancyWorkTradeName: consultancyWorkTradeName,
              detailedDescription: detailedDescription,
              previousWorkDoneExperience: previousWorkDoneExperience,
              rateBasis: rateBasis,
              currency: currency,
              unitPrice: unitPrice,
              priceValidTillDate: priceValidTillDate,
              percentageGSTApplicable: percentageGSTApplicable,
            })
          : (dataShow = {
              imageUrls: downloadImageURLs,
              documentURLs: downloadDocumentURLs,
              category: category,
              sellerEmail: sellerEmail,
              sellerName: sellerName,
              consultancyWorkGroup: consultancyWorkGroup,
              titleOfTheConsultancyWork: titleOfTheConsultancyWork,
              briefDescriptionScope: briefDescriptionScope,
              consultancyWorkTradeName: consultancyWorkTradeName,
              rateBasis: rateBasis,
              currency: currency,
              unitPrice: unitPrice,
              priceValidTillDate: priceValidTillDate,
              percentageGSTApplicable: percentageGSTApplicable,
            });
      }

      await addDoc(collection(db, `Consultancy`), dataShow).then(() => {
        alert("submitted");
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="">
      <div className="w-full min-h-screen flex flex-col items-center justify-start">
        {/* type */}
        {/* <div className="w-[15%] h-[5%] flex items-center justify-center border bg-white  mt-8 rounded-lg drop-shadow-md absolute">
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Spare parts">Spare parts</option>
            <option value="Machine">Machine</option>
          </select>
        </div> */}
        {/* form */}

        <div className="w-full h-[170vh] flex flex-col items-center justify-start  mt-[6rem] mb-[5rem]">
          {/* label */}
          <label className="w-[15%] flex items-center justify-center h-[5%] mb-10 text-[30px] font-[600]">
            Consultancy
          </label>
          {/* Detailed discription */}
          <div
            className="w-[15%] h-[10%] flex items-center justify-center bg-yellow-300 rounded-lg drop-shadow-lg hover:scale-[1.03] transition-[1s] cursor-pointer"
            title="Add your Detailed discription file"
          >
            <label htmlFor="image">Description pdf +</label>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setImg(e.target.files)}
              id="image"
              multiple
            />
          </div>
          <p className="mt-3">OR</p>
          <textarea
            placeholder="Detailed Description"
            value={detailedDescription}
            title="Brief Description scope"
            onChange={(e) => setDetailedDescription(e.target.value)}
            className="w-[25%] h-[20%] pl-5 mt-5 border border-gray-400 text-black rounded-md resize-none"
          ></textarea>

          {/* Document */}
          <div className="w-[15%] h-[10%] relative">
            <div
              className="w-[100%] h-[100%] mt-5 flex items-center justify-center bg-yellow-300 rounded-lg drop-shadow-lg hover:scale-[1.03] transition-[1s] cursor-pointer"
              title="Previous work done by experience"
            >
              <label htmlFor="document">Previous work pdf +</label>{" "}
              <input
                type="file"
                className="hidden"
                onChange={(e) => setDoc(e.target.files)}
                id="document"
              />
            </div>
            <div className="absolute top-2 right-[-1rem]"></div>
          </div>
          <p className="mt-6">OR</p>
          <input
            type="text"
            title="Previous work done by experience"
            placeholder="Work done by experience"
            value={previousWorkDoneExperience}
            onChange={(e) => setPreviousWorkDoneExperience(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-10 border border-gray-400 text-black rounded-md"
          />

          {/* fields */}
          <input
            type="text"
            title="Title of the consultancy work"
            placeholder="Title"
            value={titleOfTheConsultancyWork}
            onChange={(e) => setTitleOfTheConsultancyWork(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-10 border border-gray-400 text-black rounded-md"
          />
          <input
            type="text"
            placeholder="work group"
            title="Consultancy work group"
            value={consultancyWorkGroup}
            onChange={(e) => setConsultancyWorkGroup(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <input
            type="text"
            placeholder="Typical Specification"
            title="Consultancy work tradeNamee"
            value={consultancyWorkTradeName}
            onChange={(e) => setConsultancyWorkTradeName(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <textarea
            placeholder="Brief Description"
            value={briefDescriptionScope}
            title="Brief Description scope"
            onChange={(e) => setBriefDescriptionScope(e.target.value)}
            className="w-[25%] h-[20%] pl-5 mt-5 border border-gray-400 text-black rounded-md resize-none"
          ></textarea>
          <input
            type="text"
            placeholder="Rate basis"
            title="Rate basis"
            value={rateBasis}
            onChange={(e) => setRateBasis(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <input
            type="text"
            placeholder="Currency"
            title="Currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <input
            type="text"
            placeholder="Unit price"
            title="Unit price"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />

          <input
            type="text"
            placeholder="Price valid till date"
            title="Price valid till date"
            value={priceValidTillDate}
            onChange={(e) => setPriceValidTillDate(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />

          <input
            type="text"
            placeholder="% of GST Applicablee"
            title=" % of GST Applicablee"
            value={percentageGSTApplicable}
            onChange={(e) => setPercentageGSTApplicable(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <button
            className="w-[10%] h-[7%]  mt-10 bg-gray-400 rounded-lg shadow-lg text-white  drop-shadow-lg hover:scale-[1.03] transition-[1s]"
            onClick={sellfun}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
