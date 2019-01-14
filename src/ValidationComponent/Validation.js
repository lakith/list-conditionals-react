import React from 'react';

const validation = (props) => {

    let message = null;

    if(props.text === 0){
        message = "No Text";
    } else if(props.text <= 5){
        message = "Too Short";
    } else if(props.text <= 10 && props.text > 5){
        message = "avereage";
    } else if(props.text >10){
        message = "perfect";
    }

    return (
    <div className = "Validation">
        <p>
            <label> message </label> &nbsp;&nbsp;&nbsp;
            {message}
        </p>
    </div>
    );
}

export default validation;