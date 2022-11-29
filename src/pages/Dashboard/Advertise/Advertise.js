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
            const res = await fetch('http://localhost:5000/bookingStatus?status=advertised')
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
        <div>
            <h2 className='text-red-700 text-center text-5xl font-bold mt-16 mb-10'>Advertisement </h2>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
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