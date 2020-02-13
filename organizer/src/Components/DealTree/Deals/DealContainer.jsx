import React from 'react';
import {connect} from "react-redux";
import Deal from "./Deal";
import {addNewDeal, changeName} from "../../../Redux/DealReducer";




class DealContainer extends React.Component{

    render(){

        return(
            <Deal
                name = {this.props.name}
                id = {this.props.id}
                subdeals = {this.props.subdeals}
                addNewDeal = {this.props.addNewDeal}
                changeName = {this.props.changeName}
                isDone = {this.props.isDone}
                description= {this.props.description}
                importance={this.props.importance}
                startDate={this.props.startDate}
                endingDate={this.props.endingDate}
                isShowInCalendar={this.props.isShowInCalendar}
                subpropss={this.props.children}
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