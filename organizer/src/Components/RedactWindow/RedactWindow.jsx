
import React from 'react';
import style from './ReductWindow.module.css'
import classNames from "classnames";
import {ThemeStyleHOC} from "../Common/ThemeStyleHoc";
import DataChanging from "./DataChenging";
//import Label from "../DealTree/Label/Label";

const RedactWindow = (props) => {
    console.log(props);

    let theme = props.theme;
    let close = () => {props.close()};
    return(
        <div className={style.backdrop}>
            <div className={classNames(style.block, theme.redactWindow)}>
                    <p className={style.name}>Name</p>
                    <input type="text" className={style.nameBlock}/>
                <div className={style.impotance}>
                    <button>!</button>
                </div>
                    <p className={style.date}>Data</p>
                    <div className={style.firstDate}><DataChanging id={props.id} date={props.startDate} type={'s'}/></div>
                    <div className={style.lastDate}><DataChanging id={props.id} date={props.endingDate} type={'e'}/></div>
                    <button className={style.calendarBTN}>SC</button>

                <div className={style.descriptionBlock}>
                    <p className={style.descriptionBlock__name}>Description</p>
                    <textarea className={style.descriptionBlock__input}/>
                </div>
                <div className={style.resultBlock} >
                    <button onClick={close}>Ok</button>
                </div>

            </div>
        </div>
    )
};

export default ThemeStyleHOC(RedactWindow);
