import React from 'react';
import style from './Button.module.css'
import 'font-awesome/css/font-awesome.min.css';

const ShowInfDeal = (props) => {
    return (
        <button
            className={style.button}
        >
            <i className="fa fa-search" aria-hidden="true"> </i>
        </button>
    )
};
export default ShowInfDeal;