import React from 'react';
import style from './Menu.module.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import theme from "../Common/Theme";

const Menu = () => {


    return (
        <nav className={style.menu}>

            <div><NavLink
                to='/calendar'
                className={classNames(style.menu__item, theme.menuItem)}
                activeClassName={classNames(style.menu__item, theme.menuItemActive)}
            ><i className="fa fa-calendar" aria-hidden="true"> </i></NavLink></div>

            <NavLink
                to='/dealTree'
                className={classNames(style.menu__item, theme.menuItem)}
                activeClassName={classNames(style.menu__item, theme.menuItemActive)}
            ><i className="fa fa-book" aria-hidden="true"> </i></NavLink>
            <NavLink
                to='/settings'
                className={classNames(style.menu__item, theme.menuItem)}
                activeClassName={classNames(style.menu__item, theme.menuItemActive)}
            ><i className="fa fa-cog" aria-hidden="true"> </i></NavLink>
        </nav>
    )
};

export default Menu;