import React, { useState } from 'react';
import '../styles/body.css';

export default function Body() {
    const [isCardVisible, setCardVisible] = useState(false);
    const [isConversionComplete, setConversionComplete] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isConversionStarted, setConversionStarted] = useState(false);

    const handleOpenFileClick = () => {

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'audio/mpeg';
        fileInput.onchange = (e) => {
            setSelectedFile(e.target.files[0]);
            setCardVisible(true);
        };
        fileInput.click();
    };

    const handleConvertClick = () => {

        setConversionStarted(true);
        setTimeout(() => {
            setConversionComplete(true);
        }, 2000);
    };

    const handleCancelClick = () => {
        setSelectedFile(null);
        setCardVisible(false);
        setConversionComplete(false);
        setConversionStarted(false);
    };

    const handleConvertNextClick = () => {
        setSelectedFile(null);
        setCardVisible(false);
        setConversionComplete(false);
        setConversionStarted(false);
        handleOpenFileClick();
    };

    const handleDownloadClick = () =>{
        
    }

    return (
        <div className='card-container'>
            <div className="card">
                {isConversionComplete ? (
                    <div className='convertedfile'>
                        <p className='convertedtext'>Conversion successful! Your text file is ready to dowmload.</p>
                        <div className='afterconversionbutton'>
                            <button onClick={handleDownloadClick}>Download</button>
                            <button onClick={handleConvertNextClick}>convert Next</button>
                        </div>

                    </div>
                ) : (
                    <div>
                        {selectedFile ? (
                            <div>
                                <p className='selectedfiletext'>Selected file: {selectedFile.name}</p>
                                {isConversionStarted ? (
                                    <div className='loading'>

                                        <div class="typing-indicator">
                                            <div class="typing-circle"></div>
                                            <div class="typing-circle"></div>
                                            <div class="typing-circle"></div>
                                            <div class="typing-shadow"></div>
                                            <div class="typing-shadow"></div>
                                            <div class="typing-shadow"></div>
                                        </div>

                                    </div>
                                ) : (
                                    <div className='button-container2'>
                                        <button onClick={handleConvertClick}>Convert</button>
                                        <button onClick={handleCancelClick}>Cancel</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className='button-container'>
                                <p className='selecttext'>select the file to convert to text</p>
                                <button onClick={handleOpenFileClick}>Open file</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
