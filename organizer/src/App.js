import React from 'react';
import './App.css';
import style from './App.module.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import {Route} from "react-router-dom";
import Calendar from "./Components/Calendar";
import DealTreeContainer from "./Components/DealTree/DealTreeContainer";
import {initData} from "./Redux/DealReducer";
import {connect} from "react-redux";
import classNames from 'classnames'
import SettingsContainer from "./Components/Settings/SettingsContainer";
import {initSettings} from "./Redux/SettingsReducer1";
import CalendarContainer from "./Components/Calendar/CalendarContainer";
import {initCalendar} from "./Redux/CalendarReducer";

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
        console.log(this.props);
        let theme = this.props.theme;

        return (
            <div className={classNames(style.app, theme.app)}>
                <header className={classNames(style.header, theme.header)}><Header/></header>
                <nav className={classNames(style.menu, theme.menu)}><Menu/></nav>
                <div className={classNames(style.content, theme.content, theme.scrollbar)}>
                    <Route path='/calendar'
                           render={() => <CalendarContainer/>}
                    />
                    <Route path='/DealTree'
                           render={() => <DealTreeContainer/>}
                    />
                    <Route path='/Settings'
                           render={() => <SettingsContainer/>}
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
        settings: state.settings
    }
};

export default connect(mapStateToProps, {initData,initSettings,initCalendar})(App);
