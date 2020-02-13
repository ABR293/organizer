import React from 'react';
import {connect} from "react-redux";
import Calendar from "./Calendar";



class CalendarContainer extends React.Component{
    render(){
        return(
            <Calendar
                theme={this.props.theme}
                days={this.props.days}
                data={this.props.data}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        days: state.calendar.days,
        data: state.data
    }
};

export default connect(mapStateToProps, {})(CalendarContainer);