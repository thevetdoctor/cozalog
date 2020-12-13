import React from 'react';
import { Link } from 'react-router-dom';
import './FooterNav.css';

export default function NavBar(props) {
    return (
        <div className='footer_nav'>
            <Link to={props.back}>
                {props.backTag}
            </Link>
            <Link to={props.next}>
                {props.nextTag}
            </Link>
        </div>
    )
}
