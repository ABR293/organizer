import React from 'react';
import style from "./ListMenu.module.css";
import {NavLink} from "react-router-dom";
import Label from "../Label";



const ListMenu = (props) => {


    let Lists = props.data.map((list)=>{
        return(
                <NavLink
                    to={'/dealtree/'+ list.id}
                    className={style.listMenu__item}
                    activeClassName={style.listMenu__itemActiv}
                    key={list.id}
                >
                    <div><Label name={list.name}/></div>
                </NavLink>
            )
    });

    let printE = () => {console.log('E!')};

    return(
        <div className={style.listMenu}>
            {Lists}
            <button className={style.listMenu__newItem} onClick={printE}> + </button>
        </div>
    )
};

export default ListMenu;