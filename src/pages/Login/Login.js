import React from 'react';
import { Link } from 'react-router-dom';
import logo from  '../../assits/logo.png';
import SocialLogin from '../Share/SocialLogin/SocialLogin.';

const Login = () => {
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
               
               <div>
                   <a href="/">
                       <h3 className="text-4xl font-bold text-purple-600">
                       <img className='w-40 animate-hflip' src={logo} alt="" />
                       </h3>
                   </a>
               </div>
               <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                   <form onSubmit={''}>
                      
                       <div className="mt-4">
                           <label
                               htmlFor="email"
                               className="block text-sm font-medium text-gray-700 undefined"
                           >
                               Email
                           </label>
                           <div className="flex flex-col items-start">
                               <input
                                   type="email"
                                   name="email"
                                   className="block p-3 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               />
                           </div>
                       </div>
                      
                       <div className="mt-4">
                           <label
                               htmlFor="password_confirmation"
                               className="block text-sm font-medium text-gray-700 undefined"
                           >
                              Password
                           </label>
                           <div className="flex flex-col items-start">
                               <input
                                   type="password"
                                   name="password"
                                   className="block p-3 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                               />
                           </div>
                       </div>
                      
                       
                       <div className="flex items-center mt-4">
                       <button className="btn w-full btn-outline p-5 rounded-sm">Log in</button>
                           
                          
                       </div>
                   </form>
                   <div className="mt-4 text-grey-600">
                       You don't have an account?{" "}
                       <span>
                           <Link className="text-purple-600 hover:underline" to='/register'>
                              Register
                           </Link>
                       </span>
                   </div>
                   <div className="flex items-center w-full my-4">
                       <hr className="w-full" />
                       <p className="px-3 ">OR</p>
                       <hr className="w-full" />
                   </div>
                   <div className="my-6 space-y-2">
                       

                       <SocialLogin></SocialLogin>
                     
                   </div>
               </div>
           </div> 
        </div>
    );
};

export default Login;