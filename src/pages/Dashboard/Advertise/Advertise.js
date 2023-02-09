import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loder from '../../Share/Loder/Loder';

import AdvertiseCard from './AdvertisedCard';
import AdvertiseModal from './AdvertiseModal';

const Advertise = () => {



    const [productInfo, setProductInfo] = useState(null)


    // const [bikes, setBikes] = useState(false)
    // console.log(bikes)

    const [loading, setLoading] = useState(true)




    const { data: bookingProduct = [], /* refetch */ } = useQuery({
        queryKey: ['bookingProducts'],
        queryFn: async () => {
            const res = await fetch('https://first-sale-server.vercel.app/bookingStatus?status=advertised')
            const data = await res.json()
            setLoading(false)

            // setBikes(true)
            return data;
        }
    })
    // console.log(bikesData);



    if (bookingProduct.length === 0) {
        return <p></p>
    }

    if (loading) {
        return <div className='mt-20'><Loder></Loder></div>
    }



    return (
        <div className='max-w-[1440px] mx-auto'>
            <h2 className='text-center text-5xl font-bold mt-16 mb-2 text-[#103178]'>Advertisement Products</h2>
            <p className="text-2xl mb-10 font-bold text-center text-[#000000]">
            Seller can advertise her product on her account dashboard
        </p>

            <div className='grid justify-center items-center lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    bookingProduct.map(product => <AdvertiseCard
                        key={product._id}
                        product={product}
                        
                        setProductInfo={setProductInfo}
                    ></AdvertiseCard>
                    )
                }
            </div>


            {productInfo &&
                <AdvertiseModal
                productInfo={productInfo}
                setProductInfo={setProductInfo}

                    setLoading={setLoading}
                
                ></AdvertiseModal>

            }


        </div>
    );
};


export default Advertise;