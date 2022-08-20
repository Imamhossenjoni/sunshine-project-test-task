import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import Part from './Part';

const Parts = () => {
    const [services]=useServices();
    return (
        <div>
            <h2 className='text-primary font-bold text-5xl underline  py-5'>Our Services</h2>
            <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    services.map(part=><Part key={part.id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;