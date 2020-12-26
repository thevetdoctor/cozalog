/* eslint-disable no-unused-vars */
import React from 'react';
import './Select.css';
import { useCozaState } from './CozaProvider';

export default function Select(props) {
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
            <label>{props.label}</label>
            <select 
            name={props.name}
            value={props.value}
            onChange={handleInputChange}
            >
                {props.options.map((item, idx) => (
                    <option key={idx} value={item}>{item}</option> 
                ))}
            </select>
            {/* : */}
            {/* <p>{stateData[props.name]}</p>} */}
        </div>
    )
}
