import React from 'react'
import "./NotFound.css";
import { Link } from 'react-router-dom';

export default function NotFound() {


    return (
        <div className="notfound">
            <h2>Oooops!!</h2>
            <p>
                Something went wrong
            </p>
                <Link to='/' className='btn'>
                    Go to Home page
                </Link>
        </div>
    )
}
