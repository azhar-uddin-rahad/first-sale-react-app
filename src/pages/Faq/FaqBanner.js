import React from 'react';
import bannerImage from '../../assits/faq.jpg'

const FaqBanner = () => {
    return (
        <div>
            <div style={{backgroundImage:`url(${bannerImage})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",paddingTop:"100px",paddingBottom:"100px"}}>
                <h3 className='text-center text-3xl text-[#ffffff] font-bold'>FREQUENTLY</h3>
                <h1 className='text-center text-5xl text-[#ffffff] font-bold'>Asked Questions</h1>

            </div>
            
        </div>
    );
};

export default FaqBanner;