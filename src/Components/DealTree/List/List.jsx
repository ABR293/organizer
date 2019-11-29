import React from 'react';
import DealContainer from "../Deals/DealContainer";
//import style from './List.module.css';
//import {withRouter} from "react-router-dom";
//import Deal from "../Deals";



const List = (props) => {



    let Deals = props.listBody.map((deal)=>{
        console.log(deal);
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
         <div>
             {Deals}
         </div>
    )
};

//let  withRouterList = withRouter(List);

export default List;





