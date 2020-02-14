import React, {useState} from 'react';
import style from "./DataChanging.module.css";
import {DataChangingHOC} from "./DataChengingHOC";

const DataChanging = (props) => {

    console.log(props);

    let nDate = props.date ? props.date : null;

    let [isActiv, setActiv]=useState(false);
    let [date, setDate]  = useState(props.date);

    let changeActivity = () => {
        setActiv(!isActiv);
    };
    let onDateChange = (element) => {
        setDate(element.currentTarget.value);
    };
    let updateDate = () => {
        props.type === "s" && props.changeStartDate(props.id, date);
        props.type === "e" && props.changeEndingDate(props.id, date);
        changeActivity();
    };

    return(
        isActiv ?
            <input
                className={style.date}
                type="date"
                onBlur={updateDate}
                autoFocus={true}
                defaultValue={nDate}
                onChange={onDateChange}
            />
            :
            <p className={style.date} onClick={changeActivity}>{props.date ? new Date(props.date).toDateString() : 'NICHT DATA!'}</p>
    )
};

export default DataChangingHOC(DataChanging);