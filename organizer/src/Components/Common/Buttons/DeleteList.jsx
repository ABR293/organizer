import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {connect} from "react-redux";
import {deleteList} from "../../../Redux/DealReducer";

const DeleteList = (props) => {

    let onclick = () => {props.deleteList(props.id)};

    return (
        <button
            onDoubleClick={onclick}
        >
            <i className="fa fa-trash" aria-hidden="true"> </i>
        </button>
    )
};
let mapStateToProps = (state) => {
    return {}
};
export default connect(mapStateToProps, {deleteList})(DeleteList);