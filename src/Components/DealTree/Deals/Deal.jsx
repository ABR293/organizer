import React, {useState} from 'react';
import style from './Deal.module.css'
import 'font-awesome/css/font-awesome.min.css';
import RedactDeal from "../../Common/Buttons/RedactDeal";
import ShowDescription from "../../Common/Buttons/ShowDescription";
import MakeDoneDeal from "../../Common/Buttons/MakeDone";
import OpenTree from "../../Common/Buttons/OpenTree";
import AddNewDeal from "../../Common/Buttons/AddNewDeal";
import Label from "../Label";
import DeletDeal from "../../Common/Buttons/DeletDeal";
import CancelDoneDeal from "../../Common/Buttons/CanceleDone";
import SubList from "./subList";
import classNames from "classnames";
import theme from "../../Common/Theme";

const Deal = (props) => {
    let ShowS = () => {console.log(showSubDeal)};

    let [showSubDeal, setShowSubDeal] = useState(false);

    let changeShowSubDeal = () =>{
        showSubDeal ? setShowSubDeal(false) : setShowSubDeal(true)
    };
    return (
        <div className={style.dealBlock}>
            <div className={!props.isDone ? classNames(style.dealMain, theme.dealMain) :classNames(style.dealMain, theme.dealMainDone)} >
                <div className={style.openBtn}>
                    {
                        props.subdeals.length === 0 ?
                        <AddNewDeal id ={props.id} make={changeShowSubDeal}
                        /> :
                        <OpenTree make={changeShowSubDeal} isShow={showSubDeal}/>
                    }
                </div>
                <div className={style.dealName}>
                    <Label
                        name={props.name}
                        id={props.id}
                    />
                </div>
                <div className={style.dealMenu}>
                    {! props.isDone ? <RedactDeal make={ShowS}/> : <RedactDeal disabled='disabled'/>}
                    {! props.isDone ? <ShowDescription make={ShowS}/> : <ShowDescription disabled='disabled'/>}
                    {! props.isDone ? <MakeDoneDeal id={props.id}/> : <CancelDoneDeal id={props.id}/>}
                    <DeletDeal id={props.id}/>
                </div>
            </div>
             <div  className={showSubDeal ? classNames(style.subDealsBlock, theme.subDealsBlock): style.sadDealsBlockNone}>
                 {props.subdeals.length === 0 ? null : <SubList id={props.id} listBody={props.subdeals}/>}
               </div>
        </div>
    )
};
export default Deal;