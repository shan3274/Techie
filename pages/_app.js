import "@/styles/globals.css";
import "@/styles/app.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>techno</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
