import React from 'react';
import Applications from '../Applications/Applications';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Applications></Applications>
        </div>
    );
};

export default Home;