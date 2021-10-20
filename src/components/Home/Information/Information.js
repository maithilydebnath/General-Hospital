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
                {/* Google Map   */}

            </Container>
            <div>
                <h4 className="m-0 p-4 bg-color"><b>Leumeah General Hospital, NSW-2560  Phone: (02) 9871 2982</b></h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.068967188425!2d150.83084619054947!3d-34.05438150569621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12eebf89e270b1%3A0x5017d681632be10!2sLeumeah%20NSW%202560!5e0!3m2!1sen!2sau!4v1634718071957!5m2!1sen!2sau" ></iframe>
            </div>
        </div>
    );
};

export default Information;