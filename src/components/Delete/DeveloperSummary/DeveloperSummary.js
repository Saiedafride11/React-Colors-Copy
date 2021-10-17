import React, { useRef, useState } from 'react';
import './DeveloperSummary.css';

const DeveloperSummary = (props) => {
    const {color} = props.developer;
    const [copySuccess, setCopySuccess] = useState('');
    const [colors, setColor] = useState({});
    const textAreaRef = useRef(null);

    const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
    // document.body.style.backgroundColor = `${color}`;
    // document.body.style.opacity = "1";
    // document.body.style.zIndex = "500";
    // document.body.style.position = "fixed";
    // document.body.style.left = "0";
    // document.body.style.top = "0";
    // document.body.style.height = "100%";
    // document.body.style.width = "100%";
    // document.body.style.display = "flex";
    // document.body.style.display = "-ms-flexbox";
    // document.body.style.msFlexAlign = "center";
    // document.body.style.msFlexPack = "center";
    // document.body.style.alignItems = "center";
    // document.body.style.justifyContent = "center";
    // document.body.style.zIndex = "5";
    // document.body.style.backgroundColor = `${color}`;

    // document.classList.add("success-copied");
    // document.body.style.backgroundColor = `${color}`;

    // const changeColor = {
    //     fontSize: '30px',
    //     backgroundColor: `${color}`,
    //     opacity: 1,
    //     zIndex: 5,
    // }
    
    setColor({
        // fontSize: '10px',
        backgroundColor: `${color}`,
        opacity: 1,
        zIndex: 5,
    })

    setTimeout(() => {
        setCopySuccess('Aa');
        // document.body.style.backgroundColor = "white";
        // document.body.style.opacity = "0";
        // document.body.style.zIndex = "-1";
        setColor({
            opacity: 0,
            zIndex: -5,
        })
    }, 2000);
    }
    // const changeColor = {
    //     fontSize: '30px',
    //     backgroundColor: `${color}`,
    //     opacity: 1,
    //     zIndex: 5,
    // }
    return (
        <div className="developer-summary">
           <div className="container">
                <div className="row row-cols-1 p-2">
                    <div className="card h-100">
                        <div>
                           {
                            document.queryCommandSupported('copy') &&
                            <div>
                                {/* <button onClick={copyToClipboard} className="developer-btn">{!copySuccess ? "Copy" : copySuccess}</button> */}
                                <button onClick={copyToClipboard} className="developer-btn" style={{backgroundColor: `${color}`}}>
                                    <input type="text" ref={textAreaRef} defaultValue={color} readOnly style={{transform:"scale(0)"}}/>
                                    <p>{!copySuccess ? "Aa" : copySuccess}</p>
                                   
                                </button>
                                <div className="success-copied" style={colors}>
                                    <div style={{width:"100%", backgroundColor: "#eeeeee", padding: '30px 0px', textAlign: 'center', opacity: '.9'}}>
                                        <h1 style={{color: `${color}`}}>Successfully Color Code Copied</h1>
                                    </div>
                                </div>
                                {/* <p onClick={copyToClipboard} className="developer-btn">{!copySuccess ? "Copy" : copySuccess}</p> */}
                            </div>
                            }
                                {/* <input type="text" ref={textAreaRef} defaultValue={color} readOnly/> */}
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default DeveloperSummary;