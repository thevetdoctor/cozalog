import React from 'react';
import { Link } from 'react-router-dom';
import { db } from "./firebase";
import { useHistory } from 'react-router-dom';
import { useCozaState } from './CozaProvider';
import './FooterNav.css';

export default function BackButton(props) {
    const [{ stateData, user }, dispatch] = useCozaState();
    const history = useHistory();

    return (
           <Link to={props.back}>
               {props.backTag}
           </Link>
    )
}
