import React from "react";
import style from "../../styles/buy.module.css";
import Head from "next/head";

const Footer = () => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </Head>
      <div className={style.body}>
        <footer
          className={`${style.section__container} ${style.footer__container}`}
        >
          <div className={style.footer__col}>
            <h4 className={style.footer__heading}>CONTACT INFO</h4>
            <p>
              <i className="ri-map-pin-2-fill"></i> 123, London Bridge Street,
              London
            </p>
            <p>
              <i className="ri-mail-fill"></i> support@monsa.com
            </p>
            <p>
              <i className="ri-phone-fill"></i> (+012) 3456 789
            </p>
          </div>
          <div className={style.footer__col}>
            <h4 className={style.footer__heading}>COMPANY</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Work With Us</p>
            <p>Our Blog</p>
            <p>Terms & Conditions</p>
          </div>
          <div className={style.footer__col}>
            <h4 className={style.footer__heading}>USEFUL LINK</h4>
            <p>Help</p>
            <p>Track My Order</p>
            <p>Men</p>
            <p>Women</p>
            <p>Shoes</p>
          </div>
          <div className={style.footer__col}>
            <h4 className={style.footer__heading}>INSTAGRAM</h4>
            <div className={style.instagram__grid}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Finstagram-1.jpg?alt=media&token=73bf4c24-e0c5-4b1e-80ba-0ce10eb0fe5a"
                alt="instagram"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Finstagram-2.jpg?alt=media&token=be549401-48db-4e6c-bb64-75ba4f1e3655"
                alt="instagram"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Finstagram-3.jpg?alt=media&token=41944c8e-2936-41f0-8d56-fb2ff0d212d5"
                alt="instagram"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Finstagram-4.jpg?alt=media&token=acb7eb1f-59cf-4cc0-92b7-803107887b25"
                alt="instagram"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Finstagram-5.jpg?alt=media&token=6fc481ca-ce26-477b-b215-74fcafa17e0a"
                alt="instagram"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-com-2066c.appspot.com/o/assests%2Finstagram-6.jpg?alt=media&token=e2f2d34f-73a1-498f-96fa-4584ca92b7f1"
                alt="instagram"
              />
            </div>
          </div>
        </footer>

        <hr />

        <div className={`${style.section__container} ${style.footer__bar}`}>
          <div className="copyright">
            Copyright © 2023 X Company. All rights reserved.
          </div>
          <div className={style.footer__form}>
            <form>
              <input type="text" placeholder="ENTER YOUR EMAIL" />
              <button className={style.btn} type="submit">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
