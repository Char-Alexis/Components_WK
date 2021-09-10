import React from 'react';
import './DisplayName.css';

function DisplayName(props){
    return(
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
        </div>

    )
}

export default DisplayName;
