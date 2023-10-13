import React from 'react'
import '../styles/body.css'

import { useState } from 'react';

export default function Body() {

        const [isCardVisible, setCardVisible] = useState(false);
        const [isConversionComplete, setConversionComplete] = useState(false);
    
        const handleButtonClick = () => {
            
            setTimeout(() => {
                setConversionComplete(true);
                setCardVisible(true);
            }, 2000);
        };
    

    return (
        <div className='card-container'>
            <div className="card">
            <p>Select the mp3 file you want to convert to text</p>
                {isConversionComplete ? (
                    <p>Conversion successful! Your text file is ready.</p>
                ) : (
                    <div className='button-container'>
                        <button onClick={handleButtonClick}>Open file</button>
                    </div>
                )}
                {isCardVisible && !isConversionComplete && (
                    <div className='download-card'>
                        <div className="download-file">
                            {/* Content for the download card */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}