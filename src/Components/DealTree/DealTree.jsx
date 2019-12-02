import React from 'react';
import style from './DealTree.module.css'
import {Route} from "react-router-dom";
import ListMenu from "./ListMenu";
import ListContainer from "./List/ListContainer";


const DealTree = (props) => {

    return (
        <div className={style.block}>
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








