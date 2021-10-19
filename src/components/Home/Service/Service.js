import React from 'react';

import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, img, id } = service;
    return (
        <div className=" service">
            <img className="pt-4 " src={img} alt="" />
            <h3>{name}</h3>

            <p className="px-2">{description}</p>
            <Link to={`/serviceDetails/${id}`}>
                <button className="btn btn-warning m-2">Details of {name.toLowerCase()}</button>
            </Link>
        </div>

    );
};

export default Service;