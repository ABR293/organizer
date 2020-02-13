import React from 'react';
import {connect} from "react-redux";
import Settings from "./Settings";
import {changeTheme} from "../../Redux/SettingsReducer1";


class DealTreeContainer extends React.Component {


    render() {
        return (
            <>
                <Settings
                   changeTheme={this.props.changeTheme}
                />
            </>)
    };
}

let mapStateToProps = (state) => {
    return {
        settings: state.settings
    }
};

export default connect(mapStateToProps, {changeTheme})(DealTreeContainer);

