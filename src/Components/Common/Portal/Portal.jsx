/*import React from "react";
import ReactDOM from "react-dom";
import style from "../../Calendar/Calendar.module.css";
import Card from "../../RedactWindow/RedactWindow";

 export default class Portal extends React.Component {




     componentDidMount() {
         document.body.appendChild(this.el);
     }

     componentWillUnmount() {
         document.body.removeChild(this.el);
     }

     render() {

         let isShow = true;
         let close = () => {return(isShow = false)};

         let el = document.createElement('div');

         return (
             <>
                 {this.isShow && ReactDOM.createPortal(<Card close={close}/>, el)}
             </>
         )
     }
 };*/




