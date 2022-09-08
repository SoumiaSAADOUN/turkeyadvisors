import Head from "next/head";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HiOutlineChat, HiOutlineChevronUp } from "react-icons/hi";
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

      <div>
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
            <img
              className="block w-full"
              src={"/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"}
            />
          </div>
        </div>

        {/* <Row
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
        </Row> */}
      </div>

      <HomeContent />
      <a
        href={`mailto:${"soum.saadoun@gmail.com"}`}
        className="animate-bounce rounded-full text-PRIMARY_COLOR bg-SECONDARY_COLOR fixed bottom-5 left-10 group hover:bg-PRIMARY_COLOR"
      >
        
        <HiOutlineChat className="w-6 h-6 m-2 group-hover:text-BACKGROUND_COLOR text-PRIMARY_COLOR" />
      </a>

      <a
        href="#"
        className="bg-SECONDARY_COLOR rounded fixed -bottom-1 text-PRIMARY_COLOR right-2 group hover:bg-PRIMARY_COLOR"
      >
        <HiOutlineChevronUp className="w-6 h-6 m-4 group-hover:text-BACKGROUND_COLOR text-PRIMARY_COLOR" />
      </a>
      <Footer />
    </div>
  );
}
