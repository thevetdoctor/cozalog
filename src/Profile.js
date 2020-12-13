import React, { useEffect } from 'react';
import Input from './Input';
import Select from './Select';
import data from './data.js';
import './Profile.css';
import { useCozaState } from './CozaProvider';
 

export default function Profile() {
    const [{ stateData }, dispatch] = useCozaState();

    const myOptions = data.split(',').map(x => x.toUpperCase());
    const gender = ['Male', 'Female'];

    useEffect(() => {
        const addData = () =>
        dispatch({
            type: 'ADD_DEPARTMENTS',
            departments: myOptions
        });
        addData();
    }, []);
    console.log(stateData);

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
                <label>Birthdate</label>
                <Input
                type='date'
                name='birthdate'
                />           
            </div>
            
            <div className='input_section'>
            <label>Gender</label>    
                <Select 
                name='gender'
                options={gender} />
            </div>

            <div className='input_section'>
                <label>Choose your Department</label>    
                <Select 
                name='department'
                options={stateData.departments} />
            </div>
        </div>
    )
}
