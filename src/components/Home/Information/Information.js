import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Information.css'

const Information = () => {
    return (
        <div className=" mt-4 mb-4">
            <h2>Leumeah Health Corporation</h2>
            <Container className="pt-4 pb-4">

                <Row>
                    <Col className="border-end border-dark border-1 p-2  m-2"><h1 className="font"> <b> 250,000+</b></h1>
                        <p>Australians treated annually</p> </Col>
                    <Col className="border-end border-dark border-1 p-2  m-2"><h1 className="font"> <b> 2,000+</b></h1>
                        <p>Doctors, Nurses and Healthcare Workers</p> </Col>
                    <Col className=" p-2  m-2"> <h1 className="font"> <b> 13 </b></h1>
                        <p>Public Hospital</p></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Information;