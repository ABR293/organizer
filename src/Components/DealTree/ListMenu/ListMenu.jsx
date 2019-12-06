import React from 'react';
import style from "./ListMenu.module.css";
import {NavLink} from "react-router-dom";
import Label from "../Label";
import {deleteList} from "../../../Redux/DealReducer";
import {connect} from "react-redux";
import DeleteList from "../../Common/Buttons/DeleteList";


const ListMenu = (props) => {


    let Lists = props.data.map((list)=>{
        return(
                <NavLink
                    to={'/dealtree/'+ list.id}
                    className={style.listMenu__item}
                    activeClassName={style.listMenu__item__active}
                    key={list.id}
                    id={list.id}
                >
                    <Label name={list.name} id={list.id}/>
                    <DeleteList id={list.id}/>
                </NavLink>
            )
    });
    return(
        <div className={style.listMenu}>
            {Lists}
            <span className={style.listMenu__newItem} onClick={props.addNewList} > <p>+</p> </span>
        </div>
    )
};
let mapStateToProps = () => {
    return{}
};

export default connect(mapStateToProps, {deleteList})(ListMenu);