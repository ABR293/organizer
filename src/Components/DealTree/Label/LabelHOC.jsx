import React from 'react';
import {connect} from 'react-redux'
import {changeName} from "../../../Redux/DealReducer";



export const LabelHOC = (Component) => {
    class LabelHOC extends React.Component{
        render(){
            return(<Component {...this.props} />)
        }
    }
    let mapStateToProps = (state) => {
        return {
            data: state.data

        }
    };
    return connect (mapStateToProps, {changeName})(LabelHOC);
};

