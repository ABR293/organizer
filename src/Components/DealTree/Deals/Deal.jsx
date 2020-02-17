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
import RedactWindow from "../../RedactWindow/RedactWindow";
import ReactDOM from "react-dom";
import Modal from "../../Common/Modal/Modal";
import Description from "../Description/Description";

const Deal = (props) => {

    let [showSubDeal, setShowSubDeal] = useState(false);

    let changeShowSubDeal = () =>{
        showSubDeal ? setShowSubDeal(false) : setShowSubDeal(true)
    };

    let [isRedactWindowOpen, setRedactWindowOpen] = useState(false);
    let toggleRedactWindow = () => {setRedactWindowOpen(!isRedactWindowOpen)};


    let [isDescriptionOpen, setDescriptionOpen] = useState(false);
    let toggleDescription = () => {setDescriptionOpen(!isDescriptionOpen)};

    let theme = props.theme;

    console.log(props);

    //let e = true;

    return (
        <div className={style.dealBlock}>
            <div>
                {isRedactWindowOpen && ReactDOM.createPortal(
                    <Modal>
                        <RedactWindow
                        theme={theme}
                        close={toggleRedactWindow}
                        id={props.id}
                        name={props.name}
                        isDone={props.done}
                        description={props.description}
                        importance={props.importance}
                        startDate={props.startDate}
                        endingDate={props.endingDate}
                        isShowInCalendar={props.isShowInCalendar}
                        subpropss={props.children}
                        changeDescription={props.changeDescription}
                        setShowInCalendar={props.setShowInCalendar}
                        cancelShowInCalendar={props.cancelShowInCalendar}
                        setImportant={props.setImportant}
                        cancelImportant={props.cancelImportant}
                        />
                        />
                    </Modal>,
                    document.body
                )}
                {props.description && isDescriptionOpen &&  ReactDOM.createPortal(
                    <Modal>
                        <Description
                            description={props.description}
                            theme={theme}
                            close={toggleDescription}
                        />
                    </Modal>,
                    document.body
                )}
            </div>
            <div className={!props.isDone ? classNames(style.dealMain, theme.dealMain) :classNames(style.dealMain, theme.dealMainDone)} >

                {/*Button of subDeals*/}

                <div className={style.openBtn}>
                    {
                        props.subdeals.length === 0 ?
                            <AddNewDeal id ={props.id} make={changeShowSubDeal}
                            /> :
                            <OpenTree make={changeShowSubDeal} isShow={showSubDeal}/>
                    }
                </div>

                {/*Name of Deal*/}

                <div className={style.dealName}>
                    <Label
                        name={props.name}
                        id={props.id}
                    />
                </div>

                {/*Importance block*/}

                <div className={classNames(style.dealImportance, theme.importance)} >
                    {props.importance && <p>!</p>}
                </div>



                {/*Buttons, witch helps, to operate deal*/}

                <div className={style.dealMenu}>
                    {! props.isDone ? <RedactDeal make={toggleRedactWindow}/> : <RedactDeal disabled='disabled'/>}
                    {! props.is && props.description ? <ShowDescription make={toggleDescription}/> : <ShowDescription disabled='disabled'/>}
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