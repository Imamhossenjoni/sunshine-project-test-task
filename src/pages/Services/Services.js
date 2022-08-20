import React from 'react';
import useServices from '../../hooks/useServices';
import Parts from '../Home/Parts';
import Service from './Service';

const Services = () => {
    const [services]=useServices([])
    return (
        <div>
            <h2 className='text-primary font-bold text-5xl py-5'>Welcome to E-Marker Online Services</h2>
            <h2 className='text-info font-bold text-5xl underline py-5'>Our Services</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    services.map(service=><Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;