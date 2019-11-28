import React from 'react';
import {connect} from "react-redux";
import DealTree from "./DealTree";


class DealTreeContainer extends React.Component {

/*
   getElement(id, data) {

        let item = data.find(item => item.id === id.slice(0, 2));
        for (let i = 2; i < id.length; i = i + 2) {
            item = item.children.find(item => item.id === id.slice(0, i + 2));
        }
        return item
    };
   */

    getElement(id, data) {
        let item = data.find((item) => item.id.slice(-2) === id.slice(0, 2));
        if(id.length > 2){
            item = this.getElement( id.slice(2), item.children);
        }
        return item
    };

    CopyData(data) {
        return( data.map((item) => {
            let newItem = {...item};
            if(item.children.length !== 0){
                item.children = this.CopyData(item.children);
            }
            return newItem;
        }))
    };


    ChangeDealName(id, name, data) {
        return( data.map((item)=>{
            let newItem = {...item};
            if(item.id.slice(-2) === id.slice(0, 2)){
                id.length === 2
                ? newItem = {...item, name:name}
                : newItem.children = this.ChangeDealName(id.slice(2), name, newItem.children);}
            if(item.children.length !== 0){
                item.children = this.CopyData(item.children);
            }
            return newItem;
        }))
    };



/*
        id.slice(0.2)
        newData.forEach((item) => {
            item = {...item};
            if (item.children.length !== 0){
                this.CopyData(item.children);
            }
        });
        return newData;
    };*/


    render() {
        let testData = this.props.data;
        let TestCopy = (this.CopyData(testData));
        console.log(TestCopy);
        //console.log(this.getElement('324268', TestCopy));
        let TestCopy2 = (this.ChangeDealName('113154','IFDJFJOIF',TestCopy));
        console.log(TestCopy2);




        return (
            <>
                <DealTree
                    data={testData}
                />
            </>)
    };
}

let mapStateToProps = (state) => {
    return {
        data: state.data
    }
};




export default connect(mapStateToProps)(DealTreeContainer);



