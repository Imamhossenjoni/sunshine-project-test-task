import React from 'react';
import useReviews from '../../hooks/useReviews';
import CustomerReview from './CustomerReview';

const CustomerReviews = () => {
    const [reviews]=useReviews();

    return (
        <div> 
            <h2 className='text-5xl underline font-bold text-info py-5'>Our Customer Reviews</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    reviews.map(review=><CustomerReview key={review.id} review={review}></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;