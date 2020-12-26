/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Input from './Input';
import './PostService.css';
import PraiseImage from './PraiseImage';
import FooterNav from './FooterNav';
import { useHistory } from 'react-router-dom';
import { useCozaState } from './CozaProvider';
import { db } from "./firebase";
 

export default function PostService() {
    const [{ stateData, user }, dispatch] = useCozaState();
    const [disabled, setDisabled] = useState(false);
    const history = useHistory();

    const prevOnClick = (e) => {
      console.log('Going back', e.target);
      history.push('/servicestatus');
  }

  const submitForm = async () => {
    const validKeys = Object.keys(stateData);
    const validValues = Object.values(stateData);
    const presentStatus = validValues.splice(5, 1)[0];
    const personalDetails = validValues.slice(0, 5)
    const emptyPersonalDetails = personalDetails.filter(b => !b);
    const emptyAllFields = validValues.filter(x => !x);
    console.log('Submitting form')
    console.log('validKeys: ', validKeys, 'presentStatus: ', presentStatus, 'personalDetails: ', personalDetails, 'emptyAllFields: ', emptyAllFields, 'emptyPersonalDetails: ', emptyPersonalDetails);
    if(!presentStatus && emptyPersonalDetails.length) {
      console.log('Please fill all personal details');
      alert('Please fill all personal details');
      return false;
    }
    if(presentStatus && emptyAllFields.length) {
        console.log('Please fill all empty fileds');
        alert('Please fill all empty fileds');
        return false;
      }

        console.log('submitted');

        const reportDB = db.collection("service_reports");
        
        await reportDB
        .doc(user?.uid)
        .collection('reports')
        .doc(`${Math.floor(Math.random() * 10 ** 12)}`)
        .set({
            report: stateData,
           created: Date.now()
        });

        await dispatch({
          type: "CLEAR_STATE"
        });

        await history.push("/")
    }

      return (
        <div className='form'>
          <p> POST SERVICE </p>
          <Input
          label='Post Service Prayer By: '
          type='text'
          name='post_service_prayer'
          value={stateData.post_service_prayer}
          placeholder="Prayer By: "
          />
          <PraiseImage />

          <FooterNav
            prevName='Back'
            prevUrl='/'
            prevOnClick={prevOnClick}
            nextName='Submit'
            nextUrl='/servicestatus'
            nextOnClick={submitForm}
          />
        </div>
    )
}
