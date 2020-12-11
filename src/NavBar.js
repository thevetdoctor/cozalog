import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div>
           <h3>
             Welcome to COZA
            </h3>
            <Link to='/'>
                Home
            </Link>
        </div>
    )
}
