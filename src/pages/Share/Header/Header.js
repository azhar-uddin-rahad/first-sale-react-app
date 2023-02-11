import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from  '../../../assits/logo.png'
import { AuthContext } from '../../../Contex/AuthProvider/AuthProvider';


const Header = () => {
  const activeLink = "text-[#F14D5D] p-4  bg-white w-full h-24 shadow centered font-bold rounded-tl-3xl rounded-br-3xl transition duration-300 ease-linear";
  const normalLink = " ";


    const {user,logOut}= useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(result =>{
        })
        .catch(error => console.log(error));
    }
    const NavData = [
        {
          title: "Home",
          path: "/", 
        },
        {
          title: "About US",
         path: '/about',
              
          
        },
        {
          title: "Product",
          path: "/product",
          
        },
        {
          title: "Blog",
          path: "/blogs",
          
        },
        {
          title: "Dashboard",
          path: "/dashboard",
          
        },
        {
          title: "Support",
          path: "/support",
          
        },
        {
          title: "Contact US",
          path: "/contact",
          
        }
  ]

    const menubar = <>
          { NavData.map((item, index) =>{
                return(
                    <div key={index} >
                       <div className='uppercase centered'>
                        <li className='mr-5 text-[#ffffff]'>
                        <NavLink to={item.path} 
                               className={({ isActive }) =>
                               isActive ? activeLink : normalLink
                             }>
                        <span>{item.title}</span>
                        </NavLink>
                        </li>
                       </div>
                    </div>
                )
            })
          }

      
         {/* <li className='mr-4 text-[#ffffff]'><NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to='/'>Home</NavLink></li>
         <li className='mr-4 hover:text-[#F14D5D] text-[#ffffff] '><NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to='/'>About US</NavLink></li>
         <li className='mr-4 text-[#ffffff]'><NavLink className='transition duration-150 ease-linear hover:text-[#F14D5D]' to='/'>Product</NavLink></li>
          <li className='mr-4 text-[#ffffff]'><Link className='transition duration-150 ease-linear hover:text-[#F14D5D]' to='/blogs'>Blog</Link></li>
          <li className='mr-4 text-[#ffffff]'><Link className='transition duration-150 ease-linear hover:text-[#F14D5D]' to='/dashboard'>Dashboard</Link></li>
         <li className='mr-4 text-[#ffffff]'><Link className='transition duration-150 ease-linear hover:text-[#F14D5D]' to='/dashboard'>Support</Link></li>
         <li className='mr-4 text-[#ffffff]'><Link className='transition duration-150 ease-linear hover:text-[#F14D5D]' to='/dashboard'>Contact US</Link></li> */}
           </>
    const LoginButton = <>
   {user?.uid ? <>
             <li className='mr-4 text-[#ffffff] rounded-2xl bg-[#F14D5D] py-[15px] lg:px-[40px] px-[20px]'><Link className='transition duration-150 ease-linear hover:bg-[#0A1831]' onClick={handleLogOut} to='/login'>Log Out</Link></li>
             <li className='mr-4 text-[#ffffff]'> {user?.email}</li>
            </>
            :
            <>
            <li className='mr-4 text-[#ffffff] rounded-2xl bg-[#F14D5D] py-[15px] lg:px-[40px] px-[20px] transition duration-150 ease-linear hover:bg-[#0A1831]'><Link className='' to='/login'>Login</Link></li>
           </>
          } 
    </>   

    return (
        <div className='bg-[#0A1831]'>
      <div className="navbar max-w-[1440px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact bg-[#0A1831] font-bold dropdown-content mt-3 p-2 rounded-box w-52">
       {menubar}
      </ul>
    </div>
   <img src={logo} className="w-20" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal font-bold">
    {menubar}
    </ul>
  </div>
  
  <div className="navbar-end">
  <ul className="menu-horizontal font-bold">
   {LoginButton}
    </ul>
  <label tabIndex={2} htmlFor="sidebar-drawer" className="btn btn-ghost lg:hidden">
        <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
</div>
        </div>
    );
};

export default Header;