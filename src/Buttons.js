import React from 'react';
// import { db } from "./firebase";
// import { useCozaState } from './CozaProvider';
import './Buttons.css';

export const Button = (props) => {
// console.log(props);
  return (
      <button
      className={props.classname}
      type='button'
      name={props.name}
      url={props.url}
      onClick={props.onClick}
      disabled={props.disabled}
      >
          {props.name}
      </button>
    )
};
