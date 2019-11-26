import React from 'react';
import style from './Button.module.css'
import 'font-awesome/css/font-awesome.min.css';

const DeleteDeal = (props) => {
    return (
        <button
            className={style.button}
        >
            <i className="fa fa-trash" aria-hidden="true"> </i>
        </button>
    )
};
export default DeleteDeal;