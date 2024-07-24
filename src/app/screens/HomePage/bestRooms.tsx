import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper types
import { Swiper as SwiperType } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// Array of images
const images = [
  "/best/1.jpg",
  "/best/2.jpg",
  "/best/3.jpg",
  "/best/4.jpg",
  "/best/5.jpg",
  "/best/6.jpg",
  "/best/7.jpg",
  "/best/8.jpg",
];

export default function BestRooms() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="best-config">
      <div className="title-container">
        <span className="main-title">Best Rooms</span>
      </div>
      <Swiper
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}
          >
            <div className="overlay"></div>
            <a href="/allProducts" className="more-button">
              More →
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
