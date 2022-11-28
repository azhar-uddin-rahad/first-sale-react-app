import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contex/AuthProvider/AuthProvider';


const DisplayError = () => {
    const error = useRouteError();
    
    const {user,logOut}= useContext(AuthContext)
    const handleSignOut=()=>{
      logOut()
      .then(() => {
       
      }).catch((error) => {
       console.log(error)
      });

    }
    return (
        <div>
            <p className='text-red-500'>Something went wrong</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h2 className='text-3xl'>please  <li><Link onClick={handleSignOut} to='/login'>Sign Out</Link></li> and log back </h2>
        
        
        </div>
    );
};

export default DisplayError;