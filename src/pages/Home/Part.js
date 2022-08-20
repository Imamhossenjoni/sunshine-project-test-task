import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
  const { name, img, price,discriptiom} = part;
  return (
    <div>
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} style={{height:'300px'}} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-left">
                    <h2 className="card-title ">Name:{name}</h2>
                    <h2 className='text-info font-bold textg-2xl'>Price:{price}</h2>
                    <button  className='btn' > <Link to='/services'>Buy Now</Link></button>
                </div>
            </div>
        </div>
  );
};

export default Part;