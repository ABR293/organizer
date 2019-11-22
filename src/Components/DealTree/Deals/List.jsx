import React from 'react';
import style from './List.module.css';
import Deal from "./Deal";






const List = (props) => {

    let Deals = props.list.map((deal)=>{
        return(
            <Deal
                name={deal.name}
                key={deal.id}
                subdeals = {deal.ChildrenDeals}
            />
        )
    });
    return (
         <div>
             {Deals}
         </div>
    )
};


export default List;





