// import Header from "@/src/Homepage/Header";
// import React, { useMemo, useState } from "react";
// import Productcards from "./Productcards";
// import Footer from "@/src/Homepage/Footer";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/src/utils/firebase-config";
// import Headingswiper from "./Headingswiper";

// const index = () => {
//   const [data1, setData1] = useState([]);
//   useMemo(async () => {
//     getDocs(
//       collection(
//         db,
//         "POSTS/GjZxh7T7CJsYv1lEEoyW/Machine/VHgC9rJmSFoK1CV1o922/Oil and gas"
//       )
//     ).then((res) => {

//       setData1(
//         res.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//           path : 'POSTS/GjZxh7T7CJsYv1lEEoyW/Machine/VHgC9rJmSFoK1CV1o922/Oil and gas'
//         }))
//       );
//     });
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="w-full relative top-[200px] bg-transparent">
//         <Headingswiper />
//       </div>
//       <div className="w-full relative top-[300px] h-[400px]  bg-white   flex items-center justify-center">
//         <Productcards {...data1} />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default index;

import "remixicon/fonts/remixicon.css";
import Head from "next/head";
import style from "../../styles/productmain.module.css";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";


const Homepage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Georgian:wght@300&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={style.main}>
        {/* header */}
        <Header />
        {/* home design */}
        <section className={`${style.home}  ${style.section}`}>
          <div className={style.hometext}>
            <h4 className="text-[15px] font-[500]">
              Demo Home page for website
            </h4>
            <h1 className="text-[20px] font-[700]">
              So we will replace this soon
            </h1>
            <a href="#" className={style.btn}>
              Explore more
            </a>
          </div>
          <div className={style.homeimg}>
            <img src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/Post%2FDocument%2F5024147.jpg?alt=media&token=12381ebd-d51f-46f0-8187-3d3b412ca59f" />
          </div>
        </section>
        {/* feature */}
        <section className={style.feature}>
          <div className={style.middletext}>
            <h2>
              Discover more <span>good things</span>
            </h2>
          </div>
          <div className={style.featurecontent}>
            {/* row */}
            <div className={`${style.row} ${style.row1}`}>
              <div className={style.mainrow}>
                <div className={style.rowtext}>
                  <h6>Get the products</h6>
                  <h3>
                    Buy your product <br />
                    of choice
                  </h3>
                  <Link
                    href={{
                      pathname: "buy/products",
                      query: { name: "test", path: "/buy/products" },
                    }}
                    className={style.rowbtn}
                  >
                    Show me all
                  </Link>
                </div>
                <div className={style.rowimg}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/Post%2FDocument%2Fbox_679821.png?alt=media&token=4f816178-81a3-4d4f-aa4b-b9bc4617ab7c"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* row */}
            <div className={`${style.row} ${style.row2}`}>
              <div className={style.mainrow}>
                <div className={style.rowtext}>
                  <h6>Explore Our services</h6>
                  <h3>
                    Services which you <br />
                    Require
                  </h3>
                  <Link
                    href={{
                      pathname: "/buy/services",
                      query: { name: "test", path: "/buy/services" },
                    }}
                    className={style.rowbtn}
                  >
                    Show me all
                  </Link>
                </div>
                <div className={style.rowimg}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/Post%2FDocument%2Fcustomer-service_3631153.png?alt=media&token=4623ec11-9ec4-4bbb-9759-84fd0f0a3167"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* row */}
            <div className={`${style.row} ${style.row3}`}>
              <div className={style.mainrow}>
                <div className={style.rowtext}>
                  <h6>Get in touch</h6>
                  <h3>
                    Consultancy <br />
                    with us
                  </h3>
                  <Link
                    href={{
                      pathname: "/consultancy",
                      query: { name: "test", path: "/consultancy" },
                    }}
                    className={style.rowbtn}
                  >
                    Show me all
                  </Link>
                </div>
                <div className={style.rowimg}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/Post%2FDocument%2Fconversation_6712857.png?alt=media&token=f7161e1a-aa68-46cc-8c1d-533ec7571c6c"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* product */}
        <section className={style.product}>
          <div className={style.middletext}>
            <h2>
              New Arrivals <span>Best selling of the month</span>
            </h2>
          </div>
          <div className={style.productcontent}>
            {/* item cart */}
            <div className={style.box}>
              <div className={style.boximg}>
                <img
                  src="https://m.media-amazon.com/images/I/61TGtBnj8xL._SX679_.jpg"
                  alt=""
                />
              </div>
              <h3>Galaxy buds 3</h3>
              <h4>New ANC 2022</h4>
              <div className={style.inbox}>
                <div className="">
                  <a href="#" className={style.price}>
                    $100
                  </a>
                </div>
                <div className={style.rating}>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                </div>
              </div>
              <div className={style.heart}>
                <i class="ri-heart-line"></i>
              </div>
            </div>
            {/* item cart */}
            <div className={style.box}>
              <div className={style.boximg}>
                <img
                  src="https://m.media-amazon.com/images/I/71+qQN-3KvL._SX679_.jpg"
                  alt=""
                />
              </div>
              <h3>Galaxy buds 3</h3>
              <h4>New ANC 2022</h4>
              <div className={style.inbox}>
                <div className="">
                  <a href="#" className={style.price}>
                    $100
                  </a>
                </div>
                <div className={style.rating}>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                </div>
              </div>
              <div className={style.heart}>
                <i class="ri-heart-fill"></i>
              </div>
            </div>
            {/* item cart */}
            <div className={style.box}>
              <div className={style.boximg}>
                <img
                  src="https://m.media-amazon.com/images/I/81tioCUVf4L._SX679_.jpg"
                  alt=""
                />
              </div>
              <h3>Galaxy buds 3</h3>
              <h4>New ANC 2022</h4>
              <div className={style.inbox}>
                <div className="">
                  <a href="#" className={style.price}>
                    $100
                  </a>
                </div>
                <div className={style.rating}>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                </div>
              </div>
              <div className={style.heart}>
                <i class="ri-heart-fill"></i>
              </div>
            </div>
            {/* item cart */}
            <div className={style.box}>
              <div className={style.boximg}>
                <img
                  src="https://m.media-amazon.com/images/I/71miPegpaOL._SX679_.jpg"
                  alt=""
                />
              </div>
              <h3>Galaxy buds 3</h3>
              <h4>New ANC 2022</h4>
              <div className={style.inbox}>
                <div className="">
                  <a href="#" className={style.price}>
                    $100
                  </a>
                </div>
                <div className={style.rating}>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                  <a href="#">
                    <i class="ri-star-fill"></i>
                  </a>
                </div>
              </div>
              <div className={style.heart}>
                <i class="ri-heart-fill"></i>
              </div>
            </div>
          </div>
        </section>
        {/* cta */}
        <section className={style.ctacontent}>
          <div className={style.cta}>
            <div className={style.ctatext}>
              <a href="#" className={style.logo}>
                <h1>Logo</h1>
              </a>
              <h3>Special offer in products</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quo nihil itaque deleniti impedit odit facere dolore
                commodi eum unde veritatis, eligendi sint voluptatum animi? A
                nostrum quis voluptas. Mollitia.
              </p>
              <a href="#" className={style.btn}>
                Discover more
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;
