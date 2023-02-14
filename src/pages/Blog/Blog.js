import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCalendar, FaChevronRight, FaComment, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = () => {

    const [blogPosts,setBlogPost]=useState(null);
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data => setBlogPost(data))
    },[])
    
    return (
        <div>
           <div className='max-w-[1440px] mx-auto gap-[5%] mt-20'>
            
            <div className='flex gap-[5%] mb-5 '>
                <div className='blogLeft w-[70%] '>
                  {blogPosts?.map(blogPost => <div key={blogPost?.id}>
                    <div className='flex gap-5 pb-5'>
                    <div className="blogImg">
                    <div class="content-overlay"></div>
                        <picture>
                            <img src={blogPost?.postImg} alt="" />
                        </picture>
                        
                    </div>
                    <div className="blogDetails">
                        <div className='blogIcon flex gap-20 items-center text-sm'>
                            <p className='flex justify-center items-center gap-2 text-sm text-[#7a7a7a]'><span className='text-[#F14D5D]'><FaUser></FaUser></span>{blogPost?.authorName}</p>
                            <p className='flex justify-center items-center gap-2 text-sm text-[#7a7a7a]'><span className='text-[#F14D5D]'><FaCalendar></FaCalendar></span>{blogPost?.postDate}</p>
                            <p className='flex justify-center items-center gap-2 text-sm text-[#7a7a7a]'><span className='text-[#F14D5D]'><FaComment></FaComment></span>{blogPost?.postReview}</p>
                            <p className='text-[#F14D5D] text-lg capitalize'>{blogPost?.costCategory}</p>
                        </div>
                        <div className="blogInfo mt-5">
                            <h1 className='text-2xl font-bold text-[#000000] leading-10 hover:text-[#F14D5D]  transition duration-200 ease-out cursor-pointer '>Ultra-Thin Laptop Rentals and Rivalry</h1>
                            <p className='text-[16px] text-[#7a7a7a] font-medium leading-7 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan faucibus ipsum id iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan faucibus ipsum id iaculis faucibus isue.</p>

                            <Link className='flex justify-start gap-3 items-center hover:text-[#F14D5D]  transition duration-200 ease-out cursor-pointer '>Read More <FaArrowRight></FaArrowRight></Link>
                        
                        </div>

                    </div>
                   </div>
                   <div className='border-b-[2px] border-dashed pb-5 opacity-25 border-[#7a7a7a] mb-5'>
                    </div>
                  </div>)

                  }
                </div>
                <div className='w-[25%]'>
                <div>
                    <h3 className='text-2xl text-[#000000] font-boldtext-[#000000] mb-5'>CATEGORIES</h3>
                    <ul>
                        <li><Link to="#" className='flex text-xl gap-5 items-center hover:text-[#F14D5D]  transition duration-200 ease-out text-[#000000]'><FaChevronRight></FaChevronRight> Apple</Link></li>
                        <li><Link to="#" className='flex text-xl gap-5 items-center hover:text-[#F14D5D]  transition duration-200 ease-out text-[#000000]'><FaChevronRight></FaChevronRight>Msi</Link></li>
                        <li><Link to="#" className='flex text-xl gap-5 items-center hover:text-[#F14D5D]  transition duration-200 ease-out text-[#000000]'><FaChevronRight></FaChevronRight> HP</Link></li>
                    </ul>
                </div>

                </div>
            </div>
            </div>
           </div>
            
    );
};

export default Blog;