import React from 'react';
import './App.css';
import style from './App.module.css';
import theme from './Components/Common/Theme'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import {Route} from "react-router-dom";
import Calendar from "./Components/Calendar";
import Settings from "./Components/Settings";
import DealTreeContainer from "./Components/DealTree/DealTreeContainer";
import {initData} from "./Redux/DealReducer";
import {connect} from "react-redux";
import classNames from 'classnames'

class App extends React.Component {

    UNSAFE_componentWillMount() {
        this.props.initData()
    }

    componentDidUpdate() {
        localStorage.setItem('userData', JSON.stringify(this.props.data));
    }


    render() {
        console.log(theme);
        return (
            <div className={classNames(style.app, theme.app)}>
                <header className={classNames(style.header, theme.header)}><Header/></header>
                <nav className={classNames(style.menu, theme.menu)}><Menu/></nav>
                <div className={classNames(style.content, theme.content)}>
                    <Route path='/calendar'
                           render={() => <Calendar/>}
                    />
                    <Route path='/DealTree'
                           render={() => <DealTreeContainer/>}
                    />
                    <Route path='/Settings'
                           render={() => <Settings/>}
                    />
                </div>

                <footer className={classNames(style.footer, theme.footer)}><Footer/></footer>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        data:state.data
    }
};

export default connect(mapStateToProps, {initData})(App);
