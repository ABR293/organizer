import React from 'react';
import {connect} from "react-redux";
import DealTree from "./DealTree";


class DealTreeContainer extends React.Component {




    render() {

        console.log(this.props);

        return (
            <DealTree
                data={this.props.data}
            />)
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.data
    }
};




export default connect(mapStateToProps)(DealTreeContainer);



