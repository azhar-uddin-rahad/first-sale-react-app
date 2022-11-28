import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assits/logo.png";
import { useForm } from "react-hook-form";
import SocialLogin from "../Share/SocialLogin/SocialLogin.";
import { AuthContext } from "../../Contex/AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {createUser,updateUser}=useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const navigate = useNavigate();


    const handleLogin=(data)=>{
        console.log(data)
        setSignUpError('')
        createUser(data.email,data.password)
        .then(result =>{
            const user = result.user;
            toast("User create successfully");
            const userInfo = {
              displayName: data.name,
            };
    
            updateUser(userInfo)
              .then(() => {
                navigate('/')
              })
    
              .catch((error) => console.log(error));
          })
          .catch((error) => {
            console.log(error);
            setSignUpError(error.message);
          });
  

    }
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
              <img className="w-40 animate-hflip" src={logo} alt="" />
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form  onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.name?.type === "required" && (
              <p role="alert" className="text-error">
                Name is required
              </p>
            )}
              </div>
            </div>
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
                  {...register("email", { required: true })} 
                  className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                 {errors.email?.type === 'required' && <p role="alert" className="text-error">Email is required</p>}
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
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "password must be 6 characters or lenger",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message: "Password mustbe strong",
                    },
                  })}
                  className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                 {errors.password && <p role="alert" className="text-error">{errors.password?.message}</p>}
              </div>
            </div>

            <div className="flex items-center mt-4">
              <button className="btn w-full btn-outline p-5 rounded-sm">
                Register
              </button>
            </div>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link className="text-purple-600 hover:underline" to="/login">
                Log in
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

export default Register;
