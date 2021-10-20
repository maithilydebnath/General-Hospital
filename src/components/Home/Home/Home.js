import React from 'react';
import Applications from '../Applications/Applications';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import OurPeople from '../OurPeople/OurPeople';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurPeople> </OurPeople>
            <Applications></Applications>
            <Information></Information>

        </div>
    );
};

export default Home;