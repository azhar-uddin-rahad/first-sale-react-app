import React from 'react';

const ProductSummaryCard = ({category}) => {
    const {_id,title,condition,brand,model,image_url,author,location,mobile,resalePrice,originalPrice,yearsOfUse,cpuProcessor,memory,storage,operationSystem,batteryPowerSupply
    } =category;
    return (
    <div className='my-20 max-w-[1320px] mx-auto'>
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Album" className='ml-5'/></figure>
  <div className="card-body">
    <h2 className="card-title tex-4xl">{title}</h2>
    <h4 className='text-2xl text-fuchsia-700 fond-bold'>Resale Price: {resalePrice}</h4>
    <h4>Original Price: {originalPrice}</h4>
    <div className="divider">...</div>
    <div>
    <p>Brand: {brand}</p>
    <p>Model: {model}</p>
     <p>Location: {location}</p>
    <p>Mobile: {mobile}</p>
    </div>
    <div className="flex items-center mt-4">
    <button className="btn w-full btn-outline p-5 rounded-sm">Booking</button>

    </div> 
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ProductSummaryCard;