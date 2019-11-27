import React from 'react';
import List from "./List";
import {withRouter} from "react-router-dom";

class ListContainer extends React.Component{

    render(){

        let id;
        ! this.props.match.params.listId ?
            id = '32' :
            id = this.props.match.params.listId;
            let list = this.props.dataP.find(list => list.id === id);
        return(
            <List
                listBody={list.children}
            />
        )
    }
}

let ListContainerWithRouter = withRouter(ListContainer);
export default ListContainerWithRouter;