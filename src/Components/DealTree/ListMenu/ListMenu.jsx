import React from 'react';
import style from "./ListMenu.module.css";
import {NavLink} from "react-router-dom";
import Label from "../Label";
import {deleteList} from "../../../Redux/DealReducer";
import {connect} from "react-redux";
import DeleteList from "../../Common/Buttons/DeleteList";
import classNames from "classnames";
import theme from "../../Common/Theme";


const ListMenu = (props) => {

    //let theme = props.theme;

    let Lists = props.data.map((list)=>{
        return(
                <NavLink
                    to={'/dealtree/'+ list.id}
                    className={classNames(style.listMenu__item, theme.menuItem)}
                    activeClassName={classNames(style.listMenu__item, theme.menuItemActive)}
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
let mapStateToProps = (state) => {
    return{
        theme: state.settings.theme
    }
};

export default connect(mapStateToProps, {deleteList})(ListMenu);