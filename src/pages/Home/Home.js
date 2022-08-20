import React from 'react';
import Contact from '../shared/Contact';
import Banner from './Banner';
import CustomerReviews from './CustomerReviews';
import Parts from './Parts';


const Home = () => {
    return (
        <div className='px-8 mb-5'>
            <Banner></Banner>
            <Parts></Parts>
            <Contact></Contact>
            <CustomerReviews></CustomerReviews>
            
        </div>
    );
};

export default Home;