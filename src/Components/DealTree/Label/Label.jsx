import React, {useState} from 'react';
import style from "./Label.module.css";

const Label = (props) => {

    let [isActiv, setActiv]=useState(false);
    let [name, setName]  = useState(props.name);

    let changeActivity = () => {
        isActiv ? setActiv(false) : setActiv(true);
    };
    let onNameChange = (element) => {
        setName(element.currentTarget.value);
    };
    let updateName = () => {
        console.log(props);
        console.log(name);
        props.changeName(props.id, name);
        changeActivity();
    };

    return(
        isActiv ?
            <input
                className={style.name}
                type="text" placeholder='название'
                onBlur={updateName}
                autoFocus={true}
                defaultValue={name}
                onChange={onNameChange}
            />
            :
            <p className={style.name} onDoubleClick={changeActivity}>{name}</p>
    )
};

export default Label;