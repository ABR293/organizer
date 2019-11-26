import React from 'react';
import style from './Button.module.css'
import 'font-awesome/css/font-awesome.min.css';

const RedactDeal = (props) => {
    return (
        <button
            className={style.button}
            onClick={props.make}
        >
            <i className="fa fa-pencil" aria-hidden="true"> </i>
        </button>
    )
};
export default RedactDeal;