import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCalendar, FaChevronRight, FaComment, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './Blog.css'

const Blog = () => {

    //const {count,blogPostDatabase}= useLoaderData();
    const [blogPostDatabase,setBlogPostDatabase]=useState();
    const [count,setCount]= useState(0);
    const [currentPage,setCurrentPage]=useState(0);
    const [size,setSize]= useState(5);
   
    useEffect(()=>{
        const URL=`http://localhost:5000/blogs?currentPage=${currentPage}&size=${size}`
        fetch(URL)
        .then(res=>res.json())
        .then(data => {
            setCount(data.count)
            setBlogPostDatabase(data.blogPostDatabase)
        })
    },[currentPage,size])




    const pages = Math.ceil(count /size);

 
    
    return (
        <div>
           <div className='max-w-[1440px] mx-auto gap-[5%] mt-20'>
            
            <div className='flex gap-[5%] mb-5 '>
                <div className='blogLeft w-[70%] '>
                  {blogPostDatabase?.map(blogPost => <div key={blogPost?._id}>
                    <div className='flex gap-5 pb-5'>
                    <div className="blogImg">
                    <div class="content-overlay"></div>
                        <picture>
                            <img src={blogPost?.postImg} className='w-full h-full' alt="" />
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
                <div className='categoresDetails border p-5 border-[#7a7a7a]'>
                    <h3 className='text-2xl text-[#000000] font-bold capitalize mb-5'>CATEGORIES</h3>
                    <ul>
                        <li><Link to="#" className='flex text-xl gap-5 items-center hover:text-[#F14D5D]  transition duration-200 ease-out text-[#000000]'><FaChevronRight></FaChevronRight> Apple</Link></li>
                        <li><Link to="#" className='flex text-xl gap-5 items-center hover:text-[#F14D5D]  transition duration-200 ease-out text-[#000000]'><FaChevronRight></FaChevronRight>Msi</Link></li>
                        <li><Link to="#" className='flex text-xl gap-5 items-center hover:text-[#F14D5D]  transition duration-200 ease-out text-[#000000]'><FaChevronRight></FaChevronRight> HP</Link></li>
                    </ul>
                </div>
                <div className='recentPost border p-5 border-[#7a7a7a]  mt-5'>
                    <h1 className='text-2xl text-[#000000] font-bold  mb-5'>Recent Post</h1>
                    {blogPostDatabase?.map(blogPost =>{
                        if(blogPost.postReview ===2){
                            return(
                                <div>
                                    <div className='blogsImage'>
                                        <picture>
                                            <img src={blogPost?.postImg} alt="" />
                                        </picture>
                                    </div>
                                    <div className='details '>
                                    <p className='flex  items-center gap-2 text-sm text-[#7a7a7a]'><span className='text-[#F14D5D]'><FaCalendar></FaCalendar></span>{blogPost?.postDate}</p>

                                        <h1 className='text-lg font-medium text-[#000000] leading-8'>{blogPost?.postTitle}</h1>

                                    </div>
                                </div>
                            )
                        }
                    }
     
                )}
                   

                </div>

                </div>
            </div>
           {/*  className={currentPage ? "visible" : "invisible" } */}
                <div className="pagination text-center">
                       {/*  <p>currently selected Page:{currentPage}</p> */}
                       <button onClick={()=>currentPage > 0 ? setCurrentPage(currentPage-1):setCurrentPage(0)} className={currentPage===0 ? "invisible" : "visible"}><span className='flex gap-2 items-center justify-center'><FaArrowLeft></FaArrowLeft>PREV</span></button>
                    {[...Array(pages).keys()].map(indexNumber => <button key={indexNumber}
                    className={ currentPage === indexNumber && "selectedPage"}
                    onClick={()=>setCurrentPage(indexNumber)}
                    > {indexNumber}</button>)

                    }

                    <button onClick={()=>currentPage >= 0 && setCurrentPage(currentPage+1)}><span className='flex gap-2 items-center justify-center'>Next<FaArrowRight></FaArrowRight></span></button>
                    <span> <span>post:</span><select onChange={event =>setSize(event.target.value)}>
                        <option value="5" selected>5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                    </span>
                </div>
                

            </div>
           </div>
            
    );
};

export default Blog;