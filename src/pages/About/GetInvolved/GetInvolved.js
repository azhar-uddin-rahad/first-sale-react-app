import React from 'react';
import { FaCommentAlt, FaFacebook, FaFacebookF, FaGoogle, FaGooglePlus, FaInstagram, FaLinkedinIn, FaPlaneDeparture, FaRegCheckCircle, FaTwitter } from 'react-icons/fa';
import { IoHeartCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const GetInvolved = () => {
    return (
        <div className='my-[100px]'>
            <div className='max-w-[1440px] mx-auto'>
                <h1 className='text-4xl text-[#000000] mb-20 font-bold'>GetInvolved</h1>
                <div className='flex items-center justify-between text-center'>
                    <div>
                      <span className='flex justify-center items-center text-[#8D99FF] text-5xl mb-5'> <FaPlaneDeparture></FaPlaneDeparture></span>
                        <h4 className='text-2xl font-bold text-[#000000]'>Join Our Community</h4>
                        <div className=' mt-5 rounded-full w-80 bg-[#F14D5D] py-[10px] lg:px-[30px] px-[15px] flex justify-between'> 

                        <div className=' bg-white text-[#F14D5D] hover:bg-[#8D99FF]  p-3 rounded-[50%] transition duration-150 ease-linear hover:text-[#ffffff] text-xl'><FaGoogle></FaGoogle></div>
                        <div className=' bg-white text-[#F14D5D] hover:bg-[#8D99FF]  p-3 rounded-[50%] transition duration-150 ease-linear hover:text-[#ffffff] text-xl'><FaFacebookF></FaFacebookF></div>               
                         <div className=' bg-white text-[#F14D5D] hover:bg-[#8D99FF]  p-3 rounded-[50%] transition duration-150 ease-linear hover:text-[#ffffff] text-xl'><FaInstagram></FaInstagram></div>                
                         <div className=' bg-white text-[#F14D5D] hover:bg-[#8D99FF]  p-3 rounded-[50%] transition duration-150 ease-linear hover:text-[#ffffff] text-xl'><FaTwitter></FaTwitter>
                         </div>
                        <div className=' bg-white text-[#F14D5D] hover:bg-[#8D99FF]  p-3 rounded-[50%] transition duration-150 ease-linear hover:text-[#ffffff] text-xl'><FaLinkedinIn></FaLinkedinIn ></div>
                        </div>
                    </div>
                    <div>
                        <span className='flex justify-center items-center text-[#8D99FF] text-5xl mb-5'><FaRegCheckCircle></FaRegCheckCircle></span>
                        <h4 className='text-2xl font-bold text-[#000000]'>Become A Creator</h4>
                        <button className=' mt-5  text-[#ffffff]  rounded-3xl bg-[#F14D5D] py-[20px] lg:px-[30px] px-[15px] transition duration-150 ease-linear'><Link className=''  to='#'>Register</Link></button>

                    </div>
                    <div>
                        <span className='flex justify-center items-center text-[#8D99FF] text-5xl mb-5'><IoHeartCircleOutline></IoHeartCircleOutline></span>
                        <h4 className='text-2xl font-bold text-[#000000]'>Become A Charity Partner</h4>
                        <button className=' mt-5  text-[#ffffff]  rounded-3xl bg-[#F14D5D] py-[20px] lg:px-[30px] px-[15px] transition duration-150 ease-linear'><Link className=''  to='#'>Express Interest</Link></button>

                    </div>

                    <div>
                        <span className='flex justify-center items-center text-[#8D99FF] text-5xl mb-5'><FaCommentAlt></FaCommentAlt></span>
                        <h4 className='text-2xl font-bold text-[#000000]'>Become A Charity Partner</h4>
                        <button className=' mt-5  text-[#ffffff]  rounded-3xl bg-[#F14D5D] py-[20px] lg:px-[30px] px-[15px] transition duration-150 ease-linear'><Link className=''  to='#'>Contact Now</Link></button>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default GetInvolved;