import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const RedactDeal = (props) => {
    return (
        <button
            onClick={props.make}
        >
            <i className="fa fa-pencil" aria-hidden="true"> </i>
        </button>
    )
};
export default RedactDeal;