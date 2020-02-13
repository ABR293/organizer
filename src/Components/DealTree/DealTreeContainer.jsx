import React from 'react';
import {connect} from "react-redux";
import DealTree from "./DealTree";
import {addNewList, changeName, deleteDeal, initData} from "../../Redux/DealReducer";


class DealTreeContainer extends React.Component {

    CopyData(data) {
        return( data.map((item) => {
            let newItem = {...item};
            if(item.children.length !== 0){
                item.children = this.CopyData(item.children);
            }
            return newItem;
        }))
    };
    deletItem(id, data) {
        return( data.map((item)=>{
            if(item.id.slice(-2) === id.slice(0, 2)){
                if (id.length > 4){
                    this.deletItem(id.slice(2), item.children);
                }
                else{item.children = item.children.filter(item => item.id.slice(-2) !== id.slice(2))}
            }
            return {...item};
        }))
    };
   /* deleteList(id, data) {
        return( data.filter((list)=>{
            list.id !== id
        }))
    };*/

    render() {

          let testData = this.props.data;
          // let testCopy1 = this.CopyData(testData);
          // console.log(testCopy1);
          // let testCopy2 = this.deletItem( '3216', testCopy1);
          // console.log(testCopy2);
          // console.log(testCopy1);

        return (
            <>
                <DealTree
                    theme={this.props.theme}
                    data={testData}
                    addNewList={this.props.addNewList}
                    changeName={this.props.changeName}
                />
            </>)
    };
}

let mapStateToProps = (state) => {
    return {
        data: state.data
    }
};

export default connect(mapStateToProps, {addNewList, changeName, initData, deleteDeal})(DealTreeContainer);


/*
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

ChangeDealName(id, changing, data) {
    return( data.map((item)=>{
        let newItem = {...item};
        if(item.id.slice(-2) === id.slice(0, 2)){
            id.length === 2
                ? newItem = {...item, ...changing}
                : newItem.children = this.ChangeDealName(id.slice(2), changing, newItem.children);}
        if(item.children.length !== 0){
            item.children = this.CopyData(item.children);
        }
        return newItem;
    }))
};

genId() {
    let rand = 10 + Math.random() * (90);
    return Math.floor(rand)+'';
};

addSubDeal(id, data) {
    return (data.map((item) => {
        let newItem = {...item};
        if (item.id.slice(-2) === id.slice(0, 2)) {
            if (id.length === 2) {
                let subDealId = this.genId();
                do {subDealId = this.genId();}
                while(item.children.find(item=>item.id === subDealId) === -1);
                item.children.push({
                    id: item.id+subDealId,
                    name: 'New Deal ',
                    description: '',
                    importance: false,
                    startDate: null,
                    deadLine: null,
                    isShowInCalendar: false,
                    done: false,
                    children: []
                });
            }
            else {
                newItem.children = this.addSubDeal(id.slice(2), newItem.children);
            }
        }
        if (item.children.length !== 0) {
            item.children = this.CopyData(item.children);
        }
        return newItem;
    }))
};

addList(data) {
    let listId = this.genId();
    do {listId = this.genId();}
    while(data.find(item=>item.id === listId) === -1);
    return [...data, {
        id: listId,
        name: 'New list',
        children: []
    }];
};
*/
