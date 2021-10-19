import React from 'react';
import { Accordion } from 'react-bootstrap';
import banner from '../../images/patient.jpg';
import './Patients.css'

const Patients = () => {
    return (
        <div className="patients">
            <img className="img-fluid" src={banner} alt="" srcset="" />
            <div className="container ">
                <h2 className="mt-4 mb-4">General Information</h2>
                <p className="text-start">At Leumeah General Hospital we are committed to providing a high standard quality of care for all our patients. Our state of the art facility prides itself on the delivery of a world class service through the services of our specialist doctors supported by our healthcare team.</p>
                <p className="text-start">Your needs and well-being are our highest priority, and we aim to deliver exceptional medical assistance in a caring and comfortable environment.</p>
                <p className="text-start">Please read through all of the information below, to ensure your admission and stay is as enjoyable as possible, and your discharge from hospital meets your expectations.</p>
                <Accordion className="text-start mb-4 mt-2" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Admissions</Accordion.Header>
                        <Accordion.Body>
                            Your admitting doctor will arrange your admission to Leumeah General Hospital. You will be given an admission form to be completed and returned to the hospital as soon as possible.

                            When you arrive at the hospital, please visit our main reception staff located on the ground floor who will be able to assist you.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Amenities</Accordion.Header>
                        <Accordion.Body>
                            All our private and shared rooms have personal plasma screen televisions, telephones and nurse call facilities. Local calls are free of charge and mobile calls/STD calls can be made using a phone card. Many rooms enjoy parkside views over Marsden Park.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Payment information</Accordion.Header>
                        <Accordion.Body>
                            Please contact your health fund prior to admission to ensure that you do not have any restrictions to your cover, are financial and have served all applicable waiting periods. Your health fund will also be able to advise you of any excesses or co-payments that you may incur.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </div>
    );
};

export default Patients;