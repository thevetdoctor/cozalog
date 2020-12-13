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
            
                // console.log(name, value);
                dispatch({
                    type: `ADD_${name.toUpperCase()}`,
                    data: value
                });
              } 

    return (
        <div>
            {/* {stateData[props.name] === '' ?  */}
            <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={handleInputChange}
            required
            />
            {/* : */}
            {/* <p>{stateData[props.name]}</p>} */}
        </div>
    )
}
