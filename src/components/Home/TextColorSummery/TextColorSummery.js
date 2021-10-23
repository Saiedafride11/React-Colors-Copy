import React, { useRef, useState } from 'react';
import './TextColorSummery.css';
import useSound from 'use-sound';
import sound from '../../../sound/03.wav';

const TextColorSummery = (props) => {
    const [setPlay] = useSound(sound);
    const {color} = props.textColor;
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
            transtion: '10s',
            zIndex: 5,
        })
        setPlay();
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
        <div className="color-inner" style={{border: `1px solid ${color}`}}>
            {
                document.queryCommandSupported('copy') &&
                <>
                    <button onClick={copyToClipboard} className="color-btn">
                        <input type="text" ref={textAreaRef} defaultValue={color} readOnly style={{transform:"scale(0)", width: '100%'}}/>
                        <p style={{color: `${color}`, marginBottom: '0px'}}>{!copySuccess ? "Aa" : copySuccess}</p> 
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

export default TextColorSummery;