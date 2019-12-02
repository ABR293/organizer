import React from 'react';
import DealContainer from "../Deals/DealContainer";
import AddNewDeal from "../../Common/Buttons/AddNewDeal";
//import style from './List.module.css';
//import {withRouter} from "react-router-dom";
//import Deal from "../Deals";



const List = (props) => {



    let Deals = props.listBody.map((deal)=>{
        return(
            <DealContainer
                key={deal.id}
                id={deal.id}
                name={deal.name}
                subdeals = {deal.children}
            />
        )
    });
    return (
        <>
         <div>
             {Deals}
         </div>
        <AddNewDeal id={props.id}/>
        </>
    )
};

//let  withRouterList = withRouter(List);

export default List;





