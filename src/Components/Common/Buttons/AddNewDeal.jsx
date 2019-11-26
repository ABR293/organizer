import React from 'react';
import style from './Button.module.css'


const AddNewDeal = (props) => {
    return (
        <button
            className={style.button}
            onClick={props.make}
        >
            +
        </button>
    )
};
export default AddNewDeal;