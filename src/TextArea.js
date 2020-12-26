/* eslint-disable no-unused-vars */
import React from 'react';
import './TextArea.css';
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
            {/* {stateData[props.name] === '' ? */}
            {/* <div> */}
                <label>{props.label}</label>
                <textarea
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={handleInputChange}
                required
            />
            {/* </div> */}
            {/* : */}
            {/* <p>{stateData[props.name]}</p>} */}
        </div>
    )
}
