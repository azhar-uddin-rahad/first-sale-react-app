import React, { Fragment, useState } from 'react';
import {  useQuery } from "@tanstack/react-query";
import TopProduct from './TopProduct';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Autoplay, Pagination } from "swiper";
import './TopProduct.css'
import { FaStar, FaStarAndCrescent } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TopProductInfo = () => {
    
    const {data:topProductCard=[]}=useQuery({
      queryKey: ['topProductCard'],
      queryFn: async () =>{
        const res= await fetch('http://localhost:5000/categorys')
        const data =res.json()
        return data 
      }
  
    })

    return (
        <div className='bg-[#E2E8F0] '>
    <div className="mainBox max-w-[1440px] mx-auto">
    <div className="mb-[50px]">
        <h1 className="text-5xl font-bold text-center text-[#000000]">
          Our Popular Product
        </h1>
        <p className="text-2xl mt-5 font-bold text-center text-[#666666]">
        This is the most viewed and premium product please <span className='text-[#F14D5D]'>Book Now</span>.
        </p>
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
        modules={[Autoplay,Pagination]}
        className="mySwiper "
      >
         {topProductCard.map(productInfo =>  {
                if(productInfo.resalePrice > 90000){
              return <Fragment>
             <SwiperSlide>
         <div className="card bg-base-100 shadow-xl transform transition duration-500 hover:scale-125 mb-10">
         <figure><div className='cardImage'><img src={productInfo.image_url} alt="Shoes" /></div></figure>
         <div className="p-5">
    <h2 className="card-title text-xl">
     {productInfo?.model.length > 20 ? <>{productInfo?.model.slice(0,20)}</> : productInfo?.model}
      <div className="py-[2px] px-2 text-[#fff] rounded-xl text-sm bg-[#F14D5D]">NEW</div>
    </h2>
    <p className='text-start text-sm font-normal text-[#666666]'>{productInfo?.title.length > 60 ? <>{productInfo?.title.slice(0,55)}</> : <>{productInfo?.title}</>} </p>
    <div className="card-actions justify-between  mt-2">
      <div className="text-xl text-[#F14D5D] font-medium">${productInfo?.resalePrice}</div> 
      <div className="flex text-[#F14D5D]">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
      </div>
      <button className=' mt-3 w-full text-[#ffffff]  rounded-3xl bg-[#F14D5D] py-[15px] lg:px-[40px] px-[20px] transition duration-150 ease-linear hover:bg-[#0A1831]'><Link className=''  to='#'>Book Now</Link></button>
    </div>
  </div>
</div>
   </SwiperSlide>

                   </Fragment>
                    
                  
       
}})}
        
      </Swiper>
        </div>
                   
                 
        </div>
    );
};

export default TopProductInfo;