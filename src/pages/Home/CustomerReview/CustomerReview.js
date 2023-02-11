import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import authImg from '../../../assits/topSeller/1.jpg';
import authImg2 from '../../../assits/topSeller/2.jpg';
import authImg3 from '../../../assits/topSeller/2 (1).jpg';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper";
import './CustomerReview.css'
import { FaStar } from "react-icons/fa";

const CustomerReview = () => {
    const productReviews=[
        {   id : 1,
            details: "We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design. Awesome to work with Arlo. Incredibly organized, easy to communicate with, responsive with next iterations.",
            authorImg: authImg,
            authorName : "Bill Gates",
            authorProportion:"MERN Stack developer"
        },
        {   id : 2,
            details: "I purchased the theme a few weeks ago. I had some issues with the theme, I asked customer support to help me with and they were helpful and kind to help me with all my problems. I definitely recommend this theme to everyone.",
            authorImg: authImg3,
            authorName : "Osama bin Laden",
            authorProportion:"MERN Stack developer"
        },
        {   id : 3,
            details: "Really the Code, Support, and design are awesome and its good support they are giving. They give an instant solution to our needs. Really awesome. I will strongly recommend to my friends. Great template, even better service!",
            authorImg: authImg2,
            authorName : "Adolf Hitler",
            authorProportion:"German politician"
        }
    ]

    return (
        <div className="reviewSection bg-[#f9f9f9]">
            <div className='max-w-[1440px] mx-auto mt-[100px] pt-[100px] pb-[100px] flex justify-between items-center'>
                <div className='reviewLeft w-1/2'>
                    <h1 className="text-4xl font-bold leading-[60px] text-[#000000]">What Clients Say About My Product Quality?</h1>
                </div>
                <>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
       {productReviews?.map(productReview => 
         <SwiperSlide key={productReview.id}>
         <div className='reviewRight w-1/2'>
                      <div className="text-start">
                         <p className="text-[#666666]">{productReview.details}</p>
                     </div>
                     <div className='flex gap-5 mt-5 '>
                         <div className='w-1/5'>
                             <picture>
                                 <img src={productReview.authorImg} className="rounded-[100%] w-full" alt="" />
                             </picture>
                         </div>
                         <div className='w-3/5 text-start'>
                             <h1 className="text-3xl text-[#000000] font-bold">{productReview.authorName}</h1>
                             <p className="texl-xl text-[#000000] font-medium"> {productReview.authorProportion}</p>
                             <div className="flex text-[#F14D5D]">
                     <FaStar></FaStar>
                     <FaStar></FaStar>
                     <FaStar></FaStar>
                     <FaStar></FaStar>
                     <FaStar></FaStar>
       </div>
                         </div>
                     </div>
                     </div>
 
         </SwiperSlide>
       )

       }
        
      </Swiper>
    </>
      </div>
                
     </div>
    );
};

export default CustomerReview;