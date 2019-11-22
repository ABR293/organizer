import React from 'react';
import style from './Settings.module.css'


const Settings = (props) => {
    return (

        <div className={style.block}>
            <h2>Настройки</h2>

            <div className={style.item}><p>Скрывать выполненные Дела</p><input type="radio" name='да'/></div>
        </div>

    )
};
export default Settings;