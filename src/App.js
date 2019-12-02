import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import {Route} from "react-router-dom";
import Calendar from "./Components/Calendar";
import Settings from "./Components/Settings";
import DealTreeContainer from "./Components/DealTree/DealTreeContainer";
import {initData, saveData} from "./Redux/DealReducer";
import {connect} from "react-redux";


class App extends React.Component {

    componentWillMount() {
        this.props.initData()
    }

    render() {
        return (
            <div className="app">
                <header className='header'><Header/></header>
                <nav className='menu'><Menu/></nav>
                <div className="content">
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

                <footer className="footer"><Footer/></footer>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.data
    }
};

export default connect(mapStateToProps, {saveData, initData})(App);
