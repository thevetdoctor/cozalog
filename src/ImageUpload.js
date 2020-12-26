/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useCozaState } from './CozaProvider';
import './ImageUpload.css';
import Loader from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';

export default function ImageUpload() {
    const [fileChosen, setFileChosen] = useState(null);
    const [{ registrationData }, dispatch] = useCozaState();
    const { image_url } = registrationData;
    const [loading, setloading] = useState(false);

    
    const handleUpload = async(e) => {
        const target = e.target;
        setloading(true);
        const fileSelected = target.files[0];
        const data = new FormData();
        const url = 'https://api.cloudinary.com/v1_1/thevetdoctor/image/upload';
        data.append('file', fileSelected);
        data.append('upload_preset', 'zunt8yrw');
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });
        const imgUrl = await res.json();
        setFileChosen(imgUrl.secure_url);
        if(imgUrl.secure_url) setloading(false);
    }
    
    useEffect(() => {
        (async() => {
            if(fileChosen) {
                console.log('Adding image_url to state');
                dispatch({
                    type: 'ADD_IMAGE_URL',
                    data: fileChosen
                });
            }
        })();
    },[fileChosen]);
    console.log(fileChosen, image_url);
  
    const inputStyle = { 
        display: 'flex',
        borderRadius: '0.4em',
        margin: '1.5em',
        fontSize: '0.8em',
        padding: '0.5em',
        backgroundColor: 'cadetblue',
        width: '10em',
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    };
    
    const imgStyle = { 
        width: '5em', 
        height: '5em', 
        margin: '0.5em 1em',
        borderRadius: '2.5em',
        display: (loading || image_url) ? '' : 'none'
    };

    return (
        <div className='image-upload'>
            <label 
            style={inputStyle}
            >
               {!fileChosen || image_url ? 'Upload your picture' : 'Uploaded'}
            <input 
            type='file'
            name='fileName'
            placeholder=''
            onChange={handleUpload}
            style={{ display: 'none' }}
            />
            </label>
 
            {!loading ?
            <img 
            src={fileChosen || image_url}
            style={imgStyle}
            alt='' 
            /> :
            <Loader 
            type='ThreeDots'
            color='#00bfff'
            height={80} 
            width={80} 
            />}
        </div>
    )
}
