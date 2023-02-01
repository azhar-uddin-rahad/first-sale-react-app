import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TopBanner.css";
import banner1 from "../../../assits/banner1.jpeg";
import banner2 from "../../../assits/banner2.jpeg";
import banner3 from "../../../assits/banner3.jpeg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const TopBanner = () => {
    return (
        <div>
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
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>        
      </Swiper>
    </>




        </div>
    );
};

export default TopBanner;