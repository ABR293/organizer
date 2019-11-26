import React, {useState} from 'react';
import style from "./Label.module.css";

const Label = (props) => {

    let [isActiv, setActiv]=useState(false);

    let changeActivity = () => {
        isActiv ? setActiv(false) : setActiv(true);
    };
    return(
        isActiv ?
            <input
                className={style.name}
                type="text" placeholder='название'
                onBlur={changeActivity}
                autoFocus={true}
            />
            :
            <p className={style.name} onDoubleClick={changeActivity}>{props.name}</p>
    )
};

export default Label;