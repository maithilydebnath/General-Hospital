import React from 'react';
import Applications from '../Applications/Applications';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Applications></Applications>
            <Information></Information>
        </div>
    );
};

export default Home;