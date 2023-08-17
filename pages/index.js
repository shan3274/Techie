import Homepage from "@/src/Homepage/Homepage";
import Loginhome from "@/src/Homepage/Loginhome";
import { useEffect, useState } from "react";

export default function Home() {
  const [isUserLogin, setUserLogin] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      {
        localStorage.getItem("userEmail") && setUserLogin(true);
      }
    }
  }, []);
  console.log(isUserLogin);
  return (
    <div className="bg-white">{isUserLogin ? <Loginhome /> : <Homepage />}</div>
  );
}
