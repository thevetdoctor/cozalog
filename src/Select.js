import React from 'react';
import './Select.css';

export default function Select(props) {
    return (
        <div>
            <select>
                {props.options.map((item, idx) => (
                    <option key={idx} value={item}>{item}</option> 
                ))}
            </select>
        </div>
    )
}
