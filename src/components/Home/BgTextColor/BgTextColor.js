import React, { useEffect, useState } from 'react';
import BgTextColorSummery from '../BgTextColorSummery/BgTextColorSummery';
import './BgTextColor.css';

const BgTextColor = () => {
    const [bgTextColors, setBGTextColors] = useState([]);
    useEffect( () => {
        fetch('./bgtextcolor.json')
        .then(res => res.json())
        .then(data => setBGTextColors(data))
    }, [])
    return (
        <div className="bg-text-color-container py-5" id="background-colors">
            <br />
            <div className="container">
                <h3 className="mb-4">Try Flat Background Colors</h3>
                <div className="bg-text-color bg-light">
                    {
                    bgTextColors?.map(bgTextColor => <BgTextColorSummery bgTextColor={bgTextColor} key={bgTextColor.id}></BgTextColorSummery>)  
                    }
                </div>
            </div>
        </div>
    );
};

export default BgTextColor;