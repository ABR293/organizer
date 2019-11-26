import React from 'react';
import style from './Button.module.css'
import 'font-awesome/css/font-awesome.min.css';

const ShowDescription = (props) => {
    return (
        <button
            className={style.button}
            onClick={props.make}
        >
            ?
        </button>
    )
};
export default ShowDescription;