import { Carousel } from 'react-bootstrap';
import React from 'react';
import banner1 from '../../../images/Pic1.jpg';
import banner2 from '../../../images/Pic2.jpg';
import banner3 from '../../../images/Pic3.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-dark">
                            <h3>Leumeah General Hospital</h3>
                            <p>We are doing all we can to ensure the safety of our patients and staff</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption >
                            <h3 >Leumeah General Hospital</h3>
                            <p>Maintain all Covid rules  </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-dark">
                            <h3>Leumeah General Hospital</h3>
                            <p>In response to the COVID Outbreak,we have made some changes to our visitor protocols .</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;