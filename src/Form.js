import React from 'react';
import Input from './Input';
import Select from './Select';
import data from './data.js';

export default function Form() {

    const myOptions = data.split(',').map(x => x.toUpperCase());
    console.log(myOptions);

    return (
        <div>
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
            />           
            <Input
            type='radio'
            name='Male'
            />
            <Input
            type='radio'
            name='Female'
            />
            <Select options={myOptions} />     
        </div>
    )
}
