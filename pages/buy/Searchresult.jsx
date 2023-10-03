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
  const [filterItem, setFilterItem] = useState([]);

  const [checkeds, setChecked] = useState([]);

  const [companyName, setCompanyName] = useState([]);

  const products = async () => {
    if (query.path != null) {
      try {
        setItems(true);
        await getDocs(collection(db, "Products")).then((response) => {
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

  const search = (value) => {
    let results = [];

    results = data?.filter((datas) => {
      return datas?.productName?.toLowerCase().includes(value.toLowerCase());
    });

    setFilterItem(results);
  };
  useMemo(() => {
    search(query.value);
  }, [query.value, data]);

  useEffect(() => {
    products();
  }, [query]);

  console.log(companyName);
  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center mt-[5%]">
        <div className="w-[20%] h-[100%] border-r pt-5 pl-5">
          {filterItem.length > 0 && (
            <>
              {filterItem?.map((item) => {
                return (
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      value={item.id}
                      id={item.id}
                      onChange={(e) => {
                        let flag = false;
                        checkeds.map((ch) => {
                          if (ch.id == item.id) {
                            flag = true;
                          }
                        });
                        if (flag == false) {
                          setChecked([
                            ...checkeds,
                            {
                              value: document.getElementById(item.id).checked,
                              id: item.id,
                              name: item.sellerName,
                            },
                          ]);
                        }
                        if (flag) {
                          checkeds.map((ch) => {
                            if (ch.id == item.id) {
                              setChecked(
                                checkeds.filter((data) => data.id != ch.id)
                              );
                            }
                          });
                        }
                      }}
                    />{" "}
                    {item?.sellerName}
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className="w-[80%] h-[100%]  grid grid-cols-4 gap-3 p-10 ">
          {filterItem.length > 0 ? (
            <>
              {filterItem?.map((item) => {
                return (
                  <>
                    {checkeds.length > 0 ? (
                      <>
                        {checkeds.map((res) => {
                          if (res.value && res.name == item.sellerName) {
                            return (
                              <>
                                <Link
                                  href={{
                                    pathname: "/buy/products/Productpage",
                                    query: {
                                      path: "Products",
                                      similarproduct: "Products",
                                      productId: item.id,
                                    },
                                  }}
                                  className="w-[300px] h-[400px] flex flex-col items-center justify-around border"
                                >
                                  <img
                                    src={item?.imageUrls[0]}
                                    alt="no image"
                                    className="w-[80%]"
                                  />
                                  <div className="flex gap-2 text-gray-500">
                                    <span className="text-orange-500">by</span>{" "}
                                    {item.sellerName}
                                  </div>
                                  <div className="w-[80%] text-center flex items-center justify-center">
                                    {item.productName}
                                  </div>
                                </Link>
                              </>
                            );
                          }
                        })}
                      </>
                    ) : (
                      <Link
                        href={{
                          pathname: "/buy/products/Productpage",
                          query: {
                            path: "Products",
                            similarproduct: "Products",
                            productId: item.id,
                          },
                        }}
                        className="w-[300px] h-[400px] flex flex-col items-center justify-around border"
                      >
                        <img
                          src={item?.imageUrls[0]}
                          alt="no image"
                          className="w-[80%]"
                        />
                        <div className="flex gap-2 text-gray-500">
                          <span className="text-orange-500">by</span>{" "}
                          {item.sellerName}
                        </div>
                        <div className="w-[80%] text-center flex items-center justify-center">
                          {item.productName}
                        </div>
                      </Link>
                    )}
                  </>
                );
              })}
            </>
          ) : (
            <div className="w-full h-screen flex flex-col items-center gap-3 justify-center absolute left-0 top-0">
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
