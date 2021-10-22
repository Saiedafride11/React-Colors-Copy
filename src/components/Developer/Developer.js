import React from 'react';
import { Link } from 'react-router-dom';

const Developer = () => {
    return (
        <div className="container">
            <p><strong>Developer: </strong>Saied Afride</p>
            <p><strong>Ui Credit: </strong>Al Nahian</p>
            <p><strong>Used: </strong>React ( JavaScript library )</p>
            <Link to="/home"><button className="btn btn-primary w-75 mx-auto">Back Home</button></Link>
        </div>
    );
};

export default Developer;