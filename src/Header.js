/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from "./firebase";
import DateComponent from './DateComponent';
import { useCozaState } from './CozaProvider';
import { auth } from "./firebase";
import { Button } from './Buttons';

export default function Header() {
    const [{ user }, dispatch] = useCozaState();
    const [reports, setReports] = useState([]);
    const [registrations, setRegistrations] = useState([]);
    const [reportsLength, setReportsLength] = useState(0);;
    const [registrationsLength, setRegistrationsLength] = useState(0);;
    const history = useHistory();


    const reportsOnClick = () => {
        console.log('Going to reports page');
        history.push('/reports');
    }

    const registrationsOnClick = () => {
        console.log('Going to registrations page');
        history.push('/registrations');
    }
    
    const handleRegister = () => {
        console.log('Going to register page');
        history.push('/register');
    }
    
    const enterOnClick = () => {
        console.log('Going to profile page');
        history.push('/profile');
    }

    // const handleAuthenticaton = () => {
    //   if (user) {
    //     auth.signOut();
    //   }
    // }
    // const login = !user ? '/login' : '';

    // const handleLogin = (e) => {
    //     const name = e.target.name.toLowerCase();
    //     console.log('Go to Login', name);
    //     if(name === 'signin') {
    //         history.push('login');
    //     } else {
    //         handleAuthenticaton();
    //         history.push('');
    //     }
    // }

    console.log(user?.email);

    useEffect(() => {
        const getReports = async() => {
        if (user) {
        // const dbColl = db.collection("service_reports");

        await db.collection("service_reports")
        .doc(user?.uid)
        .collection('reports')
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
            // console.log(snapshot, user.uid);
            // snapshot.docs.forEach(doc => dbColl.doc(doc.id).delete());
            
            const result = snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }));

            setReports(result);
            setReportsLength(result.length);
        });
        // console.log(reports);
        await dispatch({
            type: 'ADD_REPORTS',
            reports
        });
        await db.collection("registration_data")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
            const registrations = snapshot.docs.map(doc => ({
                registration_data: doc.data()
            }));
            setRegistrations(registrations);
            setRegistrationsLength(registrations.length);
        });
        console.log(registrations);
        await dispatch({
            type: 'ADD_REGISTRATIONS',
            registrations
        });
    } else {
        console.log('error');
    }
    }
    getReports();

    }, [reportsLength, registrationsLength]);

    return (
        <div>
           <h3>
             Welcome to COZA
            </h3>
            <p>We love and celebrate you</p><br />
            <> Pastor Ken Habuhrajan</><br /><br />
           <DateComponent />
            <br /><br />
            <p>Are you a worker ?</p>
            <br /><br />
            {/* <Link to={login}>
                {!user ? 
                <span>
                    SignIn
                </span>
                : 
                <span 
                onClick={handleAuthenticaton}>
                    SignOut
                </span>}
            </Link> */}
            {/* <Button 
            classname='plain'
            name={!user ? 'SignIn' : 'SignOut'}
            url='' 
            onClick={handleLogin}
            /> */}
            {!user && 
            <Button 
            classname='prev'
            name='Please Register'
            url='' 
            onClick={handleRegister}
            />}
            {user && 
            <Button 
            classname='prev'
            name='Reports'
            url='' 
            onClick={reportsOnClick}
            />}
            {user && 
            <Button 
            classname='prev'
            name='Registrations'
            url='' 
            onClick={registrationsOnClick}
            />}
            {user && 
            <Button 
            classname='next'
            name='Enter'
            url='' 
            onClick={enterOnClick}
            />}
            {/* <br />
            <br />
            {[0, 1, 2, 3, 4].filter(x => !x).map(y => (
                y
            ))}
            <br />
            {[...new Set([0, 1, 1, 2, 3, 4, 4, 5])].map(y => (
                y
            ))} */}
        </div>
    )
}
