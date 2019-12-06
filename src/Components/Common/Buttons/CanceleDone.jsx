import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from "react-redux";
import {cancelDone} from "../../../Redux/DealReducer";


const CancelDoneDeal = (props) => {

    let onclick = () =>
    {props.cancelDone(props.id);
        if(props.make){props.make()}
    };

    return (
        <button
            //className={style.button}
            onClick={onclick}
        >
            <i className="fa fa-external-link-square" aria-hidden="true"> </i>
        </button>
    )
};
let mapStateToProps = () => {
    return {}
};

export default connect(mapStateToProps, {cancelDone})(CancelDoneDeal);