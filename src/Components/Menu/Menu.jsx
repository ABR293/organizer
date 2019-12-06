import React from 'react';
import style from './Menu.module.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink} from "react-router-dom";

const Menu = () => {


    return (
        <nav className={style.menu}>

            <div><NavLink
                to='/calendar'
                className={style.menu__item}
                activeClassName={style.menu__item__active}
            ><i className="fa fa-calendar" aria-hidden="true"> </i></NavLink></div>

            <NavLink
                to='/dealTree'
                className={style.menu__item}
                activeClassName={style.menu__item__active}
            ><i className="fa fa-book" aria-hidden="true"> </i></NavLink>
            <NavLink
                to='/settings'
                className={style.menu__item}
                activeClassName={style.menu__item__active}
            ><i className="fa fa-cog" aria-hidden="true"> </i></NavLink>
        </nav>
    )
};

export default Menu;