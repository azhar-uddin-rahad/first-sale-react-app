import React from 'react';
import bannerImg from '../../../assits/extra section/create-img.png';
import icon1 from '../../../assits/extra section/create-icon1.png'
import icon2 from '../../../assits/extra section/create-icon2.png'
import icon3 from '../../../assits/extra section/create-icon3.png'
import icon4 from '../../../assits/extra section/create-icon4.png'

const CreateNtfs = () => {
    return (
        <div className='max-w-[1440px] mx-auto mt-[100px]'>
        <div className="p-5">
        <h1 className="text-5xl font-bold text-center text-[#103178]">
           Create And Sell Your <span className='text-[#F14D5D]'>LAPTOP's</span></h1>
            <div className='createSellWrap flex flex-col lg:flex-row  justify-center items-center gap-[5%] mt-7'>
                <div className='createSellLeftc w-full lg:w-[47%] items-center'>
                    <picture>
                        <img src={bannerImg} alt="img" />
                    </picture>
                </div>
                <div className='createSellRight w-full lg:w-[48%] grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                  <div className='mb-3'>
                  <picture>
                  <img src={icon1} alt="icon" />
                  </picture>
                  </div>
                  <h3 className='text-2xl mt-2 text-[#000000] hover:text-[#F14D5D] line'>Set Up Your Wallet</h3>
                  <p className='text-[16px] leading-6 pr-24 text-[#666666]'>connect wallet by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
                </div>
                <div>
                  <div className='mb-3'>
                  <picture>
                  <img src={icon2} alt="icon" />
                  </picture>
                  </div>
                  <h3 className='text-2xl mt-2 text-[#000000] hover:text-[#F14D5D] line'>Create Your Collection</h3>
                  <p className='text-[16px] leading-6 pr-24 text-[#666666]'>Click Create and Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                </div>
                <div>
                  <div className='mb-3'>
                  <picture>
                  <img src={icon3} alt="icon" />
                  </picture>
                  </div>
                  <h3 className='text-2xl mt-2 text-[#000000] hover:text-[#F14D5D] line'>Add Your NFTs</h3>
                  <p className='text-[16px] leading-6 pr-24 text-[#666666]'>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs</p>
                </div>
                <div>
                  <div className='mb-3'>
                  <picture>
                  <img src={icon4} alt="icon" />
                  </picture>
                  </div>
                  <h3 className='text-2xl mt-2 text-[#000000] hover:text-[#F14D5D] line'>List Them For Sale</h3>
                  <p className='text-[16px] leading-6 pr-24 text-[#666666]'>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs</p>
                </div>

                </div>

            </div>
        </div>
            
        </div>
    );
};

export default CreateNtfs;