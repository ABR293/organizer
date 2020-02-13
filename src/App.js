import React from 'react';
import style from './App.module.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import {Route} from "react-router-dom";
//import Calendar from "./Components/Calendar";
import SettingsContainer from "./Components/Settings/SettingsContainer";
import DealTreeContainer from "./Components/DealTree/DealTreeContainer";
import {initData} from "./Redux/DealReducer";
import {connect} from "react-redux";
import classNames from 'classnames'
import {initSettings} from "./Redux/SettingReducer";
import {initCalendar} from "./Redux/CalendarReducer";
import CalendarContainer from "./Components/Calendar/CalendarContainer";

class App extends React.Component {

    UNSAFE_componentWillMount() {
        this.props.initData();
        this.props.initSettings();
        this.props.initCalendar();
    }

    componentDidUpdate() {
        localStorage.setItem('userData', JSON.stringify(this.props.data));
        localStorage.setItem('userSettings', JSON.stringify(this.props.settings));
    }


    render() {
        let theme = this.props.theme;

        return (
            <div className={classNames(style.app, theme.app)}>
                <header className={classNames(style.header, theme.header)}><Header/></header>
                <nav className={classNames(style.menu, theme.menu)}><Menu theme={theme}/></nav>
                <div className={classNames(style.content, theme.content)}>
                    <Route path='/calendar'
                           render={() => <CalendarContainer theme={theme} />}
                    />
                    <Route path='/DealTree'
                           render={() => <DealTreeContainer theme={theme}/>}
                    />
                    <Route path='/Settings'
                           render={() => <SettingsContainer />}
                    />
                </div>

                <footer className={classNames(style.footer, theme.footer)}><Footer/></footer>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        data:state.data,
        theme: state.settings.theme,
        settings: state.settings,
    }
};

export default connect(mapStateToProps, {initData, initSettings, initCalendar})(App);
