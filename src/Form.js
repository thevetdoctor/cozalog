import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import data from './data.js';
import './Form.css';

export default function Form() {
    const [ checked, setChecked ] = useState(false);

    // const myOptions = data.split(',').map(x => x.toUpperCase());
    const myOptions = data.split(',');
    console.log(myOptions.length);

    return (
        <div className='form'>
            <Input
            type='text'
            name='Name'
            placeholder='Enter your name'
            />
            <Input
            type='email'
            name='Email'
            placeholder='Enter your email'
            />           
            <Input
            type='checkbox'
            name='Tick Box (if present)'
            checked={false}
            />
            <div className='radio'>
                <Input
                type='radio'
                name='Male'
                value='gender'
                />
                <Input
                type='radio'
                name='Female'
                value='gender'
                />
            </div>
            <h3>Please select your unit</h3>    
            <Select options={myOptions} />     
        </div>
    )
}
