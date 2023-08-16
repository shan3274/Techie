import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { MenuOpen } from "@mui/icons-material";
import Link from "next/link";
import Header from "./Header";
const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="">
      <Header />
    </div>
  );
};

export default Homepage;
