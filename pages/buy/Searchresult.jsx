import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/utils/firebase-config";
import Link from "next/link";
const Searchresult = () => {
  const { query } = useRouter();
  const [data, setData] = useState([]);
  const [items, setItems] = useState(true);
  const products = async () => {
    if (query.path != null) {
      try {
        setItems(true);
        await getDocs(collection(db, query.path)).then((response) => {
          setData(
            response.docs.map((data) => {
              return { ...data.data(), id: data.id };
            })
          );
        });
      } catch (error) {
        setItems(false);
        console.log(error.message);
      }
    }
  };
  useEffect(() => {
    products();
  }, [query]);

  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center mt-[5%]">
        <div className="w-[20%] h-[100%] border-r"></div>
        <div className="w-[80%] h-[100%]  overflow-y-scroll ">
          {items ? (
            <>
              {data?.map((item) => {
                return (
                  <Link
                    href={{
                      pathname: "/buy/products/Productpage",
                      query: {
                        path: query.path,
                        similarproduct: query.path,
                        productId: item.id,
                      },
                    }}
                    className="w-[100%] h-[200px] flex items-center justify-around border-b"
                  >
                    <div className="w-[30%] h-[100%] flex items-center justify-center ">
                      {item?.imageUrls ? (
                        <img src={item?.imageUrls[0]} className="h-[180px]" />
                      ) : (
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
                          alt="loading"
                          className="h-[180px]"
                        />
                      )}
                    </div>
                    <div className="w-[40%] h-[100%] flex flex-col gap-2 justify-center items-start">
                      <div className="text-[20px] font-[500]">
                        {item?.productName}
                      </div>
                      <div className="text-[15px] text-gray-500">
                        {item?.productCode}
                      </div>
                      <div className="text-[15px] text-gray-500">
                        {item?.category}
                      </div>
                      <div className="text-[15px] text-gray-500">
                        {item?.type}
                      </div>
                    </div>
                    <div className="w-[30%] h-[100%] flex flex-col gap-2 justify-center items-start">
                      <div className="text-[15px] text-blue-500">
                        {item?.sellerName}
                      </div>
                      <div className="text-[15px] text-blue-500">
                        {item?.sellerEmail}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : (
            <div className="w-[100%] h-[100%] flex flex-col items-center gap-3 justify-start">
              <i class="ri-emotion-sad-line text-[150px]"></i>
              <h1 className="text-[30px] text-gray-600">
                Sorry product not found
              </h1>
              <textarea
                className="w-[60%] h-[200px] border-[.5px] border-black resize-none rounded-md p-5"
                placeholder="Request your product here..."
              ></textarea>
              <button className="w-[200px] h-[40px] rounded-md bg-green-500 text-white transition-[1s] hover:scale-[1.03]">
                Request
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Searchresult;
