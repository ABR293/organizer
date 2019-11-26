import React, {useState} from 'react';
import style from './Deal.module.css'
import 'font-awesome/css/font-awesome.min.css';
import RedactDeal from "../../Common/Buttons/RedactDeal";
import ShowDescription from "../../Common/Buttons/ShowDescription";
import MakeDoneDeal from "../../Common/Buttons/MakeDone";
import OpenTree from "../../Common/Buttons/OpenTree";
import AddNewDeal from "../../Common/Buttons/AddNewDeal";
import List from "../List/List";
import Label from "../Label";

const Deal = (props) => {

    let printE = () =>{console.log('e')};
    let ShowS = () => {console.log(showSubDeal)};

    let [showSubDeal, setShowSubDeal] = useState(false);

    let changeShowSubDeal = () =>{
        showSubDeal ? setShowSubDeal(false) : setShowSubDeal(true)
    };



    return (
        <div className={style.dealBlock}>
            <div className={style.dealMain}>
                <div className={style.openBtn}>
                    {props.subdeals.length === 0 ?
                        <AddNewDeal make={ShowS}/> :
                        <OpenTree make={changeShowSubDeal}/>
                    }
                </div>
                <div className={style.dealName}><Label name={props.name}/></div>
                <div className={style.dealMenu}>
                    <RedactDeal make={ShowS}/>
                    <ShowDescription make={ShowS}/>
                    <MakeDoneDeal make={ShowS}/>
                </div>
            </div>
             <div  className={showSubDeal ? style.subDealsBlock : style.sadDealsBlockNone}>
                 {props.subdeals.length === 0 ? null : <List listBody={props.subdeals}/>}
                    <AddNewDeal make={printE}/>
               </div>
        </div>
    )
};
export default Deal;