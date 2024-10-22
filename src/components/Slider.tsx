"use client"; 
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './Slider.module.css'; 
import  './slide.css'; 
import { Autoplay } from 'swiper/modules';

const Slider: React.FC = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            loop={true}
            centeredSlides={true}
            spaceBetween={0}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            onInit={(swiper) => {
                swiper.autoplay.start(); // Bắt đầu autoplay khi khởi tạo
            }}
            onSlideChange={(swiper) => {
                const slides = swiper.slides;
                slides.forEach(slide => {
                    slide.style.opacity = '0'; 
                });
                const activeIndex = swiper.activeIndex;
                slides[activeIndex].style.opacity = '1'; 
                slides[(activeIndex - 1 + slides.length) % slides.length].style.opacity = '1';
                slides[(activeIndex + 1) % slides.length].style.opacity = '1'; 
                slides[(activeIndex - 2 + slides.length) % slides.length].style.opacity = '1'; 
                slides[(activeIndex + 2) % slides.length].style.opacity = '1'; 
            }}
        >
            {Array.from({ length: 8 }).map((_, index) => (
                <SwiperSlide key={index}>
                    <Image 
                        src="https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg" 
                        alt={`Image ${index + 1}`} 
                        width={500} 
                        height={300} 
                        className={styles.image}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
