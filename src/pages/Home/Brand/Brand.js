import React, { Fragment, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import msiLogo from "../../../assits/msi.png"

// Import Swiper styles

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Brand.css'

// import required modules
import { Autoplay} from "swiper";

const Brand = () => {
    const topBrand=[
        {
            logo: "https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Apple-logo.webp"

        },
        {
            logo: "https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Acer-logo.webp"

        },
        {
            logo: "https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Dell-logo.webp"

        },
        {
            logo: "https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Lenovo-logo.webp"

        },
        {
            logo: "https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Microsoft-logo.webp"

        },
        {
            logo: "https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Asus-logo.webp"

        },
        {
            logo: "https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Mi-logo.webp"

        },
        {
            logo: msiLogo

        },
       
    ]

    return (
        <div className='max-w-[1440px] mx-auto mt-[100px]'>
        <div className="mainBox max-w-[1440px] mx-auto">
        <div className="mb-[20px]">
            <p className="text-sm text-[#F14D5D] text-center mb-2">HONORABLE CUSTOMER</p>
            <h1 className="text-4xl font-bold text-center text-[#103178] ">
          
            We Are Work With Top Brand
            </h1>
            
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper "
          >
             {topBrand.map(brandLogo =>  <Fragment>
                 <SwiperSlide><img src={brandLogo.logo} alt="" /></SwiperSlide>
                   </Fragment>
                                               
    )}
            
          </Swiper>
            </div>        
            </div>
    );
};

export default Brand;