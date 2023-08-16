import React from "react";
import Header from "./Header";
import FAQ from "./FAQ";
import Swiper from "./Swipers";
import Services from "./Services";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="bg-white">
      <Header />
      <FAQ />
      <Swiper />
      <Services />
      <Footer />
    </div>
  );
};

export default Homepage;
