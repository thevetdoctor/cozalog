import React from 'react';
import Moment from 'react-moment';
import { useCozaState } from './CozaProvider';
import { useHistory } from 'react-router-dom';
import { Button } from './Buttons';
import './Registrations.css';

export default function Registrations() {
    const [{ registrations }] = useCozaState();
    const history = useHistory();
    const registrationsMapped = registrations.map(x => x.registration_data);
    console.log(registrationsMapped);

    const imgStyle = { 
        width: '5em', 
        height: '5em', 
        margin: '0.5em 1em',
        borderRadius: '2.5em' 
    };

    return ( 
        <div style={{ color: '#fff' }}> 
        <Button 
        classname='next'
        name='Back Home'
        url='' 
        onClick={() => history.push('/')}
        /><br /> 

            {(registrationsMapped.length > 0) && 
            <span>All registrations</span>}
            {registrationsMapped?.map((item, idx) => (
                <div key={idx}>
                <div className='registration_div'>
                    <div>
                       <img 
                       src={item.registration_data.image_url}
                       style={imgStyle}
                       alt='Profile'
                       />
                    </div>
                    <div>
                        name: {item.registration_data.first_name} {item.registration_data.last_name}
                    </div>
                    <div>
                        email: {item.registration_data.reg_email}
                    </div>
                    <div>
                        mobile: {item.registration_data.phone_number}
                    </div>
                    <div>
                        birthday: {item.registration_data.reg_birth_date}
                    </div>
                    <div>
                        contact address: {item.registration_data.contact_address}
                    </div>
                    <div>
                        department: {item.registration_data.reg_department}
                    </div>
                    <div>
                        marital status: {item.registration_data.marital_status}
                    </div>
                    <div>
                        spouse name: {item.registration_data.spouse_name}
                    </div>
                    <div>
                        wedding anniversary: {item.registration_data.wedding_date}
                    </div>
                    <div>
                        gender: {item.registration_data.reg_gender}
                    </div>
                    <div>
                        campus: {item.registration_data.campus}
                    </div>
                    <div>
                        country: {item.registration_data.country}
                    </div>
                    <div>
                        occupation: {item.registration_data.occupation}
                    </div>
                    <div>
                        created: <Moment fromNow>{item.created}</Moment>
                    </div>
                </div>
                </div>
            ))}
            {!registrations.length && <span>No registrations in record</span>}
        </div>
    )
}
