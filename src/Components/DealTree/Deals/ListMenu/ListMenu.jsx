import React from 'react';
import style from "./ListMenu.module.css";
import {NavLink} from "react-router-dom";
import Label from "../Label";



const ListMenu = () => {

    let TestListData=[
        {id:1, name: 'Sport' },
        {id:2, name: 'Work' },
        {id:3, name: 'Health'},
        {id:4, name: 'Finance'},
        {id:5, name: 'Hobbi'}
        ];

    let Lists = TestListData.map((list)=>{
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