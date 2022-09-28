import "../styles/globals.css";
import "../styles/owl-swiper.css";
import "../styles/home.css";
import Layout from "../components/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
     <meta charSet="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
       
     <title>
          Turkey Advisors | Real estate & Investment advisors In Turkey
        </title>
      </Head>
      <Layout className="font-Merriweather">
      
      <Component {...pageProps} />
    </Layout></>
  );
}

export default MyApp;
