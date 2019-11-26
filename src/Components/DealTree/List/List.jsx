import React from 'react';
//import style from './List.module.css';

//import {withRouter} from "react-router-dom";
import Deal from "../Deals";


const List = (props) => {



    let Deals = props.listBody.map((deal)=>{
        return(
            <Deal
                name={deal.name}
                key={deal.id}
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





