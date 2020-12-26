import React from 'react';
import Moment from 'react-moment';
import { useCozaState } from './CozaProvider';
import { useHistory } from 'react-router-dom';
import { Button } from './Buttons';
import './Reports.css';

export default function Reports() {
    const [{ reports }] = useCozaState();
    const history = useHistory();
    console.log(reports);

    return ( 
        <div style={{ color: '#fff' }}> 
        <Button 
        classname='next'
        name='Back Home'
        url='' 
        onClick={() => history.push('/')}
        /><br />

            {(reports.length > 0) && 
            <span>All service reports</span>}
            {reports?.map((item, idx) => (
                <div key={idx}>
                {item.data.report &&
                <div className='report_div'>
                    <div>
                        name: {item.data.report.name}
                    </div>
                    <div>
                        email: {item.data.report.email}
                    </div>
                    <div>
                        gender: {item.data.report.gender}
                    </div>
                    <div>
                        birthday: {item.data.report.birthdate}
                    </div>
                    <div>
                        department: {item.data.report.department}
                    </div>
                    <div>
                    </div>
                    <div>
                        created: <Moment fromNow>{item.data.created}</Moment>
                    </div>
                </div>}
                </div>
            ))}
            {!reports.length && <span>No reports in record</span>}
            {/* {!reports.length && <span>Loading...</span>} */}
        </div>
    )
}
