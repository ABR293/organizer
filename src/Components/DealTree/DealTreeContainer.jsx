import React from 'react';
import {connect} from "react-redux";
import DealTree from "./DealTree";


class DealTreeContainer extends React.Component {


    /*getElement(id, state) {

        let element = state.find(el => el.id == id.slice(0, 2));
        for (let i = 2; i < id.length; i = i + 2) {
            element = element.children.find(el => el.id == id.slice(0, i + 2));
        }
        return element
    };*/

    changeElementName(id, state, newName) {

        let element = state.find(el => el.id == id.slice(0, 2));
        let Nstate = {
            ...state}

        };
        Nstate = Nstate.map((el) => {
            if (el.id = element.id) {
                el.name = newName
            }
        });
        // if (id.length > 2) {
        //     for (let i = 2; i < id.length; i = i + 2) {
        //         element = element.children.find(el => id.slice(0, i + 2));
        //     }
        // }
        return Nstate
    }







    render() {
        let testState = this.props.data;

        console.log(testState);
        console.log(this.changeElementName('45', testState, 'Sport is Super'));

        /*console.log(this.getElement('324268', this.props.data));
        console.log(this.getElement('4521', this.props.data));*/
        return (
            <>
                <DealTree
                    data={this.props.data}
                />
            </>)
    };
}

let mapStateToProps = (state) => {
    return {
        data: state.data
    }
};




export default connect(mapStateToProps)(DealTreeContainer);



