"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { Myachi, Obuv, Odejdi, Terenajorni, VodniSport, GorniSport } from '@/assets/images';
import Image from 'next/image';

export default function CaruselCatalog() {
  const data = [
    { title: "Тренажеры", bg: "#D3E5F2", img: Terenajorni },
    { title: "Мячи", bg: "#F3E9E3", img: Myachi },
    { title: "Спротивные обуви", bg: "#DADBE0", img: Obuv },
    { title: "Спортивные одежды", bg: "#E2EEC0", img: Odejdi },
    { title: "Водный спорт", bg: "#C2BCE8", img: VodniSport },
    { title: "Горный спорт", bg: "rgba(171,165,32,0.2)", img: GorniSport },
    { title: "Тренажеры", bg: "#D3E5F2", img: Terenajorni },
    { title: "Мячи", bg: "#F3E9E3", img: Myachi },
    { title: "Спротивные обуви", bg: "#DADBE0", img: Obuv },
    { title: "Спортивные одежды", bg: "#E2EEC0", img: Odejdi },
    { title: "Водный спорт", bg: "#C2BCE8", img: VodniSport },
    { title: "Горный спорт", bg: "rgba(171,165,32,0.2)", img: GorniSport },
  ];

  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
          1536: {
            slidesPerView: 6,
          },
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full rounded-lg pt-6 pb-9 px-4 flex flex-col items-center justify-between" style={{ background: item.bg }}>
              <div className="text-lg text-start">{item.title}</div>
              <div>
                <Image src={item.img} width={126} height={102} alt={item.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
}
