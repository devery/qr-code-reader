import React from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from "react-router-dom";
import QrcodeFinderComponent from 'components/QrcodeFinder/QrcodeFinderComponent';
import './QrCodeReaderPage.styles.scss'



const QrCodeReaderView = () => {

    const navigate = useNavigate();

    return (
        <div className='qr-code-view '>
            <QrReader
                onResult={(result, error) => {
                    if (result) {
                        navigate(`/search/${result.getText()}`)
                    }
                    if (error) {
                        //TODO: alert error
                    }
                }}
                ViewFinder={QrcodeFinderComponent}
                constraints={{ facingMode: 'environment' }}
                containerStyle={{ width: '100%' }}
                videoContainerStyle={{ height: '100%' }}
                scanDelay={500}
            />
        </div>
    );
}
export default QrCodeReaderView;
