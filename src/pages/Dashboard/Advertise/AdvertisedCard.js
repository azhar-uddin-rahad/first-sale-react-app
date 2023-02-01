import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AdvertiseCard = ({ product,  setProductInfo }) => {

    const {_id,title,brand,model,image_url,published_date,author_name,author_img,location,mobile,resalePrice,originalPrice,yearsOfUse,cpuProcessor,memory,storage,operationSystem,batteryPowerSupply,status,email,report} = product;



    const { data: dbUserNew = [], /* refetch */ } = useQuery({
        queryKey: ['userDB', email],
        queryFn: async () => {
            const res = await fetch(`https://first-sale-server.vercel.app/userEmail?email=${email}`)
            const data = await res.json()
            // refetch()
            return data;
        }
    })
    // console.log(dbUserNew);

    // const userEmailDB = (dbUserNew[0].email)
    // console.log(dbUserNew[0])


    const handleReport = () => {

        if (window.confirm("Are you want to report?")) {

            fetch(`https://first-sale-server.vercel.app/productReport/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success(`${title}, is reported`)
                })
        }


    }


    return (
        <div>

            <div className="card w-96 bg-base-100 text-[#000000] shadow-xl">
                <figure><img className='h-72 hover:cursor-zoom-in ' src={image_url} alt="bikes" /></figure>
                <div className="card-body">
                    <h2 className="card-title fond-bold">{title?.length > 60 ? <>{title.slice(0,60) + '....'}</> : title }</h2>
                    <h2 className="text-xl font-bold">Configuration:</h2>

                    <h4 className="text-md font-bold mb-3">Price: ${resalePrice}</h4>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='grid grid-cols-1 gap-2'>
                            <h4 className="text-sm font-bold">Year of Use: {yearsOfUse}</h4>
                            


                        </div>

                        <div className='grid grid-cols-1 gap-2'>
                            <h4 className="text-sm font-bold">Post Date: {published_date}</h4>
                        </div>
                    </div>

                    {dbUserNew[0]?.verifySeller !== 'verifySeller' ?
                        <h4 className="text-sm font-bold ">Seller Name: {product.author_name}</h4>
                        :
                        <h4 className="text-sm font-bold mt-3">Seller Name: {product.author_name} <span className='bg-green-700 px-2 py-1 rounded-full text-white'>&#x2714;</span>	</h4>
                    }

                    {status !== 'booked' ?
                        <label htmlFor="bookingProductBtn"
                            className="text-[#ffffff] cursor-pointer rounded text-center hover:transition duration-150 ease-linear hover:bg-[#8D99FF] p-3 bg-[#F14D5D]  mt-3 hover:px-10"
                            onClick={() => setProductInfo(product)}>Book Now
                        </label>
                        :
                        <label
                            className="text-[#F14D5D] font-bold  rounded text-center  p-3 opacity-80 cursor-not-allowed  mt-2 bg-[#8D99FF] btn-disabled "
                        >Already Booked
                        </label>
                    }

                    {report !== 'reported' ?
                        <label className="text-[#ffffff] rounded text-center hover:transition duration-150 cursor-pointer ease-linear hover:bg-[#8D99FF] p-3 bg-[#0A1831] mt-2 "
                            onClick={handleReport}>Report To Admin
                        </label>
                        :
                        <label
                            className="text-[#F14D5D] font-bold  rounded text-center  p-3 bg-gray-400 opacity-80 cursor-not-allowed  mt-2"
                        >Report Successfully
                        </label>
                    }
                </div>
            </div>

        </div>
    );
};

export default AdvertiseCard;