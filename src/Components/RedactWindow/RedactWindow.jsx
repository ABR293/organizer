import React from 'react';
import style from './RedactWindow.module.css'
import classNames from "classnames";
import DataChanging from "./DataChenging";
import Description from "../DealTree/Description/Description";
import DescriptionInput from "./DescriptionInput";

const RedactWindow = (props) => {
    console.log(props);

    let theme = props.theme;

    return (
        <div className={classNames(style.block, theme.redactWindow)}>
            <p className={style.name}>Name</p>
            <input type="text" className={style.nameBlock}/>
            <div className={style.impotance}>
                <button>!</button>
            </div>
            <p className={style.date}>Data</p>
            <div className={style.firstDate}>
                <DataChanging id={props.id} date={props.startDate} type={'s'}/>
            </div>
            <div className={style.lastDate}>
                <DataChanging id={props.id} date={props.endingDate} type={'e'}/>
            </div>

            {props.startDate && props.endingDate ?
                <div className={style.calendarBTN} >
                    {!props.isShowInCalendar
                        ?
                        <button
                            onClick={() => {
                                props.setShowInCalendar(props.id)
                            }}
                        >
                            SK
                        </button>
                        :
                        <button
                            onClick={() => {
                                props.cancelShowInCalendar(props.id)
                            }}
                        >
                            DSK
                        </button>
                    }
                </div>
                :
                <button
                    className={style.calendarBTN}
                    disabled={true}
                >
                    SK
                </button>}


            <div className={style.descriptionBlock}>
                <p className={style.descriptionBlock__name}>Description</p>
                <div className={style.descriptionBlock__input}>
                    <DescriptionInput
                        id={props.id}
                        description={props.description}
                    />
                </div>

            </div>
            <div className={style.resultBlock}>
                <button onClick={() => {
                    props.close()
                }}>Ok
                </button>
            </div>

        </div>
    )
};

export default RedactWindow;
