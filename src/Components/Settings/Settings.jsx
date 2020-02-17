import React, {useEffect} from 'react';
import style from './Settings.module.css';
import theme1 from '../Common/Theme1.module.css';
import theme2 from '../Common/Theme2.module.css';
import theme3 from '../Common/Theme3.module.css';

const Settings = (props) => {

    useEffect(() => {
        document.title = `Настройки`;
    });

    return (
        <>
            <div className={style.block}>
                <h2>Настройки</h2>
                <div className={style.item}>
                    <p>Сменить тему</p>
                    <div className={style.buttonBlock}>
                        <button
                            className={theme1.button}
                            onClick={() => props.setTheme(1)}
                        >Dark Red</button>
                        <button
                            className={theme2.button}
                            onClick={() => props.setTheme(2)}
                        >Grey Blue</button>
                        <button
                            className={theme3.button}
                            onClick={() => props.setTheme(3)}
                        >Forrest</button>
                    </div>

                </div>
            </div>
        </>
    )
};
export default Settings;