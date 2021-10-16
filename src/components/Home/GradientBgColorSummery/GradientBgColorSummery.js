import React, { useRef, useState } from 'react';
import './GradientBgColorSummery.css';

const GradientBgColorSummery = (props) => {
    const {color, copyColor, bgcolor} = props.gradientsBgColor;
    const [copySuccess, setCopySuccess] = useState('');
    const [colors, setColor] = useState({});
    const textAreaRef = useRef(null);

    const copyToClipboard = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    
        setColor({
            background: `${color}`,
            // opacity: 1,
            display: 'flex',
            zIndex: 5,
        })

        setTimeout(() => {
            setCopySuccess('Hello');
            setColor({
                // opacity: 0,
                display: 'none',
                zIndex: -5,
            })
        }, 1000);
    }
    return (
        <div className="gradient-bg-color-inner" style={{border: `1px solid ${bgcolor}`}}>
        {
            document.queryCommandSupported('copy') &&
            <>
                <button onClick={copyToClipboard} className="gradient-bg-color-btn" style={{background: `${color}`}}>
                    <input type="text" ref={textAreaRef} defaultValue={copyColor} readOnly style={{transform:"scale(0)"}}/>
                    <p style={{color: "#fff", marginBottom: '0px'}}>{!copySuccess ? "Hello" : copySuccess}</p> 
                </button>
                <div className="success-copied" style={colors}>
                    <div style={{width:"100%", backgroundColor: "#eeeeee", padding: '30px 0px', textAlign: 'center', opacity: '.9'}}>
                        <h1 style={{color: `${bgcolor}`}}>Successfully Color Code Copied</h1>
                    </div>
                </div>
            </>
        }
        </div>
    );
};

export default GradientBgColorSummery;