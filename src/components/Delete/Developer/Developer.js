import React, { useState, useEffect} from 'react';
import './Developer.css';
import DeveloperSummary from '../DeveloperSummary/DeveloperSummary';

const Developer = () => {
    const [developers, setDeveloper] = useState([]);

    useEffect( () => {
        fetch('./bgcolor.JSON')
        .then(res => res.json())
        .then(data => setDeveloper(data))
    }, [])

    return (
        <div className="developer-container">
            <div className="developer">
                {
                    developers.map(developer => <DeveloperSummary
                        developer={developer}
                        key={developer.id}>
                    </DeveloperSummary>)
                }
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Developer;