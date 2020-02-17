import React from 'react';
import DealContainer from "../Deals/DealContainer";
import AddNewDeal from "../../Common/Buttons/AddNewDeal";
import style from "./List.module.css"
import classNames from "classnames";

const List = (props) => {

    let theme = props.theme;

    let Deals = props.listBody.map((deal) => {
        return (
            <DealContainer
                key={deal.id}
                id={deal.id}
                name={deal.name}
                isDone={deal.done}
                description= {deal.description}
                importance={deal.importance}
                startDate={deal.startDate}
                endingDate={deal.endingDate}
                isShowInCalendar={deal.isShowInCalendar}
                subdeals={deal.children}
            />
        )
    });
    return (
        <div className={style.list}>
            <div>
                {Deals}
            </div>
            <div className={classNames(style.add, theme.list)}>
                <p>Add New Deal</p>
                <AddNewDeal id={props.id}/>
            </div>
            <div className={style.bottomPad}> </div>
        </div>
    )
};

export default List;





