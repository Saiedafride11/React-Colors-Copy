import React, { useRef, useState } from 'react';
import './GradientTextColorSummery.css';
import useSound from 'use-sound';
import sound from '../../../sound/03.wav';


const GradientTextColorSummery = (props) => {
    const [setPlay] = useSound(sound);
    const {color, textColor, borderColor, copyColorCode} = props.gradientsTextColor;
    // console.log('gradientsTextColor', color);
    const [copySuccess, setCopySuccess] = useState('');
    const [colors, setColor] = useState({});
    const textAreaRef = useRef(null);

    const copyToClipboard = (e) => {
        setPlay();
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    
        setColor({
            background: `${textColor}`,
            // opacity: 1,
            display: 'flex',
            zIndex: 5,
        })
        
        setTimeout(() => {
            setCopySuccess('Hello!');
            setColor({
                // opacity: 0,
                display: 'none',
                zIndex: -5,
            })
        }, 1000);
    }
    
    return (
        <div className="gradient-text-color-inner" style={{border: `1px solid ${borderColor}`}}>
        {
            document.queryCommandSupported('copy') &&
            <>
                <button onClick={copyToClipboard} className="gradient-text-color-btn" style={{background: ``}}>
                    <input type="text" ref={textAreaRef} defaultValue={copyColorCode} readOnly style={{transform:"scale(0)", width: '100%'}}/>
                    <p style={{WebkitBackgroundClip : 'text',  WebkitTextFillColor : 'transparent',  backgroundImage : `${textColor}`}}>{!copySuccess ? "Hello!" : copySuccess}</p> 
                </button>
                <div className="success-copied" style={colors}>
                    <div style={{width:"100%", backgroundColor: "#eeeeee", padding: '30px 0px', textAlign: 'center', opacity: '.9'}}>
                        <h1 style={{WebkitBackgroundClip : 'text',  WebkitTextFillColor : 'transparent',  backgroundImage : `${textColor}`}}>Successfully Color Code Copied</h1>
                    </div>
                </div>
            </>
        }
        </div>
    );
};

export default GradientTextColorSummery;