import Head from "next/head";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContent from "../components/Home/Content";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const imagesCarousel = [
    "/assets/images/u7HPicVLZyPaYyq6V3bK.jpg",
    "/assets/images/UI9XdW5dbARVEXQgzXhF.jpg",
    "/assets/images/UI9XdW5dbARVEXQgzXhF.jpg",
    "/assets/images/UI9XdW5dbARVEXQgzXhF.jpg",
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <meta charset="utf-8" />
        <link
          rel="icon"
          sizes="192x192"
          type="image/png"
          href="https://www.turkeyadvisors.com/favicon-192x192.ico"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Turkey Advisors | Real estate & Investment advisors In Turkey
        </title>
      </Head>
      <Header />
      
      
     
      {/* <div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              className="block w-full"
              src={"/assets/images/u7HPicVLZyPaYyq6V3bK.jpg"}
            />
          </div>

          <div className="carousel-item active relative float-left w-full">
            <img
              className="block w-full"
              src={"/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"}
            />
          </div>
          <div className="carousel-item active relative float-left w-full">
            {" "}
            <img
              className="block w-full"
              src={"/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"}
            />
          </div>
        </div>

        <Row
          className={styles.buttonsCarousel}
          justify="space-between"
          align="middle"
        >
          <Col>
            <Button className={styles.buttonsCarouselItem} size="large">
              {t.carousel.enquireNow}
            </Button>
          </Col>
          <Col>
            <Button className={styles.buttonsCarouselItem} size="large">
              {t.carousel.moreInfos}
            </Button>
          </Col>
        </Row>
      </div> */}

      <HomeContent />
      <button className="animate-bounce rounded-full bg-SECONDARY_COLOR fixed bottom-5 left-10 group hover:bg-PRIMARY_COLOR">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 m-2 group-hover:text-BACKGROUND_COLOR"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      </button>

      <button className="bg-SECONDARY_COLOR rounded fixed -bottom-1 right-2 group hover:bg-PRIMARY_COLOR">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 m-3 group-hover:text-BACKGROUND_COLOR"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
      <Footer />
    </div>
  );
}
