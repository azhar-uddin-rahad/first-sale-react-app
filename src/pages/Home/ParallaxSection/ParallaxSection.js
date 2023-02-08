import React, { useState } from 'react';
import './ParallaxSection.css'
import { AiOutlineFieldTime } from "react-icons/ai";
import { SiCliqz } from "react-icons/si";
import { FaCrown, FaGlobe } from 'react-icons/fa';
import imglaptop from '../../../assits/07.png'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const ParallaxSection = () => {
    const [counterOn,setCounterOn]= useState(false)
    return (
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className='mt-[100px]'>
            <section className='counterAndDetails '>
            <div className="overlay">
                <div className='max-w-[1440px] mx-auto'>

                    <div className="counter flex flex-col justify-start gap-5 lg:flex-row lg:justify-between lg:items-center mb-28">
                       <div className='countDownOne flex gap-2  items-center'>
                       <div className=''>
                            <p className='text-[80px] text-[#F14D5D]'><AiOutlineFieldTime></AiOutlineFieldTime></p>
                        </div>
                        <div className="number">
                            <h3 className='text-2xl text-[#fff]'>PRODUCT SELL</h3>
                            <h4 className='text-5xl text-[#fff]'>+{counterOn && <CountUp start={0} end={4000} duration={5} delay={0}></CountUp>}</h4>
                       </div>
                    </div>

                    <div className='countDownOne flex gap-2 justify-start items-center'>
                       <div className=''>
                            <p className='text-[80px] text-[#F14D5D]'><SiCliqz></SiCliqz></p>
                        </div>
                        <div className="number">
                            <h3 className='text-2xl text-[#fff]'>HAPPY CLIENTS</h3>
                            <h4 className='text-5xl text-[#fff]'> + 
                            {counterOn && <CountUp start={0} end={5000} duration={5} delay={0}></CountUp>}
                            </h4>
                       </div>
                    </div>
                    <div className='countDownOne flex gap-2 justify-start items-center'>
                       <div className=''>
                            <p className='text-[80px] text-[#F14D5D]'><FaGlobe></FaGlobe></p>
                        </div>
                        <div className="number">
                            <h3 className='text-2xl text-[#fff]'>EMPLOYEES WORLDWIDE</h3>
                            <h4 className='text-5xl text-[#fff]'> +{counterOn && <CountUp start={0} end={6430} duration={5} delay={0}></CountUp>}</h4>
                       </div>
                    </div>
                    <div className='countDownOne flex gap-2 justify-start items-center'>
                       <div className=''>
                            <p className='text-[80px] text-[#F14D5D]'><FaCrown></FaCrown></p>
                        </div>
                        <div className="number">
                            <h3 className='text-2xl text-[#fff]'>ACTIVE ACCOUNTS</h3>
                            <h4 className='text-5xl text-[#fff]'>+{counterOn && <CountUp start={0} end={70000} duration={5} delay={0}></CountUp>}</h4>
                       </div>
                    </div>
                </div>
                <div className="details flex flex-col p-5 lg:p-0 lg:flex-row justify-center items-center gap-5 ">
                    <div className="detailsLeft w-full lg:w-1/3">
                        <p className='pb-6 text-[#fff] text-xl'>Sofbox’s harmonious design and super clean looks will make your website look beautiful and elegant. It makes your creation look good.</p>

                        <p className='pb-6 text-[#fff] text-xl'>Simply choose the layout that suits your needs, customize the sections, headers, sliders, colors, choose from pre-made useful elements.</p>
                        <button className=' mt-3 text-[#ffffff] text-center lg:text-start font-medium text-xl rounded-3xl bg-[#F14D5D] py-[15px] lg:px-[40px] px-[20px] transition duration-150 ease-linear hover:bg-[#fff] hover:text-[#F14D5D]'><Link className=''  to='#'>Book Now</Link></button>
                    </div>

                    <div className="detailsRight w-full lg:w-2/3">
                    <picture>
                        <img src={imglaptop} alt="" />
                    </picture>
                    </div>
                </div>
                


                </div>

                </div>
                
            </section>
            
            
        </div>
        </ScrollTrigger>
    );
};

export default ParallaxSection;