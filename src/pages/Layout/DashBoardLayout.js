import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Share/Header/Header';

const DashBoardLayout = () => {
    return (
        <div>
            <Header></Header>   
            <div className="drawer drawer-mobile">
          <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">
            <Outlet></Outlet>
          </div> 
          <div className="drawer-side">
            <label htmlFor="sidebar-drawer" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li><Link to='/dashboard'>My orders</Link></li>
                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
               
                  </ul>
          
          </div>
        </div>
            
        </div>
    );
};

export default DashBoardLayout;