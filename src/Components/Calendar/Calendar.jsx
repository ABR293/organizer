import React from 'react';
import style from './Calendar.module.css'
import classNames from "classnames";



const Calendar = (props) => {

    console.log(props);
    console.log(props.data);

    const DeployData = (data) => {
        let NewData = [...data];
        console.log(NewData);
        data.forEach((item) => {
            if(item.children.length !== 0){
                NewData = [...NewData, ...item.children, ...DeployData(item.children)];
                console.log(NewData)
            }
        });
        return NewData;
    };

    console.log(props.data);
    let data2 = DeployData(props.data);
    console.log(data2);

    let theme=props.theme;

    let week = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
    console.log(theme);
    let DaysR = props.days.map(
        (day) => {
            return (
                <div className={classNames(style.day, theme.calendarDay)}>
                    <div className={classNames(style.day__date, theme.calendarDay__block)}>
                        <div className={style.day__date__info}>
                            <p>{day.toLocaleDateString()}</p>
                            <p>{week[day.getDay()]} </p>
                        </div>

                    </div>
                    <div className={classNames(style.day__list, theme.calendarDay__block)}>

                    </div>
                </div>
            )
        }
    );

    return (
        <div className={classNames(style.block, theme.scrollbar)}> <div>{DaysR}</div> </div>
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