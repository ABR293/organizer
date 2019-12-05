import React from 'react';
import List from "./List";
import {withRouter} from "react-router-dom";

class ListContainer extends React.Component{

    render(){
        let id;
        if(this.props.match.params.listId){id = this.props.match.params.listId}
        if(this.props.dataP.findIndex(list => list.id === id) === -1){id = this.props.dataP[0].id}

            let list = this.props.dataP.find(list => list.id === id);
        return(
            <List
                id={id}
                listBody={list.children}
            />
        )
    }
}

let ListContainerWithRouter = withRouter(ListContainer);
export default ListContainerWithRouter;