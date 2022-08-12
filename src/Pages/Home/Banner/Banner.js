import React from 'react';
import banner from '../../../assets/Images/food-banner.jpg'
import OrderButton from '../../Shared/OrderButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-300">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your favourite food is here!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <OrderButton> Going to Order Food</OrderButton>
    </div>
  </div>
</div>
    );
};

export default Banner;