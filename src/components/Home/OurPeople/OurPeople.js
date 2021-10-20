
import React from 'react';
import './OurPeople.css'
import { Link } from 'react-router-dom';

const OurPeople = () => {

    return (
        <div className="container ">
            <h2 className="mt-4 mb-4">Our Team </h2>
            <div className=" bg-color p-4">
                <p>Compassionate and individualised care are at the core of our hospital values, as is service excellence and a strong team ethos.</p>
                <p>Our hospital care team is made up of our clinical team, which includes preadmission, theatres, recovery and ward nursing teams, and our non-clinical care team, which includes our administration and finance, food service, and housekeeping teams. </p>
                <p><b>Meet some of the leaders who motivate, empower and inspire our care hospital team each day</b></p>
                <button className="btn btn-warning "><Link className="text-dark text" to="/teams">Our Executive Team​</Link></button>
            </div>



        </div>

    );
};

export default OurPeople;