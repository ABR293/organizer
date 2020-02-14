import React from "react";
import style from "./Description.module.css";
import classNames from "classnames";


const Description = (props) => {

    console.log(props);
    let theme = props.theme;

    return (
        <div
            className={style.backdrop}
            onClick={() => {
                props.close()
            }}
        >
            <div className={classNames(style.window, theme.redactWindow)}>
                   <p>{props.description}</p>
            </div>
        </div>
    );
};
export default Description;
