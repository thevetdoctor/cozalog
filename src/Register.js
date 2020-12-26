/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import data from './data.js';
import { useCozaState } from './CozaProvider';
import './Register.css';
import { Button } from './Buttons';
import { useHistory } from 'react-router-dom';
import ImageUpload from './ImageUpload';
import { db } from "./firebase";
import { FaCheck, FaRegAngry } from 'react-icons/fa';
import Loader from 'react-loader-spinner';
 

export default function Register() {
    const [{ registrationData, departments }, dispatch] = useCozaState();
    const history = useHistory();
    const [submitted, setSubmitted] = useState(false);
    const [recorded, setRecorded] = useState(false);

    const logoUrl ='https://res.cloudinary.com/thevetdoctor/image/upload/v1608916860/coza/IMG_3527_jw2vgt.png';

    const validPhoneNumber = /[0-9]{11}/.test(registrationData.phone_number);
    const validEmail = /[a-zA-Z0-9]{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z0-9]{1,}/.test(registrationData.reg_email);

  let myOptions = data[2].split(',').map(x => x.toUpperCase());
    myOptions = ['Select your department', ...myOptions];
    const gender = ['Select your gender', 'Male', 'Female'];
    const maritalstatus = ['Select status', 'Married', 'Seperated', 'Widowed', 'Divorced'];
    const country = ['Select your country', 'Nigeria'];

    useEffect(() => {
        const addDepartments = async () =>
        await dispatch({
            type: 'ADD_DEPARTMENTS',
            departments: myOptions
        });
        addDepartments();
    }, []);
 
    console.log(registrationData);
 
    const handleRegister = async() => {
      // setRecorded(true);
      // return false;

      console.log('Submitting details');
        const validKeys = Object.keys(registrationData);
        const validValues = Object.values(registrationData);
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
        if(emptyAllFields.length) {
            console.log('Please fill all empty fileds');
            alert('Please fill all empty fileds');
            return false;
          }
        console.log('submitted');
        setSubmitted(true);
        setRecorded(true);

        const registrationDB = db.collection("registration_data");
        
        await registrationDB
        .doc(registrationData.reg_email)
        .set({
            registration_data: registrationData,
           created: Date.now()
        });

        await dispatch({
          type: "CLEAR_STATE"
        });
        
        await history.push("/")
    }

      return (
        <div className='form'>
          <img 
          src={logoUrl} 
          alt='logo'
          style={{width: '100px'}}
          />
            <p>
            COZA ILORIN WORKERS' APPLICATION
            </p>
            
            <ImageUpload />

            <Input
            label='First Name'
            type='text'
            name='first_name'
            value={registrationData.first_name}
            placeholder='Enter your firstname'
            />
           
            <Input
            label='Last Name'
            type='text'
            name='last_name'
            value={registrationData.last_name}
            placeholder='Enter your lastname'
            />

            <Input
            label='Email Address'
            type='email'
            name='reg_email'
            value={registrationData.reg_email}
            tag={validEmail ? 
            <FaCheck /> : 
            <FaRegAngry 
            style={{ color: 'red'}}
            />
          }
            placeholder='Enter your email address'
            />

            <Input
            label='Phone Number'
            type='tel'
            name='phone_number'
            value={registrationData.phone_number}
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            maxLength={11}
            tag={validPhoneNumber ? 
            <FaCheck /> : 
            <FaRegAngry 
            style={{ color: 'red'}}
            />
          }
            placeholder='Enter your phone number'
            />
            <small style={{ marginTop: '-3.2em'}}>
              Sample: 080-1234-5678 
            </small>

            <Select
            label='Gender'
            name='reg_gender'
            value={registrationData.reg_gender}
            options={gender} 
            />

            <Input
            label='Date of birth'
            type='date'
            name='reg_birth_date'
            value={registrationData.reg_birth_date}
            />       

            <TextArea
            label='Contact Address'
            type='text'
            name='contact_address'
            value={registrationData.contact_address}
            placeholder='Enter your contact address ?'
            />  

            <Select
            label='Marital Status'
            name='marital_status'
            value={registrationData.marital_status}
            options={maritalstatus} 
            />

          {registrationData.marital_status === 'Married' &&
            <Input
            label='Spouse Name'
            type='text'
            name='spouse_name'
            value={registrationData.spouse_name}
            placeholder='Spouse name (if married)'
            />
          }

          {registrationData.marital_status === 'Married' &&
            <Input
            label='Wedding Anniversary'
            type='date'
            name='wedding_date'
            value={registrationData.wedding_date}
            />
          }

            <Input
            label='Occupation'
            type='text'
            name='occupation'
            value={registrationData.occupation}
            placeholder='Please enter your occupation'
            />
{/* 
            <Select
            label='Campus (Select One)'
            name='campus'
            value={registrationData.campus}
            options={campus} 
            /> */}

            <Select
            label='Country'
            name='country'
            value={registrationData.country}
            options={country} 
            />

            <Select
            label='Department'
            name='reg_department'
            value={registrationData.reg_department}
            options={departments} 
            />

            {recorded ? <div style={{height: '96vh', marginTop: '-120vh', marginBottom: '-1em', zIndex: 1, width: '100vw', backgroundColor: '#000', color: '#fff', textAlign: 'center', fontSize: '2em', paddingTop: '5em'}}>
              Your data has been recorded
            </div>:
            <div>{!submitted ? 
            <Button 
            classname='next'
            name='Submit'
            url='' 
            onClick={handleRegister}
            />
            :
            <Loader 
            type='ThreeDots'
            color='#00bfff'
            height={80} 
            width={80} 
            />}
          </div>}
        </div>
    )
}
