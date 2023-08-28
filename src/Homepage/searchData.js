import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase-config";
import { useState } from "react";

const data = async () => {
  return await getDocs(collection(db, "User"));
};

export default data;
