import React from 'react';
import style from './Footer.module.css';
import 'font-awesome/css/font-awesome.min.css';


const Footer = (props) => {



    return(
        <div className={style.footer}>
            <p><i className="fa fa-copyright" aria-hidden="true"> </i>  Права не защищены.... Но спасибо что вы с нами))</p>
        </div>
    )
};

export default Footer;