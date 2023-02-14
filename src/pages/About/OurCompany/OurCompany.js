import React, { useState } from 'react';
import { FaCalendarCheck, FaHandshake, FaUserAlt, FaWeightHanging } from "react-icons/fa";
import { BsFillTrophyFill } from "react-icons/bs";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
const OurCompany = () => {
    const [counterOn,setCounterOn]=useState(false);

    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className='max-w-[1440px] mx-auto p-5'>
            <div className="ourCompanyWraper flex flex-col lg:flex-row  gap-[5%] items-center">
                <div className='ourCompanyLeft w-full lg:w-[30]'>
                    <picture>
                        <img src="https://the7.io/wpbakery-starter/wp-content/uploads/sites/61/2020/01/bm015-1000x1000.jpg" alt="" />
                    </picture>

                </div>
                <div className='ourCompanyRright w-full mt-5 lg:mt-0 lg:w-[60%]'>
                    <h3 className='text-3xl font-bold text-[#000000] mb-5'>Our Company In Numbers</h3>
                    <p className='text-[16px] text-[#7a7a7a] leading-[30px]   '>Lorem dolor sit glavrida amet. Vestibulum semper sed magna arcu eget nisi mattis lacinia sit sem pretium congue. Fusce eget arcu eget nisi mattis lacinia sit amet at sem. Quisque ornare lorem ipsum pharetra.</p>
                    <div className='grid grid-cols-3 gap-5 mt-10'>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                           <span className='text-5xl text-[#8D99FF]'> <FaCalendarCheck ></FaCalendarCheck></span>
                            <h3 className='text-4xl font-bold leading-[44px] text-[#000000]'>{counterOn && <CountUp start={0} end={50} duration={3} delay={0}></CountUp>}  +</h3>
                            <p className='text-[16px] font-medium leading-[20px] text-[#000000] text-center'>Returning customers</p>
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <span className='text-5xl text-[#8D99FF]'><FaUserAlt></FaUserAlt></span>
                            <h3 className='text-4xl font-bold leading-[44px] text-[#000000]'>{counterOn && <CountUp start={0} end={40} duration={3} delay={0}> </CountUp>}</h3>
                            <p className='text-[16px] font-medium leading-[20px] text-[#000000]'>Top professionals</p>
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <span className='text-5xl text-[#8D99FF]'><FaCalendarCheck></FaCalendarCheck></span>
                            <h3 className='text-4xl font-bold leading-[44px] text-[#000000]'>{counterOn && <CountUp start={0} end={24} duration={3} delay={0}> </CountUp>}</h3>
                            <p className='text-[16px] font-medium leading-[20px] text-[#000000]'>Years in business</p>
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <span className='text-5xl text-[#8D99FF]'><FaWeightHanging></FaWeightHanging></span>
                            <h3 className='text-4xl font-bold leading-[44px] text-[#000000]'>{counterOn && <CountUp start={0} end={100} duration={3} delay={0}> </CountUp>} +</h3>
                            <p className='text-[16px] font-medium leading-[20px] text-[#000000]'>Projects done</p>
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <span className='text-5xl text-[#8D99FF]'><BsFillTrophyFill></BsFillTrophyFill></span>
                            <h3 className='text-4xl font-bold leading-[44px] text-[#000000]'>{counterOn && <CountUp start={0} end={15} duration={3} delay={0}> </CountUp>} </h3>
                            <p className='text-[16px] font-medium leading-[20px] text-[#000000]'>Industry awards</p>
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <span className='text-5xl text-[#8D99FF]'><FaHandshake></FaHandshake></span>
                            <h3 className='text-4xl font-bold leading-[44px] text-[#000000]'>{counterOn && <CountUp start={0} end={100} duration={3} delay={0}></CountUp>} </h3>
                            <p className='text-[16px] font-medium leading-[20px] text-[#000000]'>Industry awards</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </ScrollTrigger>
    );
};

export default OurCompany;