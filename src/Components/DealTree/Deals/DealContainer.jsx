import React from 'react';
import {connect} from "react-redux";
import Deal from "./Deal";
import {addNewDeal, changeName} from "../../../Redux/DealReducer";




class DealContainer extends React.Component{

    render(){

        return(
            <Deal name={this.props.name}
                  id={this.props.id}
                  subdeals = {this.props.subdeals}
                  addNewDeal = {this.props.addNewDeal}
                  changeName = {this.props.changeName}
                  isDone = {this.props.isDone}
            />
            )
    }
}

let mapStateToProps = (state) => {
    return {
        state
    }
};

export default connect(mapStateToProps,{changeName,addNewDeal,})(DealContainer);