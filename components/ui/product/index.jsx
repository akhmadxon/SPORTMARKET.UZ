"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);

import { CaruselCard } from "../card";

const Carusel = ({ text, bg }) => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation
        loop={true}
        className="mySwiper"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index} style={{ borderRadius: 10 }}>
            <CaruselCard text={text} bg={bg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Carusel.displayName = "Carusel";
export default Carusel;
