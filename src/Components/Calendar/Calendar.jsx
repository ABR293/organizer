import React from 'react';
import style from './Calendar.module.css'
import classNames from "classnames";
//import DealContainer from "../DealTree/Deals/DealContainer";
import Deal from "../DealTree/Deals";


const Calendar = (props) => {

    console.log(props);
    console.log(props.data);

    let theme = props.theme;

    let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    console.log(theme);


    let DaysR = props.days.map(
        (day) => {


             let foreNextDay = new Date();
            foreNextDay.setDate(day.getDate()-1);

            return (
                <div className={classNames(style.day, theme.calendarDay)} key={day}>
                    <div className={classNames(style.day__date, theme.calendarDay__block)}>
                        <div className={style.day__date__info}>
                            <p>{day.toLocaleDateString()}</p>
                            <p>{week[day.getDay()]} </p>
                        </div>

                    </div>
                    <div className={classNames(style.day__list, theme.calendarDay__block)}>

                        {props.data.map((item) => {
                            console.log(day.getTime());
                            console.log(item);
                            if (item.isShowInCalendar === true
                                && item.endingDate >= foreNextDay.getTime()
                                && item.startDate <= day.getTime()
                            ){

                                return (
                                    <Deal
                                        name = {item.name}
                                        id = {item.id}
                                        subdeals = {item.children}
                                        addNewDeal = {item.addNewDeal}
                                        changeName = {item.changeName}
                                        isDone = {item.done}
                                        description= {item.description}
                                        importance={item.importance}
                                        startDate={item.startDate}
                                        endingDate={item.endingDate}
                                        isShowInCalendar={item.isShowInCalendar}
                                        subpropss={item.children}
                                        theme={theme}
                                        changeDescription={item.changeDescription}
                                        setShowInCalendar={item.setShowInCalendar}
                                        cancelShowInCalendar={item.cancelShowInCalendar}
                                    />
                                )
                            }
                        })
                        }
                    </div>
                </div>
            )
        }
    );

    return (
        <div className={classNames(style.block, theme.scrollbar)}>
            <div>{DaysR}</div>
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