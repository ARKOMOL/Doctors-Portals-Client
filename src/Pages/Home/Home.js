import React from 'react';
import Banner from '../Banner/Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <h1>This is home</h1>
            <Banner/>
            <Info/>
            <Services/>
        </div>
    );
};

export default Home;