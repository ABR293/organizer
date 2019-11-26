import React from 'react';
import style from './Menu.module.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink} from "react-router-dom";

const Menu = (props) => {


    return (
        <nav className={style.menu}>
            <NavLink
                to='/calendar'
                className={style.btn}
                activeClassName={style.activbtn}
            ><i className="fa fa-calendar" aria-hidden="true"> </i></NavLink>
            <NavLink
                to='/dealTree'
                className={style.btn}
                activeClassName={style.activbtn}
            ><i className="fa fa-book" aria-hidden="true"> </i></NavLink>
            <NavLink
                to='/settings'
                className={style.btn}
                activeClassName={style.activbtn}
            ><i className="fa fa-cog" aria-hidden="true"> </i></NavLink>
        </nav>
    )
};

export default Menu;