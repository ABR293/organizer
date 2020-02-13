import React from 'react';
import {connect} from "react-redux";
import {addNewDeal} from "../../../Redux/DealReducer";


const AddNewDeal = (props) => {

    let onclick = () =>
    {props.addNewDeal(props.id);
     if(props.make){props.make()}
    };
    return (

        <button
            //className={style.button}
            onClick={onclick}
        >
            +
        </button>
    )
};
let mapStateToProps = () => {
    return {}
};

export default connect(mapStateToProps, {addNewDeal})(AddNewDeal);
