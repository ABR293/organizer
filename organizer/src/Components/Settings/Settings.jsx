import React from 'react';
import style from './Settings.module.css'


const Settings = (props) => {


    return (

        <div className={style.block}>
            <h2>Настройки</h2>
            <div className={style.item}>
                <p>Сменить тему</p>
                <div className={style.themeBlock}>
                    <button onClick={() => props.changeTheme(1)}>Dark Red</button>
                    <button onClick={() => props.changeTheme(2)}>Blue</button>
                </div>

            </div>
            <div className={style.item}><p>Скрывать выполненные Дела</p><input type="radio" name='да'/></div>
        </div>

    )
};
export default Settings;