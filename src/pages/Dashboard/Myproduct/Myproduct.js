import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contex/AuthProvider/AuthProvider';

const Myproduct = () => {
    const { user } = useContext(AuthContext);

    

  const url = `https://first-sale-server.vercel.app/myproduct?email=${user?.email}`;

  const { data: bookingproducts = [],refetch } = useQuery({
      queryKey: ['bookingproducts', user?.email],
      queryFn: async () => {
          const res = await fetch(url,{
            headers: {
             authorization: `bearer ${localStorage.getItem('accessToken')}` 
 }});
          const data = await res.json();
          return data;
      }
  })

const handleAdvertise=id =>{
  fetch(`http://localhost:5000/myproductAdvertise/${id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify()
})
    .then(res => res.json())
    .then(data => {
        if (data.acknowledged) {
            refetch()
            toast.success('Add Advertise Successfully!!')
        }
        else {
            toast.error(data.message)
        }
    })
}





  const handleDelete= id => {
    const proceed = window.confirm("Are you Delete this Items");
    console.log(id);
    if(proceed){
        fetch(`http://localhost:5000/myproduct/${id}`,{
            method: 'DELETE',
         headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}` 

         }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted successFully');

                refetch()
            }
        })
    }
}


    return (
        <div>
        <h1 className="text-2xl">My orders</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Sales status</th>
                <th>Advertise</th>
                <th>Delete</th>
               
              </tr>
            </thead>
            <tbody>
            {bookingproducts?.length &&
  
                              bookingproducts.map((bookingproduct, i) => <tr  key={bookingproduct._id}>
                                  <th>{i+1}</th>
                                <td><div className="avatar m-5">
                              <div className="w-24  mask mask-squircle">
                                  <img src={bookingproduct.image_url} alt=""/>
                              </div>
                              </div>
                              </td>
                                <td>{bookingproduct.title}</td>
                                <td>{bookingproduct.resalePrice}</td>
                                <td>{bookingproduct?.status === "booked" ? "sold" : "available"} </td>




                                <td>   {bookingproduct?.status === 'advertised' || bookingproduct?.status === 'booked' ?
                                        <th><button className="btn btn-disabled btn-xs">Advertised</button></th>
                                        :
                                        <th><button onClick={() => handleAdvertise(bookingproduct._id)} className="btn bg-green-700 btn-xs">Advertise</button></th>
                                    }</td>
                                <td><button onClick={() => handleDelete(bookingproduct._id)}>X</button></td>
                                   
                             
                              </tr>)
                          }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Myproduct;