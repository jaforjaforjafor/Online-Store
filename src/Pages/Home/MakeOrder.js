import React from 'react';
import makeorder from '../../assets/Images/doctor.png';
import bgimage from '../../assets/Images/appointment.png'
import OrderButton from '../Shared/OrderButton';

const MakeOrder = () => {
    return (
        <section  style={{
            background:`url(${bgimage})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 '>
                <img className='mt-[-150px]' src={makeorder} alt="" />
            </div>
            <div className='flex-1'>
            <h3 className='text-xl text-accent font-bold'>Order Food</h3>
            <h2 className='text-3xl text-white'>Please Order Now </h2>
            <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ipsam reprehenderit consequatur quibusdam ex ratione, suscipit officiis quisquam velit esse?</p>
            <OrderButton>Order Your Preferable Foods</OrderButton>

            </div>
        </section>
    );
};

export default MakeOrder;