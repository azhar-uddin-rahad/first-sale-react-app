import React from 'react';
import { FaPlaneDeparture, FaRegCheckCircle } from 'react-icons/fa';
import {IoHeartCircleOutline} from 'react-icons/io'
import { Link } from 'react-router-dom';

const GetInvolved = () => {
    return (
        <div>
            <div>
                <h1>GetInvolved</h1>
                <div className='InvolvedWrap'>
                    <div>
                        <span><FaPlaneDeparture></FaPlaneDeparture></span>
                        <h4>Join Our Community</h4>
                        
                    </div>
                    <div>
                        <span><FaRegCheckCircle></FaRegCheckCircle></span>
                        <h4>Become A Creator</h4>
                        <button className=' mt-5  text-[#ffffff]  rounded-3xl bg-[#0A1831] py-[10px] lg:px-[30px] px-[15px] transition duration-150 ease-linear hover:bg-[#F14D5D] '><Link className=''  to='#'>Send Message</Link></button>

                    </div>
                    <div>
                        <span><IoHeartCircleOutline></IoHeartCircleOutline></span>
                        <h4>Become A Charity Partner</h4>
                        <button className=' mt-5  text-[#ffffff]  rounded-3xl bg-[#0A1831] py-[10px] lg:px-[30px] px-[15px] transition duration-150 ease-linear hover:bg-[#F14D5D] '><Link className=''  to='#'>Send Message</Link></button>

                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default GetInvolved;