import React from 'react';
import style from './Button.module.css'
import {deleteDeal} from "../../../Redux/DealReducer";
import {connect} from "react-redux";

const DeletDeal = (props) => {

    let onclick = () => {props.deleteDeal(props.id)};

    return (
        <button
            //className={style.button}
            onClick={onclick}
        >
            <i className="fa fa-trash" aria-hidden="true"> </i>
        </button>
    )
};
let mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {deleteDeal})(DeletDeal);