import React, { useRef, useState } from 'react';

const CopyExample = () => {
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
    }
    return (
        <div>
            {
                document.queryCommandSupported('copy') &&
                <div>
                    <button onClick={copyToClipboard}>Copy</button> 
                    {copySuccess}
                </div>
            }
            <form>
                <textarea
                ref={textAreaRef}
                defaultValue='#FF0000'
                />
            </form>
        </div>
    );
};

export default CopyExample;