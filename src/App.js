import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import {BrowserRouter, Route} from "react-router-dom";
import Calendar from "./Components/Calendar";
import DealTree from "./Components/DealTree";
import Settings from "./Components/Settings";
import DealTreeContainer from "./Components/DealTree/DealTreeContainer";



function App() {

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

export default App;
