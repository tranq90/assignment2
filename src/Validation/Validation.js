import React from 'react';

const validation = (props) => {
    const textlength = props.inputLength;
    let validationMessage = "Text long enough";

    if (textlength <= 5) {
        validationMessage = (
            <div>
                <p>Text too short</p>
            </div>
        )
    }

    return (
        <div>
            {validationMessage}
        </div>
    )
}

export default validation;