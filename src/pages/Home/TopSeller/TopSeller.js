import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import seller1 from '../../../assits/topSeller/top-sellers1.jpg';
import seller2 from '../../../assits/topSeller/top-sellers2.jpg';
import seller3 from '../../../assits/topSeller/top-sellers3.jpg';
import seller4 from '../../../assits/topSeller/top-sellers4.jpg';
import seller5 from '../../../assits/topSeller/top-sellers5.jpg';
import seller6 from '../../../assits/topSeller/top-sellers6.jpg';
import seller7 from '../../../assits/topSeller/top-sellers7.jpg';
import seller8 from '../../../assits/topSeller/top-sellers8.jpg';
import seller9 from '../../../assits/topSeller/top-sellers9.jpg';

const TopSeller = () => {
    const sellers=[
        {
            img:seller1,
            sellerName: "Benjamin Doe",
            time : "129.301 ETH"

        },
        {
            img:seller2,
            sellerName: "Evelyn Adison",
            time : "130.201 ETH"

        },
        {
            img:seller3,
            sellerName: "Aria July",
            time : "120.101 ETH"

        },
        {
            img:seller4,
            sellerName: "Sebastian Farnil",
            time : "127.301 ETH"

        },
        {
            img:seller5,
            sellerName: "Henry Martina",
            time : "128.301 ETH"

        },
        {
            img:seller6,
            sellerName: "Daniel Adams",
            time : "130.301 ETH"

        },
        {
            img:seller7,
            sellerName: "Evelyn Adison",
            time : "130.201 ETH"

        },
        {
            img:seller8,
            sellerName: "Aria July",
            time : "120.101 ETH"

        },
        {
            img:seller9,
            sellerName: "Sebastian Farnil",
            time : "127.301 ETH"

        },
        {
            img:seller5,
            sellerName: "Henry Martina",
            time : "128.301 ETH"

        },
        {
            img:seller6,
            sellerName: "Daniel Adams",
            time : "130.301 ETH"

        },
        {
            img:seller6,
            sellerName: "Daniel Adams",
            time : "130.301 ETH"

        }

    ]

    return (
        <div className='max-w-[1440px] mx-auto p-5'>
            <div className="headerSection flex justify-between items-center mb-5">
                    <div className="headerLeft w-1/4 lg:w-2/3">
                        <h3 className='text-[#103178] text-xl lg:text-4xl font-bold'>Top Sellers</h3>
                    </div>
                    <div className="headerRight w-3/4 lg:w-1/3">
                    <ul className='text-sm text-right text-[#000]'>
                    <button className='  text-[#ffffff]  rounded-md bg-[#F14D5D] py-[10px] lg:px-[30px] px-[15px] transition duration-150 ease-linear hover:bg-[#0A1831]'><Link className=''  to='#'>Explore More</Link></button>
                        </ul>
                    </div>
                </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
            {sellers?.map(seller => <div className='flex gap-5 items-center bg-base-100 cursor-pointer rounded-2xl h-24'>
                <div className='relative'>
                <span className='absolute -right-3 text-[#8D99FF] bottom-1 text-2xl bg-white rounded-xl overflow-hidden'><AiFillCheckCircle></AiFillCheckCircle></span>
                    <div >
                    <img className='rounded-2xl' src={seller.img} alt="" />
                        
                    </div>
                  
                </div>
                <div>
                    <h3 className='text-2xl mb-2 text-[#000000] hover:text-[#F14D5D]'>{seller.sellerName}</h3>
                    <p className='text-[#666666] text-sm'>{seller.time}</p>
                </div>
            </div>)

            }
            </div>
            
        </div>
    );
};

export default TopSeller;