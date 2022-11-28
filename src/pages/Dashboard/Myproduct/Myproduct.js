import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
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
                <th>Delete</th>
                <th>Payment</th>
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
                                  <td><div className='w-4/5'>{bookingproduct.title}</div></td>
                                
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