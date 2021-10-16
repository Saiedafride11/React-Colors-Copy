import React, { useEffect, useState } from 'react';
import GradientTextColorSummery from '../GradientTextColorSummery/GradientTextColorSummery';
import './GradientTextColor.css';


const GradientTextColor = () => {
    const [gradientsTextColors, setGradientsTextColors] = useState([]);
    useEffect( () => {
        fetch('./gradienttextcolor.json')
        .then(res => res.json())
        .then(data => setGradientsTextColors(data))
    }, [])
    return (
        <div className="gradient-text-container py-5" id="gradient-text">
            <br />
        <div className="container">
            <h3 className="mb-4">Try Gradient Text Colors</h3>
            <div className="gradient-text-color bg-light">
                {
                gradientsTextColors?.map(gradientsTextColor => <GradientTextColorSummery gradientsTextColor={gradientsTextColor} key={gradientsTextColor.id}></GradientTextColorSummery>)  
                }
            </div>
        </div>
    </div>
    );
};

export default GradientTextColor;