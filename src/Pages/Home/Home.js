import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';

import Info from './Info';
import MakeAppointment from './MakeAppointment';

import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
        
            <h1>This is home</h1>
            <Banner/>
            <Info/>
            <Services/>
            <MakeAppointment/>
            <Footer/>
        </div>
    );
};

export default Home;