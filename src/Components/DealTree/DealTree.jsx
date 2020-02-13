import React from 'react';
import style from './DealTree.module.css'
import {Route} from "react-router-dom";
import ListMenu from "./ListMenu";
import ListContainer from "./List/ListContainer";
import classNames from "classnames";
//import theme from "../Common/Theme";


const DealTree = (props) => {

    let theme = props.theme;

    return (
        <div className={classNames(style.block, theme.scrollbar)}>
            <div className={style.list}>
                <Route path={'/dealtree/:listId?'}
                       render={() => <ListContainer dataP={props.data}/>}
                />
            </div>

            <div className={style.listMenu}>
                <ListMenu data={props.data} addNewList={props.addNewList} changeName={props.changeName}/>
            </div>
        </div>
    )
};
export default DealTree;








