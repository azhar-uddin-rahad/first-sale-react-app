import React from 'react';
import { FaMapMarkerAlt,FaCheckCircle, FaPhoneAlt} from "react-icons/fa";
import Loder from '../Share/Loder/Loder';



const ProductSummaryCard = ({category,setProductInfo}) => {
    const {_id,title,brand,model,image_url,published_date,author_name,author_img,location,mobile,resalePrice,originalPrice,yearsOfUse,cpuProcessor,memory,storage,operationSystem,batteryPowerSupply
    } =category;

    return (
        <div>
    <div className='my-20 max-w-[1320px] mx-auto'>
    <div className='w-full flex text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50'>
    <div className="avatar ">
    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={author_img} alt="" />
  </div>
</div>
        <div className='ml-5'>
           <div className='flex items-center '>
           <h3 className='text-2xl'>{author_name}</h3>
            <p className='text-blue-700 text-2xl'><FaCheckCircle></FaCheckCircle></p>
           </div>
           <p>{published_date}</p>
        </div>
    </div>
    <div className="card lg:card-side bg-base-100 shadow-xl">
    
  <figure><img src={image_url} alt="Album" className='ml-5'/></figure>
  <div className="card-body">
    <h2 className="card-title tex-5xl font-bold">{title}</h2>
    <h4 className='text-2xl text-fuchsia-700 fond-bold'>Resale Price: ${resalePrice}</h4>
    <h4 className='text-2xl'>Original Price: ${originalPrice}</h4>
    <div className="divider">...</div>
    <div>
    <p className='text-2xl'>Brand: {brand}</p>
    <p className='text-2xl'>Model: {model}</p>
    <p className='flex items-center text-2xl'><FaMapMarkerAlt></FaMapMarkerAlt><span className='ml-2'>Location: {location}</span></p>
    <div className='flex'>
    <p className='text-2xl flex items-center'><FaPhoneAlt></FaPhoneAlt>  <span className='ml-2'>Mobile: {mobile}</span></p>
    <p className='text-2xl'>Years of Used: {yearsOfUse}</p>
    </div>
    </div>
    <div className="flex items-center mt-4">
    
        {category?.status !== 'booked' ?
         <label
         onClick={()=>setProductInfo(category)}    
         htmlFor="bookingProductBtn" className="btn w-full btn-outline p-5 rounded-sm">Booking Now</label>
         :
         <label
         className="btn  w-full btn-disabled p-5 rounded-sm">Booking Now</label>

        }
    </div>  
  </div>
  
</div>
<div className='my-20'>
<h2 className='text-center'>SPECFICATION</h2>
<div className="overflow-x-auto border-2 border-black-200 p-5 ">
    <h2>Technical Details</h2>
  <table className="table w-full">
    
    <thead>
      <tr>  
      </tr>
    </thead>
    <tbody>

     <tr className='border-2 border-black-200'>
        <td className='border-2 border-black-200'>CPU / Processor</td>
        <td>{cpuProcessor}</td>   
     </tr>
     <tr className='border-2 border-black-200'>
        <td className='border-2 border-black-200'>Memory</td>
        <td>{memory}</td>   
     </tr>
     <tr className='border-2 border-black-200'>
        <td className='border-2 border-black-200'>Storage</td>
        <td>{storage}</td>   
     </tr>
     <tr className='border-2 border-black-200'>
        <td className='border-2 border-black-200'>Operation System</td>
        <td>{operationSystem}</td>   
     </tr>
     <tr className='border-2 border-black-200'>
        <td className='border-2 border-black-200'>Battery / Power Supply</td>
        <td>{batteryPowerSupply}</td>   
     </tr>
      
    </tbody>
  </table>
</div>
</div>

</div>
            
        </div>
    );
};

export default ProductSummaryCard;