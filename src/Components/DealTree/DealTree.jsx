import React from 'react';
import style from './DealTree.module.css'
import {Route} from "react-router-dom";
import ListMenu from "./ListMenu";
import ListContainer from "./List/ListContainer";


const DealTree = (props) => {



/*    let Save = () => {
        let userData = 'userData';
        let JsonData = JSON.stringify(props.data);
        console.log('надеюсь записалось'+ props.data);
        localStorage.setItem(userData, JsonData);
    };*/



    return (
        <div className={style.block}>
            <div className={style.list}>
                <Route path={'/dealtree/:listId?'}
                       render={() => <ListContainer dataP={props.data}/>}
                />
            </div>

            <div className={style.listMenu}>
                <ListMenu data={props.data} />
            </div>
        </div>
    )
};
export default DealTree;








