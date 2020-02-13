import React from 'react';
import {connect} from 'react-redux'

export const ThemeStyleHOC = (Component) => {
    class ThemeStyleHOC extends React.Component{
        render(){
            return(<Component {...this.props} />)
        }
    }
    let mapStateToProps = (state) => {
        return {
            theme: state.settings.theme
        }
    };
    return connect (mapStateToProps, {})(ThemeStyleHOC);
};
