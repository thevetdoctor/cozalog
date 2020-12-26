import React from 'react';
// import { Link } from 'react-router-dom';
// import BackButton from './BackButton';
import { Button } from './Buttons';
import './FooterNav.css';

export default function FooterNav(props) {

    return (
        <div className='footer_nav'>
            <Button
            classname='prev'
            name={props.prevName}
            url={props.prevUrl} 
            onClick={props.prevOnClick}
            />
            <Button 
            classname='next'
            name={props.nextName}
            url={props.nextUrl} 
            onClick={props.nextOnClick}
            disabled={props.disabled}
            />
        </div>
    )
}
