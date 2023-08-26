// import Footer from "@/src/Homepage/Footer";
// import Header from "@/src/Homepage/Header";
// import { db } from "@/src/utils/firebase-config";
// import { collection, doc, getDoc, getDocs } from "firebase/firestore";
// import { useRouter } from "next/router";
// import React, { useEffect, useMemo, useState } from "react";

// const Productpage = () => {
//   const { query } = useRouter();

//   const [data1, setData1] = useState([]);
//   const [data2, setData2] = useState();
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
//           path: "POSTS/GjZxh7T7CJsYv1lEEoyW/Machine/VHgC9rJmSFoK1CV1o922/Oil and gas",
//         }))
//       );
//     });
//   }, []);
//   useEffect(() => {
//     data1.map((item) => {
//       if (item.id == query.product) {
//         setData2(item);
//       }
//     });
//   }, [data1]);
//   console.log(data2);
//   return (
//     <>
//       <Header />

//       <div classNameName="w-full h-screen bg-white gap-10 sticky  top-0 flex items-center justify-center">
//         <div classNameName="w-[50%] h-[60%] ml-10 flex flex-col gap-10 items-center justify-center ">
//           {" "}
//           <img
//             src={data2?.imageUrls[0]}
//             alt=""
//             classNameName="w-[400px] border bg-white drop-shadow-xl p-5"
//           />{" "}
//           <div classNameName="w-[100%]  flex gap-5 items-center justify-center">
//             <button classNameName="w-[25%] h-[50px] bg-blue-500 text-white">
//               BUY
//             </button>
//             <button classNameName="w-[25%] h-[50px] bg-yellow-500 text-white">
//               CART +
//             </button>
//           </div>
//         </div>
//         <div classNameName="w-[50%] h-[50%] flex  justify-center items-center">
//           <div classNameName="w-[100%] h-[100%] flex flex-col items-start justify-center gap-5">
//             <div classNameName="w-full flex gap-[8rem] text-[25px] font-[500]">
//               <div classNameName="">{data2?.productName}</div>
//             </div>
//             <div classNameName="w-full flex gap-[8rem]">
//               {" "}
//               <div classNameName="w-[150px]">Category</div>
//               <div classNameName="">{data2?.category}</div>
//             </div>
//             <div classNameName="w-full flex gap-[8rem]">
//               {" "}
//               <div classNameName="w-[150px]">Product code</div>{" "}
//               <div classNameName="">{data2?.productCode}</div>
//             </div>
//             <div classNameName="w-full flex gap-[8rem]">
//               {" "}
//               <div classNameName="w-[150px]">Description</div>
//               <div classNameName="">{data2?.productDescription}</div>{" "}
//             </div>
//             <div classNameName="w-full flex gap-[8rem]">
//               <div classNameName="w-[150px]">Typical Specification</div>{" "}
//               <div classNameName="">{data2?.TypicalSpecification}</div>{" "}
//             </div>
//             <div classNameName="w-full flex gap-[8rem]">
//               {" "}
//               <div classNameName="w-[150px]">Type</div>{" "}
//               <div classNameName="">{data2?.type}</div>
//             </div>
//             <div classNameName="w-full flex gap-[8rem]">
//               <div classNameName="w-[150px]">Seller Name</div>
//               <div classNameName="">{data2?.sellerName}</div>
//             </div>

//             <div classNameName="w-full flex gap-[8rem]">
//               <div classNameName="w-[150px]">Seller Email</div>
//               <div classNameName="">{data2?.sellerEmail}</div>
//             </div>
//           </div>
//           {/* <div classNameName="w-[50%] h-[100%] flex flex-col items-start justify-center gap-5">
//             <div classNameName="">{data2?.productName}</div>
//             <div classNameName="">{data2?.category}</div>
//             <div classNameName="">{data2?.productCode}</div>
//             <div classNameName="">{data2?.productDescription}</div>
//             <div classNameName="">{data2?.TypicalSpecification}</div>
//             <div classNameName="">{data2?.type}</div>
//             <div classNameName="">{data2?.sellerName}</div>
//             <div classNameName="">{data2?.sellerEmail}</div>
//           </div> */}
//         </div>
//       </div>
//       <div classNameName="w-full h-screen bg-white sticky  top-0 flex items-center justify-center">
//         hello
//       </div>
//       <div classNameName="w-full h-screen bg-white sticky  top-0 flex items-center justify-center">
//         hello
//       </div>
//     </>
//   );
// };

// export default Productpage;

