import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    const [newArrivalsProducts,setNewArrivalsProduct]=useState();
    const [filterItem,setfilterItem]=useState();

    useEffect(()=>{
        fetch('newArrivals.json')
        .then(res=>res.json()) 
        .then(data=>setNewArrivalsProduct(data))
    },[])
    useEffect(()=>{
        fetch('newArrivals.json')
        .then(res=>res.json()) 
        .then(data=>setfilterItem(data))
    },[])

    const filterProduct=(category)=>{
        const updateProduct =newArrivalsProducts.filter((curElement)=>{
           return curElement?.category === category 
            
            
        })

        setfilterItem(updateProduct) 
       
    }
    console.log(filterItem);
   

    return (
        <div className='mt-[100px] mb-[400px] lg:mb-[100px]'>
            <div className='max-w-[1440px] mx-auto'>
                <div className="headerSection flex justify-between">
                    <div className="headerLeft w-1/4 lg:w-2/3">
                        <h3 className='text-[#103178] text-xl  lg:text-4xl font-bold'>New Arrivals</h3>
                    </div>
                    <div className="headerRight w-3/4 lg:w-1/3">
                    <ul className='flex justify-between text-sm text-[#000]'>
                            <button onClick={()=> setfilterItem(newArrivalsProducts)} className="text-[#000000] text-xl font-bold">All</button>
                            <button  onClick={()=>filterProduct('onsell')} className="text-[#000000] text-xl font-bold">On Sell</button>
                            <button onClick={()=>filterProduct('hotsell')} className="text-[#000000] text-xl font-bold">Hot Sell</button>
                            <button onClick={()=>filterProduct('premium')} className="text-[#000000] text-xl font-bold">premium</button>
                            <button onClick={()=>filterProduct('trend')} className="text-[#000000] text-xl font-bold">Trend</button>
                        </ul>
                    </div>
                </div>
                <div className='prodictCard grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[2%] mb-5 mt-20 p-5'>
                {filterItem?.map(newProduct => 
                <div key={newProduct._id} className="flex justify-between items-center flex-row bg-base-100 p-1 shadow-xl">
               <div className='w-[55%] '>
               <img src={newProduct?.product_img} className="w-full h-full " alt="Movie"/>
               </div>
                <div className="w-[44%]">
                  <h2 className="text-[16px] font-medium text-[#000000]">{newProduct?.prodcit_name}</h2>
                  <p className='text-[12px] mt-5 text-[#666666]'>{newProduct?.product_details}</p>
                 
                    <div className=''>
                        <div className='my-2'>
                            <p className='font-medium text-sm text-[#000000]'>Price: ${newProduct?.price}</p>
                            
                        </div>
                    <div className="flex text-[#F14D5D]">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                     </div>
                    </div>
                <div className="">
                  <button className=' mt-5  text-[#ffffff]  rounded-3xl bg-[#F14D5D] py-[10px] lg:px-[30px] px-[15px] transition duration-150 ease-linear hover:bg-[#0A1831]'><Link className=''  to='#'>Buy Now</Link></button>
                  </div>
                </div>
              </div>
                
                
                
                )

                }

                </div>
            </div>
        </div>
    );
};

export default NewArrivals;