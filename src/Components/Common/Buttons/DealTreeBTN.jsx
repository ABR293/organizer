import React from 'react';
import style from './Button.module.css'
import 'font-awesome/css/font-awesome.min.css';

const DealTreeBTN = (props) => {
    return (
        <button
            className={style.button}
        >
            <i className="fa fa-book" aria-hidden="true"> </i>
        </button>
    )
};
export default DealTreeBTN;