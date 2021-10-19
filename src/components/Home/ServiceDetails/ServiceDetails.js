import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    let { serviceId } = useParams();
    const [allServices, setAllServices] = useState([]);
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setAllServices(data.service));

    }, [])
    useEffect(() => {
        const foundServiceDetails = allServices.find(
            (service) => service.id == serviceId
        );

        setServiceDetails(foundServiceDetails);
        console.log(foundServiceDetails)

    }, [allServices]);


    return (
        <div>
            <h2 className="mt-4 mb-4">Booking Id : {serviceId}</h2>
            <Container className="d-flex justify-content-center mb-4">
                <Card style={{ width: '26rem' }}>
                    <Card.Img className="serviceImg" variant="top" src={serviceDetails?.img} />
                    <Card.Body>
                        <Card.Title>{serviceDetails?.name}</Card.Title>
                        <Card.Text>
                            Description: {serviceDetails?.description}
                        </Card.Text>
                        <Link to={'/home'}>
                            <button className="btn btn-warning m-2">Go Back to Home</button>
                        </Link>
                    </Card.Body>
                </Card>

            </Container>

        </div>
    );
};

export default ServiceDetails;