import React from 'react';
import Service from './Service';
import  rice from '../../assets/Images/food-banner.jpg'
import  onion from '../../assets/Images/food-banner.jpg'
import  potato from '../../assets/Images/food-banner.jpg'


const Services = () => {

    const services =[
        {
            _id:1,
            name: 'rice',
            description:'pure and good quality and machinarise',
            img: rice 

    },
        {
            _id:2,
            name: 'onion',
            description:'pure and good quality and machinarise',
            img: onion 

    },
        {
            _id:3,
            name: 'potato',
            description:'pure and good quality and machinarise',
            img: potato 

    },

    ]
    return (
        <div className='my-28 '>
            <div className='text-center '>
            <h3 className='text-accent text-xl font-bold uppercase'> Our Services</h3>
            <h2 className='text-4xl'>Services We Provide</h2>

        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }

        </div>
        </div>
    );
};

export default Services;