/* eslint-disable no-unused-vars */
import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import './ServiceStatus.css';
import { useCozaState } from './CozaProvider';
import PraiseImage from './PraiseImage';
import FooterNav from './FooterNav';
import { useHistory } from 'react-router-dom';
import { db } from "./firebase";
 

export default function ServiceStatus() {
    const [{ stateData, user }, dispatch] = useCozaState();
    const history = useHistory();

    const status = ['', 'Present', 'Absent'];
    
    // const f = '';
    // console.log((f === 'Present') ? true : (f === 'Absent' ? false : null));
    
     console.log(stateData);

    const prevOnClick = () => {
        console.log('Going back');
        history.push('/profile');
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
        if(!presentStatus && emptyPersonalDetails.length) {
          console.log('Please fill all personal details');
          alert('Please fill all personal details');
          return false;
        }
        if(presentStatus && (emptyAllFields.length > 1)) {
            console.log('Please fill all empty fields');
            alert('Please fill all empty fileds');
            return false;
          }
        history.push('/postservice');
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
          return false;
        }
        if(presentStatus === null) {
            console.log('Were you in church today ?');
            alert('Were you in church today ?');
            return false;
          }
        if(presentStatus && emptyAllFields.length) {
            console.log('Please fill all empty fields');
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
const presentValue = (stateData.isPresent ? 'Present' : ((stateData.isPresent === false) ? 'Absent' : ''))

      return (
        <div className='form'>
            <p>
            HOW WAS TODAY'S SERVICE ?
            </p>

                <Select
                label='Were you in church today ?'
                name='isPresent'
                value={presentValue}
                options={status} />

           { stateData.isPresent && 
                <Input
                label='Message Title'
                type='text'
                name='message_title'
                value={stateData.message_title}
                placeholder="What's today's message title"
                />
            }

           { stateData.isPresent && 
                <TextArea
                label='Message Summary'
                type='text'
                name='message_summary'
                value={stateData.message_summary}
                placeholder='Can you give the message summary ?'
                />   
            }

           { !stateData.isPresent && 
            <div>
                <PraiseImage />
                <FooterNav
                prevName='Back'
                prevUrl='/'
                prevOnClick={prevOnClick}
                nextName='Submit'
                nextUrl='/servicestatus'
                nextOnClick={submitForm}
                disabled={true}
                />
            </div>}

            { stateData.isPresent &&
             <FooterNav
             prevName='Back'
             prevUrl='/profile'
             prevOnClick={prevOnClick}
             nextName='Next'
             nextUrl='/postservice'
             nextOnClick={nextOnClick}
             />
            }
        </div>
    )
}
