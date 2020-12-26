/* eslint-disable no-unused-vars */
import React from 'react';
import './Input.css';
import { useCozaState } from './CozaProvider';

export default function Input(props) {
    const [{ stateData }, dispatch] = useCozaState();

    const handleInputChange = (e) => {
                const target = e.target;
                const name = target.name;
                const value = target.value;
            
                console.log(name, value);
                dispatch({
                    type: `ADD_${name.toUpperCase()}`,
                    data: value
                });
              } 

    return (
        <div className='input_section'>
            {/* {stateData[props.name] === '' ?  */}
            {/* <div className='input_section'> */}
            <label>{props.label}</label>
            <input
            type={props.type}
            name={props.name}
            value={props.value}
            pattern={props.pattern}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            onChange={handleInputChange}
            required
            />
            <span style={{ marginTop: '0.7em', display: 'inline'}}>{props.tag}</span>
            {/* : */}
            {/* <p>{stateData[props.name]}</p>} */}
        {/* </div> */}
        </div>
    )
}
