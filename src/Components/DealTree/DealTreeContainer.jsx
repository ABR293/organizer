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
        let item = data.find((item) => item.id.slice(0, 2) === id.slice(0, 2));

        if( id.length >= 2 ){
            console.log(item);
            console.log(id);
            console.log(item.children);
            console.log(id.slice(2));
            let e = this.getElement(id.slice(2), item.children);
            console.log(e)
        }
        else{return item}
    };

/*

   CopyData(data){
      let newData = [...data];
      newData.forEach((item) => {
          item = {...item};
          if (item.children.length !== 0){
              this.CopyData(item.children);
          }
      });
         return newData;
    };

*/

    CopyData(data) {
        let newData = [...data];
        newData.forEach((item) => {
            if(item.children.length !== 0){
                this.CopyData(item.children)
            }
            item = {...item}
        });
        return newData;
    };

/*

   ChangeDealName(id, name, data) {
        let newData = [...data];
        newData.forEach((item)=>{
           if(item.id === id.slice(0,2)){
               item = {...item}
               if(id.length >= 2){
                   this.ChangeDealName(id.slice(2))
               }
           }
           else if(item.children.length !==0){
               item = {...item};
               this.CopyData(item.children);
           }
           else{ item = {...item} }
        });
        return newData
    };

*/

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

        console.log(testData);
        let TestCopy = (this.CopyData(testData));
        console.log(TestCopy);
        console.log(this.getElement('324268', TestCopy));
        //let TestCopy2 = (this.ChangeDealName('3242','IFDJFJOIF',TestCopy));
        //console.log(TestCopy2);
        // TestCopy = 'deleted';
        // console.log(TestCopy);
        // console.log(testData);

        console.log();



        return (
            <>
                <DealTree
                    data={this.props.data}
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



