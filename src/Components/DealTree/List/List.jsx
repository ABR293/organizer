import React from 'react';
import DealContainer from "../Deals/DealContainer";
import AddNewDeal from "../../Common/Buttons/AddNewDeal";
import style from "./List.module.css"

const List = (props) => {


    let Deals = props.listBody.map((deal) => {
        return (
            <DealContainer
                key={deal.id}
                id={deal.id}
                name={deal.name}
                isDone={deal.done}
                subdeals={deal.children}
            />
        )
    });
    return (
        <div className={style.list}>
            <div>
                {Deals}
            </div>
            <div className={style.add}>
                <p>Add New Deal</p>
                <AddNewDeal id={props.id}/>
            </div>
            <div className={style.bottomPad}> </div>
        </div>
    )
};

//let  withRouterList = withRouter(List);

export default List;