import React from "react";
import style from "../../../styles/buy.module.css";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/router";
const index = () => {
  const { query, pathname } = useRouter();
  console.log("query ", query, " pathname ", pathname);
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <div className={style.body}>
        {/* <div className={style.header__bar}>
          Free Shipping on Orders Over $50
        </div> */}
        {/* <nav className={`${style.section__container} ${style.nav__container}`}>
          <a href="#" className={style.nav__logo}>
            Mon'sa
          </a>
          <ul className={style.nav__links}>
            <li className={style.link}>
              <a href="#">HOME</a>
            </li>
            <li className={style.link}>
              <a href="#">SHOP</a>
            </li>
            <li className={style.link}>
              <a href="#">PAGES</a>
            </li>
            <li className={style.link}>
              <a href="#">BLOG</a>
            </li>
            <li className={style.link}>
              <a href="#">LOOKBOOK</a>
            </li>
          </ul>
          <div className={style.nav__icons}>
            <span>
              <i className="ri-shield-user-line"></i>
            </span>
            <span>
              <i className="ri-search-line"></i>
            </span>
            <span>
              <i className="ri-shopping-bag-2-line"></i>
            </span>
          </div>
        </nav> */}

        <header>
          <div
            className={`${style.section__container} ${style.header__container}`}
          >
            <div className={style.header__content}>
              <p>EXTRA 55% OFF IN SPRING SALE</p>
              <h1>
                Discover & Shop
                <br />
                The Trend Ss19
              </h1>
              <button className={style.btn}>SHOP NOW</button>
            </div>
            <div className={style.header__image}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fheader.png?alt=media&token=7d94ec6f-451b-4fe1-a11a-2966afc34e85"
                alt="header"
              />
            </div>
          </div>
        </header>

        <section
          className={`${style.section__container} ${style.collection__container}`}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fcollection.jpg?alt=media&token=87188479-0ead-4d6f-b018-c0179069d402"
            alt="collection"
          />
          <div className={style.collection__content}>
            <h2 className={style.section__title}>New Collection</h2>
            <p>#35 ITEMS</p>
            <h4>Available on Store</h4>
            <button className={style.btn}>SHOP NOW</button>
          </div>
        </section>

        <section
          className={`${style.section__container} ${style.sale__container}`}
        >
          <h2 className={style.section__title}>On Sale</h2>
          <div className={style.sale__grid}>
            <div className={style.sale__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fsale-1.jpg?alt=media&token=b76d4f5e-f071-4471-9d38-a60b13aaba9f"
                alt="sale"
              />
              <div className={style.sale__content}>
                <p className={style.sale__subtitle}>MAN OUTERWEAR</p>
                <h4 className={style.sale__title}>
                  sale <span>40%</span> off
                </h4>
                <p className={style.sale__subtitle}>- DON'T MISS -</p>
                <button className={`${style.btn} ${style.sale__btn}`}>
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className={style.sale__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fsale-2.jpg?alt=media&token=77319ac2-33b0-4c87-9b54-b80a52426f2d"
                alt="sale"
              />
              <div className={style.sale__content}>
                <p className={style.sale__subtitle}>WOMAN T-SHIRT</p>
                <h4 className={style.sale__title}>
                  sale <span>25%</span> off
                </h4>
                <p className={style.sale__subtitle}>- DON'T MISS -</p>
                <button className={`${style.btn} ${style.sale__btn}`}>
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className={style.sale__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fsale-3.jpg?alt=media&token=55fabfdd-540d-41df-a8cb-1e54a28ef60d"
                alt="sale"
              />
              <div className={style.sale__content}>
                <p className={style.sale__subtitle}>JACKETS</p>
                <h4 className={style.sale__title}>
                  sale <span>20%</span> off
                </h4>
                <p className={style.sale__subtitle}>- DON'T MISS -</p>
                <button className={`${style.btn} ${style.sale__btn}`}>
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${style.section__container} ${style.musthave__container}`}
        >
          <h2 className={style.section__title}>Must Have</h2>
          <div className={style.musthave__nav}>
            <a href="#">ALL</a>
            <a href="#">MAN</a>
            <a href="#">WOMEN</a>
            <a href="#">BAG</a>
            <a href="#">SHOES</a>
          </div>
          <div className={style.musthave__grid}>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-1.png?alt=media&token=1a077b4f-98b5-4fb3-a9ef-47a33f6b9f2f"
                alt="must have"
              />
              <h4>Basic long sleeve T-shirt</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-2.png?alt=media&token=b484f510-4fea-4ab3-99c2-6b2a22336a38"
                alt="must have"
              />
              <h4>Ribbed T-shirt with buttons</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-3.png?alt=media&token=72b2cb66-367e-4fcf-bbc5-f989bb8cd400"
                alt="must have"
              />
              <h4>Jacket withside strips</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-4.png?alt=media&token=bdb3a399-3374-47b7-9f21-9ce4ed41e60b"
                alt="must have"
              />
              <h4>High-heel tubular sandals</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-5.png?alt=media&token=b7b4994b-b843-4190-91bc-14454f08e143"
                alt="must have"
              />
              <h4>Coral fabric belt bag</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-6.png?alt=media&token=61c29186-74cf-4364-be58-ae20399192ed"
                alt="must have"
              />
              <h4>Piggy skater slogan T-shirt</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-7.png?alt=media&token=fdf7ea1f-f465-4463-ad20-337b87621d96"
                alt="must have"
              />
              <h4>White platform boots</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-8.png?alt=media&token=b5a6b434-7f69-4287-ad3d-720e980770a7"
                alt="must have"
              />
              <h4>Sweater vest with sleeves</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-9.png?alt=media&token=80939092-00c0-4d0c-9177-3dae62d63341"
                alt="must have"
              />
              <h4>Slim fit pants</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-10.png?alt=media&token=a1ab7443-b562-4e9d-9303-084ab944707e"
                alt="must have"
              />
              <h4>Gray backpack</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-11.png?alt=media&token=f2883aa1-c44e-405f-b996-460ec07e488a"
                alt="must have"
              />
              <h4>Neon sweatshirt</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
            <div className={style.musthave__card}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fmusthave-12.png?alt=media&token=70186744-a795-4344-b464-e43551ea63d7g"
                alt="must have"
              />
              <h4>Hooded nautical jacket</h4>
              <p>
                <del>$45.00</del> $75.00
              </p>
            </div>
          </div>
        </section>

        <section className={style.news}>
          <div
            className={`${style.section__container} ${style.news__container}`}
          >
            <h2 className={style.section__title}>Latest News</h2>
            <div className={style.news__grid}>
              <div className={style.news__card}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fnews-1.jpg?alt=media&token=b589da6c-b74d-4133-9bfc-683cd0df6018"
                  alt="news"
                />
                <div className={style.news__details}>
                  <p>
                    FASHION <i className="ri-checkbox-blank-circle-fill"></i>
                    <span>JAMES SIMSON</span>
                    <i className="ri-checkbox-blank-circle-fill"></i> FEB 2,
                    2019
                  </p>
                  <h4>Seasonal Trends</h4>
                  <hr />
                  <p>
                    Discuss the latest fashion trends for the current season and
                    offer tips and ideas on how to incorporate these trends into
                    your wardrobe.
                  </p>
                  <a href="#">
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
              <div className={style.news__card}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fnews-2.jpg?alt=media&token=d4012cc1-0fc4-412d-bb4a-01bed7372d9d"
                  alt="news"
                />
                <div className={style.news__details}>
                  <p>
                    TRENDS <i className="ri-checkbox-blank-circle-fill"></i>
                    <span>JAMES SIMSON</span>
                    <i className="ri-checkbox-blank-circle-fill"></i> APR 15,
                    2019
                  </p>
                  <h4>Fashion Tips and Advice</h4>
                  <hr />
                  <p>
                    Provide your readers with practical tips and advice on how
                    to dress for different occasions, body types, or style
                    preferences.
                  </p>
                  <a href="#">
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
              <div className={style.news__card}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fnews-3.jpg?alt=media&token=b3a669f4-ac27-46b7-9334-0df905288893"
                  alt="news"
                />
                <div className={style.news__details}>
                  <p>
                    STYLE <i className="ri-checkbox-blank-circle-fill"></i>
                    <span>JAMES SIMSON</span>
                    <i className="ri-checkbox-blank-circle-fill"></i> JUL 22,
                    2019
                  </p>
                  <h4>Sustainable Fashion</h4>
                  <hr />
                  <p>
                    Cover the growing trend of eco-conscious fashion and explore
                    the various ways to be sustainable in your fashion choices.
                  </p>
                  <a href="#">
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${style.section__container} ${style.brands__container}`}
        >
          <div className={style.brand__image}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fbrand-1.png?alt=media&token=a0dc1ca8-b7f9-46b5-9a2b-7d7c044aa0d0"
              alt="brand"
            />
          </div>
          <div className={style.brand__image}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fbrand-2.png?alt=media&token=d874cbd2-0177-46a3-84c0-fce041ad1913"
              alt="brand"
            />
          </div>
          <div className={style.brand__image}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fbrand-3.png?alt=media&token=c05824d2-181e-44da-a210-e5a9ef4a0e8a"
              alt="brand"
            />
          </div>
          <div className={style.brand__image}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fbrand-4.png?alt=media&token=80dbb55d-0974-4f57-a2ec-7ce8ba909343"
              alt="brand"
            />
          </div>
          <div className={style.brand__image}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fbrand-5.png?alt=media&token=03c9e95a-283f-43b8-a9f3-4460cdacc8a2"
              alt="brand"
            />
          </div>
          <div className={style.brand__image}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Fbrand-6.png?alt=media&token=1859d38f-6dca-45a0-82c3-6e7692277c14"
              alt="brand"
            />
          </div>
        </section>

        <hr />

        <Footer />
      </div>
    </>
  );
};

export default index;
