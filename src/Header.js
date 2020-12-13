import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
           <h3>
             Welcome to COZA
            </h3>
            <p>We love and celebrate you</p><br />
            <> Pastor Ken Habuhrajan</><br /><br />
            <>{new Date().toLocaleString()}</>
            <br /><br />
            <Link to='/profile'>
                Enter
            </Link>
        </div>
    )
}
