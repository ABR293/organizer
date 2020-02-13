import React from 'react';
import style from './Settings.module.css';


const Settings = (props) => {

    return (
        <>
            <div className={style.block}>
                <h2>Настройки</h2>
                <div className={style.item}>
                    <p>Скрывать выполненные Дела</p>
                    <input type="radio" name='да'/>
                </div>
                <div className={style.item}>
                    <p>Сменить тему</p>
                    <button onClick={() => props.setTheme(1)}>1</button>
                    <button onClick={() => props.setTheme(2)}>2</button>
                    <button onClick={() => props.setTheme(3)}>3</button>
                    <button onClick={() => props.setTheme(4)}>4</button>
                    <button onClick={() => props.setTheme(5)}>5</button>
                </div>
            </div>
        </>

    )
};
export default Settings;