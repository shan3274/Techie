import React, { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/src/utils/firebase-config";
import { ColorRing } from "react-loader-spinner";
import Header from "../Header";
import Footer from "../Footer";
const Productpage = () => {
  const { query } = useRouter();
  const [data, setData] = useState();
  useMemo(async () => {
    if (query.path) {
      await getDoc(doc(db, query.path)).then((res) => {
        setData(res.data());
      });
    }
  }, [query]);

  return (
    <>
      <Header />
      {data ? (
        <div className="w-full h-screen flex items-center justify-center">
          {data.productName}
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <ColorRing />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Productpage;
