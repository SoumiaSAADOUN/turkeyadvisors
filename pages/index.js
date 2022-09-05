import { Col, Row, Carousel, Image, Button } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HomeContent from "../components/Home/Content";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const imagesCarousel=[
    "/assets/images/u7HPicVLZyPaYyq6V3bK.jpg",
    "/assets/images/UI9XdW5dbARVEXQgzXhF.jpg",
    "/assets/images/UI9XdW5dbARVEXQgzXhF.jpg",
    "/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"
  ]
  return (
    <div className="flex flex-col justify-center items-center">
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
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              class="block w-full"
              src={"/assets/images/u7HPicVLZyPaYyq6V3bK.jpg"}
            />
          </div>

          <div class="carousel-item active relative float-left w-full">
            <img
              class="block w-full"
              src={"/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"}
            />
          </div>
          <div class="carousel-item active relative float-left w-full">
            {" "}
            <img
              class="block w-full"
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
    </div>
  );
}
