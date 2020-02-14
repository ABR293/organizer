import React, {useState} from 'react';
import {DescriptionChangingHOC} from "./DescriptionInputHOC";

const DescriptionInput = (props) => {
    let description;
    let onDescriptionChange = (element) => {
        return (description = element.currentTarget.value)
    };
    let updateDescription = () => {
        props.changeDescription(props.id, description);
    };
    return(
            <textarea
                onBlur={updateDescription}
                defaultValue={props.description}
                onChange={onDescriptionChange}
            />
    )
};

export default DescriptionChangingHOC(DescriptionInput);