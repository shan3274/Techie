import Link from "next/link";
import React, { useMemo, useState } from "react";

const Search = ({ closeModal }) => {
  const items = require("../utils/DATA_FETCH.json");

  const [value, setValue] = useState("");

  //   const filterItem = useMemo(() => {
  //     return items.filter((item) =>
  //       item.toLowerCase().includes(value.toLowerCase())
  //     );
  //   }, [items, value]);

  const [filterItem, setFilterItem] = useState([]);
  const search = (value) => {
    const results = items.filter((data) => {
      return data.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilterItem(results);
    console.log("rendring");
  };
  useMemo(() => {
    search(value);
  }, [value]);

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
            className="w-[90%] h-[50px] mt-10 border-[.3px] border-black rounded-full px-10"
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
          {filterItem.map((res) => {
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
  );
};

export default Search;
