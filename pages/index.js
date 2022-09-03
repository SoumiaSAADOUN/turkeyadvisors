import { Col, Row, Carousel, Image, Button } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link
          rel="icon"
          sizes="192x192"
          type="image/png"
          href="https://www.turkeyadvisors.com/favicon-192x192.ico"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Turkey Advisors | Real estate & Investment advisors In Turkey
        </title>
      </Head>
      <Header />
      <div className={styles.carouselContainer}>
        <Carousel autoplay style={{ width: "100vw" }}>
          <Image
            preview={false}
            src={"/assets/images/u7HPicVLZyPaYyq6V3bK.jpg"}
          />
          <Image
            preview={false}
            src={"/assets/images/B6nLqD0UV2gmsDk5y2eM.jpg"}
          />
          <Image
            preview={false}
            src={"/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"}
          />
          <Image
            preview={false}
            src={"/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"}
          />
          <Image
            preview={false}
            src={"/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"}
          />
        </Carousel>

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
      </div>
    </>
  );
}
