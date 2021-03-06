import React from 'react';
import chair from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">.</p>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;