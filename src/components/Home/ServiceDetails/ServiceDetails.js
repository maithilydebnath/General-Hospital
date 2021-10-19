import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId, name, description, img } = useParams();

    return (
        <div>
            <h2>Booking Id : {serviceId}</h2>
            <img className="pt-4 " src={img} alt="" />
            <h3>{name}</h3>

            <p className="px-2">{description}</p>
            <Link to={'/services'}>
                <button className="btn btn-warning m-2">Go Back to Services</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;