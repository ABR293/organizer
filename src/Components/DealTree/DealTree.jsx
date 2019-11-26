import React from 'react';
import style from './DealTree.module.css'
import List from "./List/List";
import {Route} from "react-router-dom";
import ListMenu from "./ListMenu";
import ListContainer from "./List/ListContainer";


const DealTree = (props) => {

   // let printE = () => {console.log('E!')};

    /*let TestData =[

        {
            id: 1,
            name: 'coding',
            listBody: [
                {
                    id: 11,
                    name: 'Drinc coffe ',
                    description: 'This is first test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    ChildrenDeals: [
                        {
                            id: 111,
                            name: 'Eat cooci',
                            description: 'This is therd test Deal for example',
                            importance: false,
                            startDate: 1,
                            deadLine: 2,
                            isShowInCalendar: false,
                            done: false,
                            ChildrenDeals: []
                        }
                    ]
                },
                {
                    id: 12,
                    name: 'Write App',
                    description: 'This is second test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    ChildrenDeals: []
                },
            ]
        },
        {
            id: 2,
            name: 'sport',
            listBody: [
                {
                    id: 21,
                    name: 'make Swimming ',
                    description: 'This is first test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    ChildrenDeals: [
                        {
                            id: 211,
                            name: 'learn breesing',
                            description: 'This is therd test Deal for example',
                            importance: false,
                            startDate: 1,
                            deadLine: 2,
                            isShowInCalendar: false,
                            done: false,
                            ChildrenDeals: []
                        }
                    ]
                },
                {
                    id: 22,
                    name: 'jump',
                    description: 'This is second test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    ChildrenDeals: []
                },
            ]
        },
        {
            id: 3,
            name:'health',
            listBody: [

                {
                    id: 31,
                    name: 'Yoga! ',
                    description: 'This is first test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    ChildrenDeals: [
                        {
                            id: 311,
                            name: 'Chi-gun',
                            description: 'This is therd test Deal for example',
                            importance: false,
                            startDate: 1,
                            deadLine: 2,
                            isShowInCalendar: false,
                            done: false,
                            ChildrenDeals: []
                        }
                    ]
                },
                {
                    id: 32,
                    name: 'Kung-fu',
                    description: 'This is second test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    ChildrenDeals: []
                },
            ]
        }
    ];*/

    console.log(props.data);

    return (
        <div className={style.block}>

            <div className={style.list}>
                <Route path={'/dealtree/:listId?'}
                       render={() => <ListContainer dataP={props.data}/>}
                />
            </div>

            <div className={style.listMenu}>
                <ListMenu data={props.data} />
            </div>
        </div>
    )
};
export default DealTree;








