import React, { useState, useEffect } from 'react';
import Input from './Input';
import Select from './Select';
import data from './data.js';
import './Form.css';
import { useCozaState } from './CozaProvider';

 

export default function Form() {
    const [{ stateData }, dispatch] = useCozaState();
    const [ isPresent, setIsPresent ] = useState(false);
    const [ numberOfGuests, setNumberOfGuests ] = useState(0);

    const myOptions = data.split(',').map(x => x.toUpperCase());

    useEffect(() => {
        console.log(stateData);
    }, []);


    const handleInputChange = (e) => {
            const target = e.target;
            const value = target.type === 'radio' ? target.checked : target.value;
            // const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
        
            console.log(target.defaultValue, name, value);
            dispatch({
                type: 'ADD_DATA',
                data: myOptions
            });
    
            if(name === 'isPresent') {
            setIsPresent(value);
            dispatch({
                type: 'IS_PRESENT',
                value
            });
            }
            if(name === 'numberOfGuests') {
                setNumberOfGuests(value);
                dispatch({
                    type: 'GUESTS_NUM',
                    value
                })
            }
          }    
      
      return (
        <div className='form'>
            <label>Name</label>
            <Input
            type='text'
            name='name'
            placeholder='Enter your name'
            onChange={handleInputChange} 
            />
            <label>Email</label>
            <Input
            type='email'
            name='email'
            placeholder='Enter your email'
            onChange={handleInputChange} 
            />           
            <label>Tick (If you were in church)</label>
            <Input
            type='checkbox'
            name='isPresent'
            checked={isPresent}
            onChange={handleInputChange} 
            />
            <div className='radio'>
                <label>Male</label>
                <Input
                type='radio'
                name='gender'
                defaultValue='Male'
                onChange={handleInputChange} 
                />
                <label>Female</label>
                <Input
                type='radio'
                name='gender'
                defaultValue='Female'
                onChange={handleInputChange} 
                />
            </div>
            <h3>Please select your unit</h3>    
            <Select options={myOptions} />
            <form>
                <label>
                Number of guests:
                <input
                    name="numberOfGuests"
                    type="number"
                    value={numberOfGuests}
                    onChange={handleInputChange} />
                </label>
            </form>    
        </div>
    )
}
