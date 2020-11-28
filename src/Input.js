import React, { useState, useRef, useEffect } from 'react';
import './Input.css';


export default function Input(props) {
    const [ name, setName ] = useState('');
    const [ checked, setChecked ] = useState(false);
    const nameRef = useRef();

    useEffect(() => {
        console.log(nameRef.current.value);
        // nameRef.current.focus();
        // nameRef.current.value = name;
    }, [name]);
const handleChange = (e) => {
    let { value, type } = e.target;
    console.log(value, type);
    if(type === 'checkbox') {
        value = e.target.checked;
        setName(value);
        setChecked(!checked);
    }
    setName(value);
}

    return (
        <div>
            {(props.type && ((props.type === 'text') || (props.type === 'email'))) &&
            (<div>
                <label>
                    {props.name}
                </label>
            </div>)}
            <input
            type={props.type}
            name={props.name}
            ref={nameRef}
            placeholder={props.placeholder}
            onChange={handleChange}
            checked={checked}
            required
            />
            {(props.type && ((props.type !== 'text') && (props.type !== 'email'))) &&
            (<label>
                {props.name}
            </label>)}
        </div>
    )
}
