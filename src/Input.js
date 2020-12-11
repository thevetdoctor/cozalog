import React, { useState, useEffect, useRef } from 'react';
import './Input.css';
import { useCozaState } from './CozaProvider';


export default function Input(props) {
    const [ name, setName ] = useState('');
    const [{ stateData }, dispatch] = useCozaState();
    const [ checked, setChecked ] = useState(false);
    const nameRef = useRef();

    useEffect(() => {
        console.log(name);
        console.log(nameRef.current.value, checked, stateData);
        // nameRef.current.focus();
        nameRef.current.value = name;
        setName(name);
    }, [name]);

    const handleInputChange = (e) => {
                const target = e.target;
                const value = target.type === 'radio' ? target.checked : target.value;
                // const value = target.type === 'checkbox' ? target.checked : target.value;
                const name = target.name;
            
                console.log(target.type, name, value, target.value);
                if(checked) setChecked(true);
                dispatch({
                    type: 'ADD_DATA',
                    data: 'oo'
                });
              } 

    return (
        <div>
            <input
            type={props.type}
            name={props.name}
            ref={nameRef}
            placeholder={props.placeholder}
            onChange={handleInputChange}
            checked={props.checked}
            required
            />
        </div>
    )
}
