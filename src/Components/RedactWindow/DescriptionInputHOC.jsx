import React from 'react';
import {connect} from 'react-redux'
import {changeDescription} from "../../Redux/DealReducer";



export const DescriptionChangingHOC = (Component) => {
    class DescriptionInputHOC extends React.Component{
        render(){
            return(<Component {...this.props} />)
        }
    }
    let mapStateToProps = (state) => {
        return { }
    };
    return connect (mapStateToProps, {changeDescription})(DescriptionInputHOC);
};