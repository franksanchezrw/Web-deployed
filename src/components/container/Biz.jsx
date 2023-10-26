import React, { useEffect } from 'react';
import Swiper from 'swiper';

import './biz.css'; // Import your custom CSS for styling

const Biz = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, []);

    return (
        <div className="slider-wrapper">
            <div className="text-content">
                <h2>Your Title</h2>
                <p>Your description goes here.</p>
            </div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={{ backgroundImage: `url('https://imgs.search.brave.com/d-UiZQU9W9FhAAEzdCTOFpkzf9KvD8jvPjV3gZP20wE/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/NjQwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw')` }}>
                        <div className="slide-content">
                            <h2>Slide 1</h2>
                            <p>Some text describing Slide 1.</p>
                        </div>
                    </div>
                    <div className="swiper-slide" style={{ backgroundImage: `url('https://imgs.search.brave.com/d-UiZQU9W9FhAAEzdCTOFpkzf9KvD8jvPjV3gZP20wE/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/NjQwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw/600x400')` }}>
                        <div className="slide-content">
                            <h2>Slide 2</h2>
                            <p>Some text describing Slide 2.</p>
                        </div>
                    </div>
                       <div className="swiper-slide" style={{ backgroundImage: `url('your_image_url')` }}>
                        <div className="slide-content">
                            <h2>Slide 2</h2>
                            <p>Some text describing Slide 2.</p>
                        </div>
                    </div>
                    {/* Add more slides as needed */}
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    );
};

export default Biz;
