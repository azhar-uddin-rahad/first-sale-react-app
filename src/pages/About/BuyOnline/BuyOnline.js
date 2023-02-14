import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BuyOnline=()=>{
    return(
        <div className="max-w-[1440px] mx-auto my-[100px]">
            <div className="paymentsDetails p-5">
                <div className="flex flex-col gap-5 lg:flex-row justify-center items-center mb-[100px]">
                    <div className="w-full text-center lg:text-start lg:w-1/2">
                 <span className="bg-[#F14D5D] p-3 "> WHO ARE WE?</span>
                    <h2 className="text-4xl text-[#103178]  mt-5 lg:mb-3 lg:mt-16 font-bold py-5 lg:py-0 lg:pr-[300px]">SEARCH, SELECT, BUY ONLINE</h2>
                        <p className="text-[#7a7a7a] text-sm mb-2 py-5 lg:py-0 text-center lg:text-start lg:pr-32 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam eros ipsum, vitae aliquam quam eleifend at. Sed iaculis volutpat nibh, at mattis felis. Nam quam dolor, efficitur ac pellentesque.</p>
                        <Link className="flex gap-2 justify-center lg:justify-start"><span>VIEW MORE</span> <FaArrowRight></FaArrowRight></Link>

                    </div>
                    <div className="w-full lg:w-1/2">
                        <picture >
                            <img src="https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/img1-about-us.jpg" alt="" />
                        </picture>
                    </div>
                </div>
                <div className="flex flex-col gap-5 lg:flex-row-reverse justify-center items-center mb-[100px]">
                    <div className="w-full text-center lg:text-start lg:w-1/2">
                 <span className="bg-[#F14D5D] p-3 "> WHO ARE WE?</span>
                    <h2 className="text-4xl text-[#103178]  mt-5 lg:mb-3 lg:mt-16 font-bold py-5 lg:py-0 lg:pr-[200px]">FAST DELIVERY
WORLDWIDE</h2>
                        <p className="text-[#7a7a7a] text-sm mb-2 py-5 lg:py-0 text-center lg:text-start lg:pr-32 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam eros ipsum, vitae aliquam quam eleifend at. Sed iaculis volutpat nibh, at mattis felis. Nam quam dolor, efficitur ac pellentesque.</p>
                        <Link className="flex gap-2 justify-center lg:justify-start"><span>VIEW MORE</span> <FaArrowRight></FaArrowRight></Link>

                    </div>
                    <div className="w-full lg:w-1/2">
                        <picture >
                            <img src="https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/img2-about-us.jpg" alt="" />
                        </picture>
                    </div>
                </div>
                <div className="flex flex-col gap-5 lg:flex-row justify-center items-center mb-[100px]">
                    <div className="w-full text-center lg:text-start lg:w-1/2">
                 <span className="bg-[#F14D5D] p-3 "> WHO ARE WE?</span>
                    <h2 className="text-4xl text-[#103178]  mt-5 lg:mb-3 lg:mt-16 font-bold py-5 lg:py-0 lg:pr-[270px]">SHOP OFFLINE
OURS OUTLET STORES</h2>
                        <p className="text-[#7a7a7a] text-sm mb-2 py-5 lg:py-0 text-center lg:text-start lg:pr-32 leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam eros ipsum, vitae aliquam quam eleifend at. Sed iaculis volutpat nibh, at mattis felis. Nam quam dolor, efficitur ac pellentesque.</p>
                        <Link className="flex gap-2 justify-center lg:justify-start"><span>VIEW MORE</span> <FaArrowRight></FaArrowRight></Link>

                    </div>
                    <div className="w-full lg:w-1/2">
                        <picture >
                            <img src="https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/img3-about-us.jpg" alt="" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default BuyOnline;