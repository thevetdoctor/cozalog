/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Input from './Input';
import Select from './Select';
import data from './data.js';
import './Profile.css';
import { useCozaState } from './CozaProvider';
import FooterNav from './FooterNav';
import { useHistory } from 'react-router-dom';
 

export default function Profile() {
    const [{ stateData, user, departments }, dispatch] = useCozaState();
    const history = useHistory();

    const myOptions = data[0].split(',').map(x => x.toUpperCase());
    const gender = ['', 'Male', 'Female'];

    useEffect(() => {
        const addData = async () =>
        await dispatch({
            type: 'ADD_DEPARTMENTS',
            departments: myOptions
        });
        addData();
    }, []);

    useEffect(() => {
        dispatch({
            type: 'ADD_EMAIL',
            data: user?.email
        });
    }, []);
    console.log(stateData);

    const prevOnClick = () => {
        console.log('Going back');
        history.push('/');
    }
    
    const nextOnClick = () => {
        console.log('Going forward');
        const validKeys = Object.keys(stateData);
        const validValues = Object.values(stateData);
        const presentStatus = validValues.splice(5, 1)[0];
        const personalDetails = validValues.slice(0, 5)
        const emptyPersonalDetails = personalDetails.filter(b => !b);
        const emptyAllFields = validValues.filter(x => !x);
        console.log('Submitting form')
        console.log('validKeys: ', validKeys, 'presentStatus: ', presentStatus, 'personalDetails: ', personalDetails, 'emptyAllFields: ', emptyAllFields, 'emptyPersonalDetails: ', emptyPersonalDetails);
        if(emptyPersonalDetails.length) {
          console.log('Please fill all personal details');
          alert('Please fill all personal details');
          return false;
        }
        // if(presentStatus && emptyAllFields.length) {
        //     console.log('Please fill all empty fileds');
        //     alert('Please fill all empty fileds');
        //     return false;
        //   }
        history.push('/servicestatus');
    }

      return (
        <div className='form'>
            <p>
            COZA ILORIN MID-WEEK SERVICE REPORT
            </p>

            <Input
            label='Name'
            type='text'
            name='name'
            value={stateData.name}
            placeholder='Enter your name'
            />

            {/* <Input
            label='Email'
            type='email'
            name='email'
            value={stateData.email}
            placeholder='Enter your email'
            />          */}
        
            <Input
            label='Birthdate'
            type='date'
            name='birthdate'
            value={stateData.birthdate}
            />           
        
            <Select
            label='Gender'
            name='gender'
            value={stateData.gender}
            options={gender} 
            />

            <Select
            label='Choose your department'
            name='department'
            value={stateData.department}
            options={departments} 
            />

            <FooterNav
            prevName='Back'
            prevUrl='/'
            prevOnClick={prevOnClick}
            nextName='Next'
            nextUrl='/servicestatus'
            nextOnClick={nextOnClick}
            // disabled={true}
            />
        </div>
    )
}
