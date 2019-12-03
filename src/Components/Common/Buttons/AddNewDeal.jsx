import React from 'react';
import style from './Button.module.css'
import {addNewDealHOC} from "./AddNewDealHOC";


const AddNewDeal = (props) => {

    let onclick = () => {props.addNewDeal(props.id)};

    return (
        <button
            className={style.button}
            onClick={onclick}
        >
            +
        </button>
    )
};
export default addNewDealHOC(AddNewDeal);