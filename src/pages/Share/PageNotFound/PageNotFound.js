import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='my-50 lg:ml-50'>

<div className="hero min-h-screen " style={{ backgroundImage: `url("https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg")`}}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">404 Not Found</h1>
            <p className="mb-5">Whoops! That page doesn’t exist.</p>
            <Link className="btn btn-primary" to='/'>Go Back Home</Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default PageNotFound;