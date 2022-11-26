import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const CategoryOPtion = () => {
  const {data:categoryData=[],refetch,isLoading} =useQuery({
    queryKey:['category'],
    queryFn: async () =>{
        const res=await fetch(`http://localhost:5000/brands`);
        const data=await res.json();

        return data
    }
   
}) 
  
    
       
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-4'>
           {
             categoryData.map(Category => <Link to={`category/${Category.brand_id}`}  key={Category.brand_id}>
             <div className="card w-96 h-96 bg-base-100 hover:bg-gradient-to-r from-fuchsia-400 to-fuchsia-300	hover:text-white shadow-xl">
             <figure className="px-10 pt-10">
               <img src={Category.img} alt="Shoes" className="rounded-xl w-30 h-20" />
             </figure>
             <div className="card-body items-center text-center">
               <h2 className="card-title">{Category.brand_name}</h2>
               <p>{Category.brand_details}</p>
               <div className="card-actions">
                
               </div>
             </div>
           </div>
             
             
             
             </Link>
           )
           } 
        </div>
    );
};

export default CategoryOPtion;