import React from 'react';
import Contact from '../shared/Contact';
import Banner from './Banner';
import Parts from './Parts';


const Home = () => {
    return (
        <div className='py-5'>
            <Banner></Banner>
            <Parts></Parts>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;