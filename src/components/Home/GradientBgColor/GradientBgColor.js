import React, { useEffect, useState } from 'react';
import GradientBgColorSummery from '../GradientBgColorSummery/GradientBgColorSummery';
import './GradientBgColor.css';

const GradientBgColor = () => {
    const [gradientsBgColors, setGradientsBgColors] = useState([]);
    useEffect( () => {
        fetch('./gradientbgcolor.json')
        .then(res => res.json())
        .then(data => setGradientsBgColors(data))
    }, [])
    return (
        <div className="gradient-bg-container py-5" id="gradient-background">
            <br />
            <div className="container">
                <h3 className="mb-4">Try Gradient Background Colors</h3>
                <div className="gradient-bg-color bg-light">
                    {
                    gradientsBgColors?.map(gradientsBgColor => <GradientBgColorSummery gradientsBgColor={gradientsBgColor} key={gradientsBgColor.id}></GradientBgColorSummery>)  
                    }
                </div>
            </div>
        </div>
    );
};

export default GradientBgColor;