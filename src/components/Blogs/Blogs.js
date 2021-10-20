import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pic1 from '../../images/blog1.jpg';
import pic2 from '../../images/blog-2.jpg';
import pic3 from '../../images/blog-3.jpg';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <h2 className="mt-4 mb-4">Blogs</h2>
            <Container className="services shadow ">
                <Row className="p-4  ">
                    <Col xs={12} lg={6} className="mb-2"><img src={pic1} alt="" srcset="" /> </Col>
                    <Col xs={12} lg={6}>
                        <h3 className=" bg-dark text-white p-1 ">  Myths, truths and common questions in Total Joint Replacement </h3>
                        <p className="text p-2"> Over the last 10 years in particular, better drugs e.g. Tranexamic acid, less invasive surgery, and regional anaesthesia have improved the management of pain and improved earlier mobilisation and return to activities, in all Total joint Replacement patients. </p>
                    </Col>
                </Row>
                <Row className="p-4  ">

                    <Col xs={12} lg={6} className="mb-2">
                        <h3 className=" bg-dark text-white p-1 ">  Sacral Nerve Stimulation (SNS) </h3>
                        <p className="text p-2"> Bladder and bowel control problems affect millions of Australians. Bowel management, specifically, is still an underdeveloped area of care across Australia. We are currently working hard to ensure that everyone has easy access to the right level of information and support, to ensure they can be assessed and prescribed the correct treatment for their individual needs.  </p>
                    </Col>
                    <Col xs={12} lg={6}><img src={pic2} alt="" srcset="" /> </Col>
                </Row>
                <Row className="p-4  ">
                    <Col xs={12} lg={6} className="mb-2"><img src={pic3} alt="" srcset="" /> </Col>
                    <Col xs={12} lg={6}>
                        <h3 className=" bg-dark text-white p-1 ">  Posterior Tibial Tendon Insufficiency </h3>
                        <p className="text p-2"> Posterior Tibial Tendon Insufficiency is the most common cause of adult acquire flatfoot deformity. Recognizing PTTI in its early stages may help prevent progression and allow for successful non-operative management. </p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Blogs;