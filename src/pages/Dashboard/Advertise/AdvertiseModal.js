import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';


import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contex/AuthProvider/AuthProvider';

const AdvertiseModal = ({ productInfo, setProductInfo, setLoading }) => {
    const { user } = useContext(AuthContext)
    const { title, resalePrice, image_url, _id } = productInfo;

    const navigate = useNavigate()


    const [selectedDate, setSelectedDate] = useState(new Date())


    const handleBooking = event => {
        event.preventDefault();
  
        fetch(`https://first-sale-server.vercel.app/laptop/${_id}`,{
          method: 'PUT',
          headers:{
            'content-type' : 'application/json'
          }
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
        })
  
          const form =event.target;
          const name = form.name.value;
          const email = form.email.value;
          const price = form.price.value;
          const phone = form.phone.value;
          const meeting=form.meeting.value;
        
         
  
      const bookinginfo ={
          name,
          email,
          phone,
          price,
          meeting,
          product_img: image_url,
          productName: title
      }
      fetch('https://first-sale-server.vercel.app/bookingproducts',{
        method: 'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify(bookinginfo)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged){
          toast.success("Product Booking successfully");
         
      }
      setProductInfo(null);
      })
  
      ///when click the modal button then under the model data is clear
      
  }
  
    return (
        <>
        <input type="checkbox" id="bookingProductBtn" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="bookingProductBtn" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">{title}</h3>
            <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
                <input name="name" type="text"  readOnly defaultValue={user?.displayName} className="input input-bordered input-success w-full" />
            <input name="email" type="email" readOnly defaultValue={user?.email} className="input input-bordered input-success w-full" />
            <input name="price" type="text" readOnly defaultValue={resalePrice} className="input input-bordered input-success w-full" />
            <input name="phone" type="text" placeholder="Type Phone Number" className="input input-bordered input-success w-full" />
            <input name="meeting" type="text" placeholder="Type meeting location" className="input input-bordered input-success w-full" />
            <input type="submit"  value="Submit" className="input input-bordered input-success w-full btn btn-ghost" />
        
            </form>
          </div>
        </div>
         
           </>
    );
};

export default AdvertiseModal;