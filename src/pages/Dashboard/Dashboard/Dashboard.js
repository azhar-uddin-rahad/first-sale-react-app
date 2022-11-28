import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contex/AuthProvider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookingproducts?email=${user?.email}`;

  const { data: bookingproducts = [] } = useQuery({
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
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
          {
                            bookingproducts.map((bookingproduct, i) => <tr key={bookingproduct._id}>
                                <th>{i+1}</th>
                              <td><div className="avatar m-5">
                            <div className="w-24  mask mask-squircle">
                                <img src={bookingproduct.product_img} />
                            </div>
                            </div>
                            </td>
                                <td><div className='w-4/5'>{bookingproduct.productName}</div></td>
                                <td>{bookingproduct.price}</td>
                                <td><button className='btn btn-primary btn-sm'>Pay</button></td>
                               {/*  {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                   */}
                                 
{/* 
                              {
                                <td>{booking.price && booking.paid && <span className="text-primary">Paid</span>}</td>
                              } */}

                            </tr>)
                        }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Dashboard;