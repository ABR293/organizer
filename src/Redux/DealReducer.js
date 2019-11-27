const ADD_LIST = 'ADD-LIST';
const ADD_DEAL = 'ADD-DEAL';
const CHANGE_NAME = 'CHANGE-NAME';
const CHANGE_DATE = 'CHANGE-DATE';
const MAKE_DONE = 'MAKE-DONE';





let initialState =
    [

        {
            id: '32',
            name: 'coding',
            children: [
                {
                    id: '3242',
                    name: 'Drinc coffe ',
                    description: 'This is first test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: [
                        {
                            id: '324268',
                            name: 'Eat cooci',
                            description: 'This is therd test Deal for example',
                            importance: false,
                            startDate: 1,
                            deadLine: 2,
                            isShowInCalendar: false,
                            done: false,
                            children: []
                        }
                    ]
                },
                {
                    id: '3216',
                    name: 'Write App',
                    description: 'This is second test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: []
                },
            ]
        },
        {
            id: '45',
            name: 'sport',
            children: [
                {
                    id: '4521',
                    name: 'make Swimming ',
                    description: 'This is first test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: [
                        {
                            id: '452133',
                            name: 'learn breesing',
                            description: 'This is therd test Deal for example',
                            importance: false,
                            startDate: 1,
                            deadLine: 2,
                            isShowInCalendar: false,
                            done: false,
                            children: []
                        }
                    ]
                },
                {
                    id: '4534',
                    name: 'jump',
                    description: 'This is second test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: []
                },
            ]
        },
        {
            id: '11',
            name:'health',
            children: [

                {
                    id: '1131',
                    name: 'Yoga! ',
                    description: 'This is first test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: [
                        {
                            id: '113154',
                            name: 'Chi-gun',
                            description: 'This is therd test Deal for example',
                            importance: false,
                            startDate: 1,
                            deadLine: 2,
                            isShowInCalendar: false,
                            done: false,
                            children: []
                        }
                    ]
                },
                {
                    id: '1142',
                    name: 'Kung-fu',
                    description: 'This is second test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: []
                },
            ]
        }
    ];




//let t1 = getElement('32', initialState);

//window.test1 = t1;

/*let userData = 'userData';

let JState = JSON.parse(localStorage.userData);

window.jst = JState;*/


export const changeNameAC = (elementId, newName) => ({type:CHANGE_NAME, elementId:elementId, newName:newName});

/*
let idGen = () => {

};

let idCreator = (parentID, list) => {
    let newID = parentID + idGen();
    while( list.findIndex((el) => el.id == newID) !== -1){
        newID = parentID + idGen();
    }
    return newID;
} ;

let NewDealCreator = (parentID,) =>{



    let newID = idCreator(parentID, list);

    return{
        //New List
        id: newID,
        name: 'NewList',
        listBody: [
            // New Deal
            {
                id: 11,
                name: 'New Deal ',
                description: '',
                importance: false,
                startDate: null,
                deadLine: null,
                isShowInCalendar: false,
                done: false,
                ChildrenDeals: []
            },
        ]
    }
};

*/





export const DealReducer = (state = initialState, action) => {

        // let idGen = () => {
        //
        //
        // };


        switch(action.type) {
            case ADD_LIST: {
                return {
                    ...state
                };
            }
            case ADD_DEAL: {
                return {
                    ...state
                };
            }
            case CHANGE_NAME: {


                return {
                    ...state
                };
            } case CHANGE_DATE: {
                return {

                    ...state
                };
            } case MAKE_DONE: {
                return {
                    ...state
                };
            }
            default: {
                return state
            }

        }
};

