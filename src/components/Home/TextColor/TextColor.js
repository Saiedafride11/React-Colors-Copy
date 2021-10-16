import React, { useEffect, useState } from 'react';
import './TextColor.css';
import TextColorSummery from '../TextColorSummery/TextColorSummery';

const TextColor = () => {
    const [textColors, setTextColors] = useState([]);
    useEffect( () => {
        fetch('./textcolor.json')
        .then(res => res.json())
        .then(data => setTextColors(data))
    }, [])
    return (
        <div className="text-color-container py-5" id="text-colors">
            <br />
            <div className="container">
                <h3 className="mb-4">Try Flat Text Colors</h3>
                <div className="text-color bg-light">
                    {
                    textColors?.map(textColor => <TextColorSummery textColor={textColor} key={textColor.id}></TextColorSummery>)  
                    }
                </div>
            </div>
        </div>
    );
};

export default TextColor;