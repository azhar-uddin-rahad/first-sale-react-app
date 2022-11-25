import React from 'react';
import bannerImg from '../../../assits/bannerImg.jpg'

const TopBanner = () => {
    return (
        <div>
    <div className="hero mb-5 min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse">
   <img className=" w-1/2 rounded-lg shadow-2xl" alt='' />
    <div className='lg:w-1/2' >
      <div className=''>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default TopBanner;