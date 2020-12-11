import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
           <h3>
             Welcome to COZA
            </h3>
            <p>We love and celebrate you</p>
            <p>Message by: Pastor Ken Habuhrajan</p>
            <Link to='/form'>
                Enter
            </Link>
        </div>
    )
}
