import React, { useEffect, useMemo } from "react";
import { collection, addDoc, getDoc } from "firebase/firestore";

import { getDownloadURL, ref, getStorage, uploadBytes } from "firebase/storage";

import { useState } from "react";
import { db } from "@/src/utils/firebase-config";
import { Dna } from "react-loader-spinner";
import { useRouter } from "next/router";

const Addproducts = () => {
  const { query } = useRouter();
  const [type, setType] = useState("Machine");
  const [category, setCategory] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [TypicalSpecification, setTypicalSpecification] = useState("");
  const [DetailedSpecification, setDetailedSpecification] = useState("");
  // const [productPrice, setproductPrice] = useState("");
  const [img, setImg] = useState([]);
  const [doc, setDoc] = useState();
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  // loader
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setCategory(localStorage.getItem("sellerType"));
    setSellerName(localStorage.getItem("userName"));
    setSellerEmail(localStorage.getItem("userEmail"));
  }, []);

  const [approve, setApprove] = useState("Not approve");

  const downloadImageURLs = [];
  let downloadDocumentURLs = "";

  const sellfun = async () => {
    try {
      setLoader(true);
      const storageRef = getStorage();
      let imageURLs = "";
      let documentURLs = "";

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

      const dataShow = {
        productCode: productCode,
        productName: productName,
        TypicalSpecification: TypicalSpecification,
        productDescription: DetailedSpecification,
        // productPrice: productPrice,
        imageUrls: downloadImageURLs,
        documentURLs: downloadDocumentURLs,
        firstapprove: approve,
        category: query.category,
        type: type,
        sellerEmail: query.sellerEmail,
        sellerName: query.sellerName,
      };
      await addDoc(
        collection(
          db,
          `SellerProduct/hjSXho3U2Ictlf1XdAIu/${query.sellerEmail}`
        ),
        dataShow
      );
      await addDoc(collection(db, `Products`), dataShow).then(() => {
        setLoader(false);
        alert("submitted");
        setProductCode("");
        setProductName("");
        setDoc("");
        setTypicalSpecification("");
        setDetailedSpecification("");
      });
    } catch (error) {
      setLoader(false);
      console.log(error.message);
    }
  };

  console.log(query.category, query.sellerEmail, query.sellerName);

  return (
    <div className="">
      <div className="w-full  flex flex-col items-center justify-start">
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

        <div className="w-full h-screen flex flex-col items-center justify-start  mt-[6rem]">
          {/* label */}
          <label className="w-[15%] flex items-center justify-center h-[5%] mb-10 text-[30px] font-[600]">
            Add Product
          </label>
          {/* image */}
          <div
            className="w-[15%] h-[10%] flex items-center justify-center bg-yellow-300 rounded-lg drop-shadow-lg hover:scale-[1.03] transition-[1s] cursor-pointer"
            title="Add your Product Image"
          >
            <label htmlFor="image">Image +</label>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setImg(e.target.files)}
              id="image"
              multiple
            />
          </div>
          {/* Document */}
          <div className="w-[15%] h-[10%] relative">
            <div
              className="w-[100%] h-[100%] mt-5 flex items-center justify-center bg-yellow-300 rounded-lg drop-shadow-lg hover:scale-[1.03] transition-[1s] cursor-pointer"
              title="Add your Product Catalog"
            >
              <label htmlFor="document">Catalog +</label>{" "}
              <input
                type="file"
                className="hidden"
                onChange={(e) => setDoc(e.target.files)}
                id="document"
              />
            </div>
            <div className="absolute top-2 right-[-1rem]"></div>
          </div>

          {/* fields */}
          <input
            type="text"
            placeholder="Product Code"
            title="Give your Product a unique code"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-10 border border-gray-400 text-black rounded-md"
          />
          <input
            type="text"
            placeholder="Product Name"
            title="Add your Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <input
            type="text"
            placeholder="Typical Specification"
            title="Technical discription for your product"
            value={TypicalSpecification}
            onChange={(e) => setTypicalSpecification(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          />
          <textarea
            placeholder="Detailed Specification"
            title="Complete description about your product"
            value={DetailedSpecification}
            onChange={(e) => setDetailedSpecification(e.target.value)}
            className="w-[25%] h-[20%] pl-5 mt-5 border border-gray-400 text-black rounded-md resize-none"
          ></textarea>
          {/* <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setproductPrice(e.target.value)}
            className="w-[25%] h-[5%] pl-5 mt-5 border border-gray-400 text-black rounded-md"
          /> */}
          <button
            className="w-[10%] h-[7%]  mt-10 bg-gray-400 rounded-lg shadow-lg text-white  drop-shadow-lg hover:scale-[1.03] transition-[1s]"
            onClick={sellfun}
            title="click here to submit form"
          >
            SELL
          </button>
        </div>
      </div>
      {loader && (
        <div className="z-[10000] w-full h-screen absolute top-0 left-0  flex items-center justify-center">
          <Dna />
        </div>
      )}
    </div>
  );
};

export default Addproducts;
