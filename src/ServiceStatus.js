/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Input from './Input';
import Select from './Select';
import './ServiceStatus.css';
import { useCozaState } from './CozaProvider';
 

export default function ServiceStatus() {
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
            <p>
            HOW WAS TODAY'S SERVICE ?
            </p>

            <div className='input_section'>
                <label>Were you in church today ?</label>    
                <Select 
                name='isPresent'
                options={status} />
            </div>

            <div className='input_section'>
                <label>Message Title</label>
                <Input
                type='text'
                name='message_title'
                placeholder="What's today's message title"
                />
            </div>

            <div className='input_section'>
                <label>Message Summary</label>
                <Input
                type='text'
                name='message_summary'
                placeholder='Can you give the message summary ?'
                />           
            </div>

            <div className='input_section'>
                <label>Message Summary</label>
                <Input
                type='text'
                name='message_summary'
                placeholder='Can you give the message summary ?'
                />           
            </div>
        </div>
    )
}
