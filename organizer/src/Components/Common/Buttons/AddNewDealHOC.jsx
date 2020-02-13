import React from 'react';
import {connect} from 'react-redux'
import {addNewDeal} from "../../../Redux/DealReducer";
//import {addNewDeal} from "../../../Redux/DealReducer";



export const addNewDealHOC = (Component) => {
    class addNewDealHOC extends React.Component{
        render(){
            return(<Component {...this.props} />)
        }
    }
    let mapStateToProps = (state) => {
        return {
            data: state.data
        }
    };
    return connect (mapStateToProps, {addNewDeal})(addNewDealHOC);
};
