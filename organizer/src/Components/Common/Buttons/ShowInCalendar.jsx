import React, {useState} from 'react';
import style from './Button.module.css';
import 'font-awesome/css/font-awesome.min.css';


const ShowInCalendar = (props) => {

    const [isShow, setIsShow] = useState(false);
    let ChangeIsShow = () => {
        isShow ? setIsShow(false) : setIsShow(true)
    };
    let printE = () => {
        console.log('e')
    };
    return (
        <>
            {!isShow ?
                <button
                    className={style.button}
                    onClick={ChangeIsShow}
                ><i className="fa fa-calendar-times-o" aria-hidden="true"> </i>
                </button>
                :
                <button
                    className={style.button}
                    onClick={ChangeIsShow}
                ><i className="fa fa-calendar-check-o" aria-hidden="true"> </i>
                </button>}
        </>
    )
};
export default ShowInCalendar;

