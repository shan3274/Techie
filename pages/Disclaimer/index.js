import Header from "@/src/Homepage/Header";
import React from "react";

const index = () => {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex items-center justify-center absolute top-[10%]">
        <div className="w-[80%] h-[70%] rounded-2xl bg-[rgba(0,0,0,0.5)] border gap-5 flex items-center justify-center px-[50px] py-[50px] flex-col text-[15px] text-white overflow-y-scroll">
          <h1 className="text-[40px] text-white font-[600] mt-10">
            {" "}
            Disclaimer
          </h1>
          <p>
            The platform provided by Company X ("X") serves as an online
            marketplace for sellers and buyers to engage in the sale and
            purchase of products or services. X acts solely as an intermediary,
            facilitating communication between sellers and buyers for the
            purpose of conducting transactions.
          </p>
          <p>
            Please note that X does not assume any responsibility or liability
            for the products or services listed on its platform. The sellers are
            solely responsible for the accuracy, quality, legality, and fitness
            for purpose of their offerings. Similarly, buyers are responsible
            for verifying the suitability and condition of the products or
            services before making a purchase.
          </p>
          <p>
            X does not provide any warranty, explicit or implied, for the
            products or services offered on its platform. Any warranties or
            guarantees provided by the sellers are strictly between the sellers
            and buyers, and X shall not be a party to such arrangements.
          </p>
          <p>
            Furthermore, X shall not be liable for any disputes, claims,
            damages, losses, or any other liabilities arising from the sale or
            purchase of products or services through its platform. Any conflicts
            or disagreements between sellers and buyers are to be resolved
            solely between the parties involved.
          </p>
          <p>
            Users of the platform must exercise due diligence and caution when
            dealing with other users. It is recommended to thoroughly review the
            seller's and buyer's information, product descriptions, and feedback
            before proceeding with any transactions.
          </p>
          <p>
            By using X's platform, both sellers and buyers agree to hold X
            harmless and release it from any and all claims, demands, or
            liabilities related to transactions conducted through the platform.
          </p>
          <p>
            Company X strongly advises users to seek legal counsel or
            professional advice for any matters related to the buying or selling
            of products or services on its platform.
          </p>
          <p>
            This disclaimer forms an integral part of the terms of use of
            Company X's platform and applies to all users engaging in
            transactions through the platform.
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
