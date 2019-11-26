import React, {useState} from 'react';
import style from './Button.module.css';
import 'font-awesome/css/font-awesome.min.css';


const OpenTree = (props) => {


    const [isOpen, setIsOpen] = useState(false);
    let ChangeIsOpen = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    };
    let Click =  () => {
        ChangeIsOpen();
        props.make();
    };

    return (
        <>
            {!isOpen ?
                <button
                    className={style.button}
                    onClick={Click}
                ><i className="fa fa-play" aria-hidden="true"> </i>
                </button>
                :
                <button
                    className={style.button}
                    onClick={Click}
                ><i className="fa fa-play fa-rotate-90" aria-hidden="true"> </i>
                </button>}
        </>
    )
};
export default OpenTree;