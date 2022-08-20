import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../img/electronics.jpg'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={banner} alt='' style={{height:'350px',width:'400px'}} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold text-info">Welcome to E-MARKET</h1>
                        <p class="py-6 text-2xl">Here, We sell electronics components.You can buy from any eletronics items. We will serve you</p>
                        <button class="btn btn-primary"><Link to='/services'>Go to Services</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;