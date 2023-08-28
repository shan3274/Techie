import "remixicon/fonts/remixicon.css";
import Head from "next/head";
import style from "../../styles/productmain.module.css";
import Link from "next/link";
import Search from "@/src/Homepage/Search";
import { useMemo, useState } from "react";


export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          name: "next.js",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
};

const Header = () => {
  const [searchModal, setSearchModal] = useState(false);

  // const [products, setProducts] = useState([]);
  // useMemo(async () => {
  //   await getDocs(collection(db, "Products")).then((response) => {
  //     setProducts(
  //       response.docs.map((data) => {
  //         return { ...data.data(), id: data.id };
  //       })
  //     );
  //   });
  // }, []);

  // console.log(products);
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
        <header className={`${style.header} ${style.sticky}`}>
          <Link href="/buy" className={style.logo}>
            <h1 className="text-[25px] ">Logo</h1>
          </Link>
          <ul className={style.navbar}>
            <li>
              <Link href="/buy" className={style.active}>
                Home
              </Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className={style.icons}>
            <button>
              <i
                class="ri-search-line"
                onClick={() => {
                  setSearchModal(true);
                }}
              ></i>
            </button>
            <a href="#">
              <i class="ri-user-line"></i>
            </a>
            <a href="#">
              <i class="ri-shopping-cart-line"></i>
            </a>
            <a href="#">
              <i
                class={`ri-menu-line menu-icon ${style.menuicon}`}
                id="menu-icon"
              ></i>
            </a>
          </div>
        </header>
      </div>
      {searchModal && <Search closeModal={setSearchModal} />}
    </>
  );
};

export default Header;
