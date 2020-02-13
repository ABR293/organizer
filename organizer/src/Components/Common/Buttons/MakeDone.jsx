import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from "react-redux";
import {makeDone} from "../../../Redux/DealReducer";


const MakeDoneDeal = (props) => {

    let onclick = () =>
    {props.makeDone(props.id);
        if(props.make){props.make()}
    };

    return (
        <button
            //className={style.button}
            onClick={onclick}
        >
            <i className="fa fa-check" aria-hidden="true"> </i>
        </button>
    )
};
let mapStateToProps = () => {
    return {}
};

export default connect(mapStateToProps, {makeDone})(MakeDoneDeal);
