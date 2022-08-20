import React from 'react';

const CustomerReview = ({review}) => {
    const {name,email,reviews,img}=review
    return (
        <div>
            <div className="card card-compact lg:max-w-lg bg-accent text-white shadow-xl">
                <div class="avatar margin-auto items-center justify-center mt-5">
                    <div class="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p className='text-base-200'>{email}</p>
                    <q className='text-sm'>{reviews}</q>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;