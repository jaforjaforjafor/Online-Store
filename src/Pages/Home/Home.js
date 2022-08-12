import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info';
import MakeOrder from './MakeOrder';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeOrder></MakeOrder>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;