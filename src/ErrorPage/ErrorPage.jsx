import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='w-3/6 mx-auto mt-20'>
            <img src="https://i.ibb.co/cTDtLgp/404-error-page-design-585024-55.jpg" alt="" />
           <Link to='/'>
           
           <button className='btn btn-secondary w-full'><FaArrowLeft className='text-xl font-bold'></FaArrowLeft>Please-Back-to-home-page </button>
           </Link>
        </div>
    );
};

export default ErrorPage;