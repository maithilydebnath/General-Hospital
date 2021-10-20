import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import pic1 from '../../images/blog1.jpg';
import pic2 from '../../images/blog-2.jpg';
import pic3 from '../../images/blog-3.jpg';
import './Team.css'

const Teams = () => {
    return (
        <div>
            <h2>Our Executive Team</h2>
            <CardGroup>
                <Card className="m-4 ">
                    <Card.Img className="img" variant="top" src={pic1} />
                    <Card.Body>
                        <Card.Title>Dr David Yeo</Card.Title>
                        <Card.Text>
                            UPPER GASTROINTESTINAL, HEPATOBILIARY & TRANSPLANT SURGEON
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className="m-4">
                    <Card.Img className="img" variant="top" src={pic2} />
                    <Card.Body>
                        <Card.Title>Dr Henry More</Card.Title>
                        <Card.Text>
                            UPPER GASTROINTESTINAL, PANCREATIC & BARIATRIC SURGEON
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className="m-4" >
                    <Card.Img className="img" variant="top" src={pic3} />
                    <Card.Body>
                        <Card.Title>
                            Dr Charbel Sandroussi</Card.Title>
                        <Card.Text>
                            UPPER GASTROINTESTINAL, HEPATOBILIARY & TRANSPLANT SURGEON
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default Teams;