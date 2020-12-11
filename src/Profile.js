import React, { useState, useEffect } from 'react';
import Input from './Input';
import Select from './Select';
import data from './data.js';
import './Profile.css';
import { useCozaState } from './CozaProvider';
 

export default function Profile() {
    const [{ stateData }, dispatch] = useCozaState();

    const myOptions = data.split(',').map(x => x.toUpperCase());

    useEffect(() => {
        console.log(stateData);
    }, []);

      return (
        <div className='form'>
            <p>
            COZA ILORIN MID-WEEK SERVICE REPORT
            </p>

            <div className='input_section'>
                <label>Name</label>
                <Input
                type='text'
                name='name'
                placeholder='Enter your name'
                />
            </div>

            <div className='input_section'>
                <label>Email</label>
                <Input
                type='email'
                name='email'
                placeholder='Enter your email'
                />           
            </div>
            
            <div className='input_section'>
                <div className='radio'>
                    <label>Male</label>
                    <Input
                    type='radio'
                    name='gender'
                    defaultValue='Male'
                    />
                    <label>Female</label>
                    <Input
                    type='radio'
                    name='gender'
                    defaultValue='Female'
                    />
                </div>
            </div>
            <div className='input_section'>
                <p>Choose your Department</p>    
                <Select options={myOptions} />
            </div>
        </div>
    )
}
