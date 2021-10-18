import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Booking Id : {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;