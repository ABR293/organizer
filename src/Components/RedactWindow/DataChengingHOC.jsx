import React from 'react';
import {connect} from 'react-redux'
import {changeEndingDate, changeStartDate} from "../../Redux/DealReducer";



export const DataChangingHOC = (Component) => {
    class DataChangingHOC extends React.Component{
        render(){
            return(<Component {...this.props} />)
        }
    }
    let mapStateToProps = (state) => {
        return { }
    };
    return connect (mapStateToProps, {changeStartDate, changeEndingDate})(DataChangingHOC);
};

