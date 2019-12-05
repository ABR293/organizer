import React from 'react';
import style from './Calendar.module.css'
//import Modal from 'modal';
// import Settings from "../Settings";
// import * as ReactDOM from "react-dom";
// import DealTree from "../DealTree";
// import Portal from "../Common/Portal/Portal";


const Calendar = (props) => {
    let d = new Date();
    //let d2 = d.toLocaleDateString();
    console.log(d);
    return (
        <div className={style.block}>
            <div>
               {/* <Portal children={Card} >

                </Portal>*/}
            </div>
        </div>
    )
};
export default Calendar;


/*
const Card = () => {
    return(
        <div className={style.cardArea}>
            <div className={style.cardBlock}>
                <h1>HEHEHEHYYYY!!!!</h1>
                <h2>UPIACHKA!!</h2>
            </div>
        </div>
    );
};*/

