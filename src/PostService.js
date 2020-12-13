/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Input from './Input';
import Select from './Select';
import './PostService.css';
import { useCozaState } from './CozaProvider';
 

export default function PostService() {
    const [{ stateData }, dispatch] = useCozaState();

    const status = ['Absent', 'Present'];

    console.log(stateData);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('submitted');
    //     <Redirect to='/' />;
    //     console.log('submitted');
    // }

      return (
        <div className='form'>
            <p> POST SERVICE </p>

            <div className='input_section'>
                <label>Post Service Prayer By: </label>
                <Input
                type='text'
                name='message_title'
                placeholder="Prayer By: "
                />
            </div>

            <div className='input_section'>
            …Raising a Take Over Generation
            <img 
            src='/Four-Jumping-For-Joy-Silhouette.png'
            alt='Praise Image'
            />
            </div>
        </div>
    )
}
