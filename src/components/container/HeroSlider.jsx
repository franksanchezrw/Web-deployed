import React from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import edit from "../../assets/ediit.png";
const HeroSlider = () => {
  const slides = [
    // {
    //   backgroundImage: 'https://example.com/image1.jpg',
    //   text: 'Modern Text on Tab 1',
    // },
    // {
    //   backgroundImage: 'https://example.com/image2.jpg',
    //   text: 'Modern Text on Tab 2',
    // },
    {
      backgroundImage: {edit},
      text: 'Modern Text on Tab 3',
    },
  ];

  return (
    <div className="App">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide-background"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            <div className="hero-slide-text">
              <h1>{slide.text}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
