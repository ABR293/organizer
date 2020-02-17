import React from 'react';
import {connect} from "react-redux";
import Deal from "./Deal";
import {
    addNewDeal, cancelImportant,
    cancelShowInCalendar,
    changeDescription,
    changeName, setImportant,
    setShowInCalendar
} from "../../../Redux/DealReducer";

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
                theme={this.props.theme}
                changeDescription={this.props.changeDescription}
                setShowInCalendar={this.props.setShowInCalendar}
                cancelShowInCalendar={this.props.cancelShowInCalendar}
                setImportant={this.props.setImportant}
                cancelImportant={this.props.cancelImportant}
            />
            )
    }
}

let mapStateToProps = (state) => {
    return {
        state,
        theme: state.settings.theme
    }
};

export default connect(mapStateToProps,
    {
        changeName,
        addNewDeal,
        changeDescription,
        setShowInCalendar,
        cancelShowInCalendar,
        setImportant,
        cancelImportant
    }
)(DealContainer);