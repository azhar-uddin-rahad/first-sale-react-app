import React, { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers'
import { AuthContext } from '../../../Contex/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';



const AddProduct = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    console.log(value);
   
  const  handlseProductData=(event)=>{
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const model=form.model.value;
    const mobile=form.mobile.value;
    const image_url=form.image_url.value;
    const resalePrice =form.resalePrice.value;
    const originalPrice =form.originalPrice.value;
    const yearsOfUse =form.yearsOfUse.value;
    const cpuProcessor =form.cpuProcessor.value;
    const memory =form.memory.value;
    const storage =form.storage.value;
    const operationSystem =form.operationSystem.value;
    const batteryPowerSupply =form.batteryPowerSupply.value;
    const location =form.location.value;
    const category_id =form.selectCategory.value;
    console.log(title,model,image_url,resalePrice,originalPrice,yearsOfUse,cpuProcessor,memory,storage,operationSystem,batteryPowerSupply,location,category_id)
    const productAdd={
        title,
        model,
        image_url,
        mobile,
        resalePrice,
     originalPrice,
     yearsOfUse,
     cpuProcessor,
     memory,
     storage,
     operationSystem,
     batteryPowerSupply,
     location,
     category_id,
     author_name: user.displayName,
     email: user.email,
     author_img: user.photoURL,
     published_date: value

    }
    fetch('http://localhost:5000/categorys',{
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(productAdd)
    })
    .then(res => res.json())
    .then(data =>{ 
        console.log(data);
        if (data.acknowledged){
            toast.success("Product uploaded successfully");
            form.reset()
        }
        
 
    })
    .catch(error => console.log(error))
        
    }
    return (
 
  <div className="w-full md:w-11/12  sm:mx-auto rounded border mt-4 mx-8">
     
    <div className="bg-white p-10 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Add Product information</h2>
      <div className="leading-loose">
        <form onSubmit={handlseProductData}>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
            <input required type="text" name="title" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="first" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Title
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:-mx-1 sm:pl-1 sm:w-1/2">
            <input required type="text" name="model" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="last" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Model
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
            <input required type="text" name="image_url" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="email" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Image URL
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:-mx-1 sm:pl-1 sm:w-1/2">
            <input required type="text" name="mobile" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="phone" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
              Phone Number
            </label>
          </div>


          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
            <input required type="text" name="resalePrice" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="phone" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Resale Price
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:-mx-1 sm:pl-1 sm:w-1/2">
            <input required type="text" name="originalPrice" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="phone" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Original Price
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
            <input required type="text" name="yearsOfUse" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="phone" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Years Of Use
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:-mx-1 sm:pl-1 sm:w-1/2">
            <input required  type="text" name="cpuProcessor" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="phone" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            CPU / Processor
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
            <input required type="text" name="memory" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="phone" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Memory
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:-mx-1 sm:pl-1 sm:w-1/2">
            <input required type="text" name="storage" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="phone" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Storage
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
            <input required type="text" name="operationSystem" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="phone" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Operation System
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:-mx-1 sm:pl-1 sm:w-1/2">
            <input required  type="text" name="batteryPowerSupply" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="phone" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Battery / PowerSupply
            </label>
          </div>
          <div className="relative h-10 input-component mb-5 empty sm:inline-block mt-2 sm:w-1/2 sm:pr-1">
            <input required type="text" name="location" className="h-full w-full border-gray-300 px-2 transition-all hover:border-gray-500 focus:border-green-500 
            rounded-md focus:ring-0 group focus:outline-0 border text-sm" />
            <label htmlFor="phone" className="absolute left-2 transition-all bg-white px-1 text-green-600 text-xs top-0">
            Location
            </label>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
               
                <DateTimePicker
                  label="Date&Time picker"
                  value={value}
                  onChange={(newValue)=>{
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField  {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
       





          <p className="text-gray-800 font-medium">Select Category</p>
           <div>
        <select name='selectCategory' className="select select-success w-full max-w-xs">
        <option  value='1'>Apple</option>
        <option value='2'>MSI</option>
        <option value='3'>HP</option>
         </select>
        </div>
        
        <input className="btn btn-outline w-full mt-5 btn-success"   type="submit" />
       
        
          
        </form>
      </div>
    </div>
  </div>

    );
};

export default AddProduct;