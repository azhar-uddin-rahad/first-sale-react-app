import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const JoinOur=()=>{
    return(
        <div className="bg-[#0A1831] mb-[100px]">

          <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row  py-20 gap-32 relative">
            <div className="w-full lg:w-1/3 text-center lg:text-start mb-20">
            <p className="text-[#F14D5D] text-xl mb-2">$20 discount for your first order</p>
            <h2 className="text-[#ffffff] text-3xl mb-2">Join our newsletter and get...</h2>
            <p className="text-[#7a7a7a] text-sm mb-2 lg:pr-32 leading-8">Join our email subscription now to get updates on promotions and coupons.</p>
        <div className="flex items-center bg-[#ffffff] p-2 rounded-md">
       <div className="flex w-4/5 p-3 items-center bg-[#ffffff]">
       <span className="pr-0 mr-0 text-2xl"><FaRegEnvelope></FaRegEnvelope></span>
        <input type="text" className="w-full p-2 focus:outline-0" placeholder="Enter your email address"/>
       </div>
        <button className="w-1/5 bg-[#F14D5D] py-5 rounded-md text-center hover:bg-[#0A1831] text-[#ffffff] transition duration-150 ease-linear">
        <Link className=''  to='#'>Subscribe</Link>
            </button>
        </div>
            </div>
            <div className=" w-full lg:w-2/3">
                <div className="absolute bottom-0">
                <img className="w-full" src="https://i.ibb.co/DWkz2pX/coupon.png"  alt="" />
                </div>

            </div>
           </div>

          </div>
        </div>
    )

}
export default JoinOur