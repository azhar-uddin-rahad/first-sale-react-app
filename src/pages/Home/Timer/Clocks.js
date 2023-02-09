import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import timeImg from '../../../assits/Time.png'

            const Clocks = ({timerDays,timerHours,timerMinutes,timerSeconds}) => {
    return (
        <Fragment>
            <section id='offerTime' className='bg-[#E2E8F0]  mt-[100px] pb-[100px] '>
              <div className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex lg:flex-row justify-center items-center'>
              <div className='lg:w-1/2 w-full lg:mr-14'>
                  <img src={timeImg} className="w-full" alt="" />
                </div>
                <div className="lg:w-1/2 w-full text-center lg:text-start pt-20 pb-20">
                  <p className='text-sm mb-3 font-secondary text-[#F14D5D] font-semibold'>Limited Time Only</p>
                  <h4 className='text-4xl font-semibold mb-3 font-secondary text-[#103178]'>60% Discount</h4>
                  <h2 className='text-5xl font-bold mb-8 font-secondary text-[#103178]'>Sportswear Products</h2>
                <div className='timeZoon flex justify-center lg:justify-start'>
                    <div className="day mr-10 text-center text-[#000000] ">
                    <p  className='text-6xl font-medium font-rear mb-2'>{timerDays}</p>
                    <small className='text-sm font-rear'>Days</small>
                    </div>
                    <div className="day mr-10 text-center text-[#000000]">
                    <p className='text-6xl font-medium font-rear mb-2'>{timerHours}</p>
                    <small className='text-sm  font-rear'>Hours</small>
                    </div>
                    <div className="day mr-10 text-center text-[#000000] ">
                    <p className='text-6xl font-medium mb-2 font-rear'>{timerMinutes}</p>
                    <small className='text-sm  font-rear'>Minutes</small>
                    </div>
                    <div className="day mr-10  text-center text-[#000000] ">
                    <p className='text-6xl font-medium font-rear mb-2'>{timerSeconds}</p>
                    <small className='text-sm font-rear'>Seconds</small>
                    </div>
                     
                </div>

                <button className='mr-4 mt-3 text-[#ffffff] rounded-3xl bg-[#F14D5D] py-[15px] lg:px-[40px] px-[20px] transition duration-150 ease-linear hover:bg-[#0A1831]'><Link className=''  to='#'>Get Laptops</Link></button>
                </div>



              </div>
              

            </section>

      </Fragment>
    );
  };
  
  Clocks.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
  };
  
export default Clocks;