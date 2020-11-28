import React, { useState, useEffect } from 'react';
import './Select.css';

export default function Select(props) {
    const [ name, setName ] = useState('');

    useEffect(() => {
        console.log(name);
    }, [name]);

    return (
        <div>
            <select 
            name={props.name}
            onChange={(e) => setName(e.target.value)}
            >
                {props.options.map((item, idx) => (
                    <option key={idx} value={item}>{item}</option> 
                ))}
            </select>
        </div>
    )
}
