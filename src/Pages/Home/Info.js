import React from 'react';
import InfoCard from './InfoCard';
import clock from'../../assets/Icons/clock.svg';
import marker from'../../assets/Icons/marker.svg';
import phone from'../../assets/Icons/phone.svg';


const Info = () => {
    return (
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <InfoCard cardTitle='Opening Hours'bgClass='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'img={clock}></InfoCard>
        <InfoCard cardTitle='Our Locations' bgClass='bg-accent'img={marker}></InfoCard>
        <InfoCard cardTitle='Contact Us' bgClass='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'img={phone}></InfoCard>
       </div>
    );
};

export default Info;