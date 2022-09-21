import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
       
        <link
          rel="icon"
          sizes="192x192"
          type="image/png"
          href="https://www.turkeyadvisors.com/favicon-192x192.ico"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
          rel="stylesheet"
        />
       
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}