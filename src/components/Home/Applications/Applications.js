import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBookMedical, FaClinicMedical } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import './Applications.css'

const Applications = () => {
    return (
        <div>
            <h2 className="mt-4 mb-4">Our eApplications</h2>
            <Container className="pt-4 pb-4">

                <Row>
                    <Col className="border p-4 bg-color m-2"><span className="pe-2"> <FaBookMedical /> </span> <b>Personal Health Record</b></Col>
                    <Col className="border p-4 bg-color m-2" ><span className="pe-2"> <FaClinicMedical /> </span> <b>E-Admission</b></Col>
                    <Col className="border p-4 bg-color m-2"><span className="pe-2"> <MdPeople /> </span> <b>eReffarals</b></Col>
                </Row>
            </Container>


        </div>
    );
};

export default Applications;