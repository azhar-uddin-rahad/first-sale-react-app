import React from 'react';
import { FaFacebook, FaLinkedin, FaPinterest, FaPodcast, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SimpleMap from './SimpleMap';

const Contact = () => {
    return (
        <div>
            <div className='max-w-[1440px] mx-auto '>
                <div className='map_details flex gap-5 flex-col-reverse lg:flex-row justify-center '>
                    <div className='details mt-24 p-5'>
                        <h1 className='text-4xl font-bold font-secondary text-[#103178] mb-2'>How can we help you?</h1>
                        <p className='text-sm text-[#000000] mb-10'>We are at your disposal 7 days a week!</p>

                        <h2 className='text-xl text-[#000000] mb-2'>2023 – FIRSTSALE – 000</h2>
                        <p className='text-sm text-[#000000] mb-2'>Monday – Friday: 9:00-20:00</p>
                        <p className='text-sm text-[#000000] mb-2'>Saturday: 11:00 – 15:00</p>

                        <button className=' mt-5  text-[#103178]  rounded-3xl bg-[#ffffff] py-[10px] lg:px-[30px] px-[15px] transition duration-150 ease-linear border border-[#103178]  hover:bg-[#0A1831] hover:text-[#ffff]'><Link className=''  to='#'>azhar.rahad1@gmail.com</Link></button>
                        <div className='socal text-4xl mt-8 text-[#103178] '>
                            <span className='hover:text-[#4882ff] '><FaFacebook></FaFacebook></span>
                            <span  className='hover:text-[#1141a9]' ><FaLinkedin></FaLinkedin></span>
                            <span className='hover:text-[#ed4141]'><FaPinterest></FaPinterest></span>
                            <span className='hover:text-[#ed4141]'><FaYoutube></FaYoutube></span>
                            <span className='hover:text-[#4ca6ff]'><FaTwitter></FaTwitter></span>

                        </div>

                    </div>
                    <div className='w-full lg:w-4/5 bg-base-100 shadow-sm  overflow-hidden lg:overflow-visible '>
                        <SimpleMap></SimpleMap>
                    </div>

                </div>
                <div className='contact_form p-5'>
                    <h3 className='text-4xl text-[#103178] font-semibold mb-3'>Fill up the form if you have any question</h3>
                    <div className='formWraper '>
                        <div className='flex justify-between items-center'>
                        <input type="text" placeholder="Enter Your Name" className="border-2 placeholder-[#103178] bg-[#f0f2f5]  w-1/4 p-4 rounded-2xl" />
                        <input type="email" placeholder="Email" className="border-2 placeholder-[#103178] bg-[#f0f2f5]  w-1/4 p-4 rounded-2xl" />
                        <input type="text" placeholder="Phone" className="border-2 placeholder-[#103178] bg-[#f0f2f5]  w-1/4 p-4 rounded-2xl" />
                        </div>
                        <textarea className="w-full mt-5 bg-[#f0f2f5] border-2 placeholder-[#103178]  p-10 rounded-xl" placeholder="Bio"></textarea>
                        <button className=' mt-5  text-[#ffffff]  rounded-3xl bg-[#0A1831] py-[10px] lg:px-[30px] px-[15px] transition duration-150 ease-linear hover:bg-[#F14D5D] '><Link className=''  to='#'>Send Message</Link></button>

                    </div>

                </div>

            </div>
                
            
        </div>
    );
};

export default Contact;