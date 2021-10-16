import React, { useRef, useState } from 'react';
import './BgTextColorSummery.css';

const BgTextColorSummery = (props) => {
    const {color} = props.bgTextColor;
    const [copySuccess, setCopySuccess] = useState('');
    const [colors, setColor] = useState({});
    const textAreaRef = useRef(null);

    const copyToClipboard = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    
        setColor({
            backgroundColor: `${color}`,
            // opacity: 1,
            display: 'flex',
            zIndex: 5,
        })

        setTimeout(() => {
            setCopySuccess('Aa');
            setColor({
                // opacity: 0,
                display: 'none',
                zIndex: -5,
            })
        }, 1000);
    }
    return (
        <div className="bg-color-inner" style={{border: `1px solid ${color}`}}>
        {
            document.queryCommandSupported('copy') &&
            <>
                <button onClick={copyToClipboard} className="bg-color-btn" style={{backgroundColor: `${color}`}}>
                    <input type="text" ref={textAreaRef} defaultValue={color} readOnly style={{transform:"scale(0)"}}/>
                    <p style={{color: "#fff", marginBottom: '0px'}}>{!copySuccess ? "Aa" : copySuccess}</p> 
                </button>
                <div className="success-copied" style={colors}>
                    <div style={{width:"100%", backgroundColor: "#eeeeee", padding: '30px 0px', textAlign: 'center', opacity: '.9'}}>
                        <h1 style={{color: `${color}`}}>Successfully Color Code Copied</h1>
                    </div>
                </div>
            </>
        }
        </div>
    );
};

export default BgTextColorSummery;