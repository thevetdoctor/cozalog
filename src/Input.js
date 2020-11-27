import React, { useState, useRef, useEffect } from 'react';
import './Input.css';


export default function Input(props) {
    const [ name, setName ] = useState('');
    const nameRef = useRef();

    useEffect(() => {
        console.log(name, nameRef);
        // nameRef.current.focus();
        // nameRef.current.value = name;
    }, [name]);

    return (
        <div>
            <label>
                {props.name}
            </label>
            <input
            type={props.type}
            name={props.name}
            ref={nameRef}
            placeholder={props.placeholder}
            onChange={() => setName(nameRef.current.value)}
            required
            />
        </div>
    )
}
