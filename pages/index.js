import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import HomeContent from "../components/Home/Content";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const imagesCarousel = [
    {src:"/assets/images/u7HPicVLZyPaYyq6V3bK.jpg"},
    {src:"/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"},
    {src:"/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"},
    {src:"/assets/images/UI9XdW5dbARVEXQgzXhF.jpg"},
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
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
     
    
    </div>
  );
}
