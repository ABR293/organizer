import React from 'react';
import {connect} from "react-redux";
import Calendar from "./Calendar";



class CalendarContainer extends React.Component{

    render(){

        const DeployData = (data) => {
            let NewData = [...data];
            console.log(NewData);
            data.forEach((item) => {
                if(item.children.length !== 0){
                    NewData = [...NewData, ...item.children, ...DeployData(item.children)];
                    console.log(NewData)
                }
            });
            return NewData;
        };

        return(
            <Calendar
                theme={this.props.theme}
                days={this.props.days}
                data={DeployData(this.props.data)}
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