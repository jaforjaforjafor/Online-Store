import React from 'react';
import banner from '../../../assets/Images/food-banner.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-300 px-12">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your favourite food is here!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-info upper text-black font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;