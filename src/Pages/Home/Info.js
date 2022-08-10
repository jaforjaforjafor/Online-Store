import React from 'react';
import img from'../../assets/Icons/food-drink-icon.jpg';

const Info = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl bg-accent grid grid-cols-1 lg:grid-cols-3 gap-5">
  <figure>
    <img src={img} alt="Album"/>
    <img src={img} alt="Album"/>
    <img src={img} alt="Album"/>
    </figure>
  <div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
    );
};

export default Info;