import React from 'react';
import {connect} from "react-redux";
import Settings from "./Settings";
import { setTheme } from "../../Redux/SettingReducer";




class SettingsContainer extends React.Component{

    render(){

        return(
            <Settings
                setTheme={this.props.setTheme}
                theme={this.props.theme}

            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state
    }
};

export default connect(mapStateToProps,{setTheme})(SettingsContainer);