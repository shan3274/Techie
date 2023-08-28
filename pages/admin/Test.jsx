import { db } from "@/src/utils/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import React, { useMemo, useState } from "react";

const Test = () => {
  const [search, setSeacrh] = useState("");
  const [user, setUser] = useState([]);

  useMemo(async () => {
    if (search != "") {
      await getDocs(collection(db, "User")).then((res) => {
        setUser(
          res.docs.map((item) => {
            if (item?.data().userName.toLowerCase().includes(search)) {
              return { ...item.data(), id: item.id };
            }
          })
        );
      });
    } else {
      setSeacrh("");
    }
  }, [user,search]);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <input
        type="search"
        className="w-[200px] h-[40px] border"
        value={search}
        onChange={(e) => {
          setSeacrh(e.target.value);
        }}
      />

      <div className="">
        {user?.map((item) => {
          return <div className="">{item?.userName}</div>;
        })}
      </div>
    </div>
  );
};

export default Test;
