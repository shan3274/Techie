import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase-config";

const Search = ({ closeModal }) => {
  const items = require("../utils/DATA_FETCH.json");

  const [value, setValue] = useState("");

  //   const filterItem = useMemo(() => {
  //     return items.filter((item) =>
  //       item.toLowerCase().includes(value.toLowerCase())
  //     );
  //   }, [items, value]);
  const [result, setResults] = useState([]);
  useMemo(async () => {
    await getDocs(collection(db, "Products")).then((res) => {
      setResults(
        res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }, []);
  const [filterItem, setFilterItem] = useState([]);
  const [filterItem2, setFilterItem2] = useState([]);
  const search = (value) => {
    let results = [];
    let results2 = [];

    results2 = items.filter((data) => {
      return data.name.toLowerCase().includes(value.toLowerCase());
    });

    results = result?.filter((data) => {
      return data?.productName?.toLowerCase().includes(value.toLowerCase());
    });

    setFilterItem(results);
    setFilterItem2(results2);
    console.log("rendring", results);
  };
  useMemo(() => {
    search(value);
  }, [value]);
  console.log(filterItem.length, filterItem2.length);

  return (
    <div className="w-full h-screen flex items-center justify-center fixed top-0 backdrop-blur-[1px] z-[1000]">
      <div className="w-[80%] h-[80%] bg-white border  drop-shadow-l relative flex flex-col items-center  gap-5">
        {/* close button */}
        <div className="absolute top-3 right-3">
          <i
            class="ri-close-circle-line text-[20px] cursor-pointer"
            onClick={() => {
              closeModal(false);
            }}
          ></i>
        </div>
        <div className="w-[100%] flex items-center justify-center">
          <input
            type="search"
            className="w-[90%] h-[50px] mt-10 border-[.3px] border-black rounded-full px-10 marker:"
            placeholder="Search..."
            onChange={(e) => setValue(e.target.value)}
          />
          <Link
            href={{
              pathname: "/buy/Searchresult",
              query: { name: "test", path: "/buy/Searchresult" },
            }}
            onClick={() => closeModal(false)}
          >
            <i class="ri-search-line relative text-[25px] left-[-2.5rem] top-[1.1rem]"></i>
          </Link>
        </div>
        <div className="w-full">
          <div className="w-full">
            {filterItem.map((res) => {
              return (
                <div className="">
                  {value && (
                    <Link
                      className="w-[100%] h-[40px] border-b-[.5px] border-black flex items-center justify-start pl-10  "
                      href={{
                        pathname: "/buy/products/Productpage",
                        query: {
                          path: "Products",
                          similarproduct: "Products",
                          productId: res.id,
                        },
                      }}
                      onClick={() => closeModal(false)}
                    >
                      <p className="w-[100%] transition-[1s] hover:text-blue-500 hover:scale-[1.01] flex items-center justify-around relative">
                        <div className="absolute left-0">{res.productName}</div>
                        <img
                          src={res.imageUrls[0]}
                          alt=""
                          className="h-[30px] absolute right-10"
                        />
                      </p>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <div className="w-full">
            {filterItem2.map((res) => {
              return (
                <div className="">
                  {value && (
                    <Link
                      className="w-[100%] h-[40px] border-b-[.5px] border-black flex items-center justify-start pl-10  "
                      href={{
                        pathname: "/buy/Searchresult",
                        query: { name: "test", path: res.path },
                      }}
                      onClick={() => closeModal(false)}
                    >
                      <p className="w-[100%] transition-[1s] hover:text-blue-500 hover:scale-[1.01]">
                        {res.name}
                      </p>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
