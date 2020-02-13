import React from 'react';
import {connect} from "react-redux";
import Deal from "./Deal";
import {addNewDeal, changeName} from "../../../Redux/DealReducer";




class DealContainer extends React.Component{

    render(){

        return(
            <Deal
                name={this.props.name}
                id={this.props.id}
                subdeals = {this.props.subdeals}
                addNewDeal = {this.props.addNewDeal}
                changeName = {this.props.changeName}
                isDone = {this.props.isDone}
                theme={this.props.theme}
            />
            )
    }
}

let mapStateToProps = (state) => {
    return {
        theme: state.settings.theme
    }
};

export default connect(mapStateToProps,{changeName,addNewDeal,})(DealContainer);