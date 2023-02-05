import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import './TopProduct.css'
import img1 from '../../../assits/car1.png'
import { FaStarAndCrescent } from "react-icons/fa";


const TopProduct = ({productInfos}) => {
 const resalePrice =  productInfos?.resalePrice;
if(resalePrice>=100000){
  <div className="max-w-[1440px] mx-auto">
        

        <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
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
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cardWraper">
            <div className="cardImg h-[300px] w-[300px]">
              <picture>
                <img src={img1} className="w-full h-full" alt="" />
              </picture>
            </div>
            <div className="cardDetails">
              <div className="cardHeader">
              <h1>this is best laptop</h1>
              <p>$1500</p>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum    sit velit animi repudiandae praesentium amet.</p>
              <div className="reating">
                <FaStarAndCrescent></FaStarAndCrescent>
                <button>Hello world</button>
              </div>
            </div>
            
          </div>

        </SwiperSlide>
        
      </Swiper>
    </>
        </div>
  
}
 
 
    
    return (
      <div>
       
      </div>
       
    );
};

export default TopProduct;