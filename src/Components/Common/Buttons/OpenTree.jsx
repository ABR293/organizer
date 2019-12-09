import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


const OpenTree = (props) => {

    let Click = () => {
        props.make();
    };

    return (
        <>
            {!props.isShow ?
                <button
                    onClick={Click}
                ><i className="fa fa-play" aria-hidden="true"> </i>
                </button>
                :
                <button
                    onClick={Click}
                ><i className="fa fa-play fa-rotate-90" aria-hidden="true"> </i>
                </button>}
        </>
    )
};
export default OpenTree;