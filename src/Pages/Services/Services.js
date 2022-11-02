import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div>
                <p className="text-center text-2xl font-bold text-orange-600">Service</p>
                <h2 className="my-5 text-center text-4xl font-bold">Our Service Area</h2>
                <p className="text-center mb-14">the majority have suffered alteration in some form, by injected humour, or randomised<br />words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >

                    </ServiceCard>)
                }
            </div>
            <div className='flex justify-center mt-14 mb-32'>
                <button className="btn btn-outline border-orange-600 text-orange-600 hover:bg-orange-300 hover:border-orange-400">More Services</button>
            </div>
        </div>
    );
};

export default Services;