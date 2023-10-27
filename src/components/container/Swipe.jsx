import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swipecss.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swipe() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-sea3">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
