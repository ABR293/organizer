import React from 'react';
import style from './RedactWindow.module.css'
import classNames from "classnames";
import DataChanging from "./DataChenging";
//import Description from "../DealTree/Description/Description";
import DescriptionInput from "./DescriptionInput";

const RedactWindow = (props) => {
    console.log(props);

    let theme = props.theme;

    return (
        <div className={classNames(style.block, theme.redactWindow)}>
            <p className={style.name}>Name</p>
            <input type="text" className={style.nameBlock}/>
            <div className={style.impotance}>
                {!props.importance
                    ?
                    <button
                        className={theme.button}
                        onClick={() => {
                            props.setImportant(props.id)
                        }}
                    >
                        !
                    </button>
                    :
                    <button
                        className={theme.button}
                        onClick={() => {
                            props.cancelImportant(props.id)
                        }}
                    >
                        <i className="fa fa-window-close" aria-hidden="true"> </i>
                    </button>
                }
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
                            className={theme.button}
                            onClick={() => {
                                props.setShowInCalendar(props.id)
                            }}
                        >
                            <i className="fa fa-calendar-check-o" aria-hidden="true"> </i>
                        </button>
                        :
                        <button
                            className={theme.button}
                            onClick={() => {
                                props.cancelShowInCalendar(props.id)
                            }}
                        >
                            <i className="fa fa-calendar-times-o" aria-hidden="true"> </i>
                        </button>
                    }
                </div>
                :
                <button
                    className={classNames(style.calendarBTN, theme.dealMainDone)}
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
                <button
                    className={theme.button}
                    onClick={() => {props.close()}}
                >Ok
                </button>
            </div>

        </div>
    )
};

export default RedactWindow;
