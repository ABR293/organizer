const ADD_LIST = 'ADD-LIST';
const ADD_DEAL = 'ADD-DEAL';
const CHANGE_NAME = 'CHANGE-NAME';
const CHANGE_START_DATE = 'CHANGE-START-DATE';
const CHANGE_ENDING_DATE = 'CHANGE-ENDING-DATE';
const CHANGE_DESCRIPTION = 'CHANGE-DESCRIPTION';
const SET_SHOW_IN_CALENDAR = "SET-SHOW-IN-CALENDAR";
const CANCEL_SHOW_IN_CALENDAR = "CANCEL-SHOW-IN-CALENDAR";
const MAKE_DONE = 'MAKE-DONE';
const CANCEL_DONE = 'CANCEL-DONE';
const INIT_DATA = 'INIT-DATA';
const DELETE_DEAL = 'DELETE-DEAL';
const DELETE_LIST = 'DELETE-LIST';
const SET_IMPORTANT = 'SET-IMPORTANT';
const CANCEL_IMPORTANT = 'CANCEL-IMPORTANT';
let initialState =
    [
        {
            id: '32',
            name: 'List1',
            children: [
                {
                    id: '3242',
                    name: 'New Deal ',
                    description: 'This is first test Deal for example',
                    importance: false,
                    startDate: 1,
                    deadLine: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: []

                },

            ]
        },

    ];

export const changeName = (id, newName) => ({type: CHANGE_NAME, id: id, name: newName});
export const addNewDeal = (id) => ({type: ADD_DEAL, id: id});
export const addNewList = () => ({type: ADD_LIST});
export const deleteDeal = (id) => ({type: DELETE_DEAL, id: id});
export const deleteList = (id) => ({type: DELETE_LIST, id: id});
export const initData = () => ({type: INIT_DATA});
export const makeDone = (id) => ({type: MAKE_DONE, id: id});
export const changeStartDate = (id, newDate) => {console.log(newDate); return{type:CHANGE_START_DATE, id:id, startDate: newDate}};
export const changeEndingDate = (id, newDate) =>{console.log(newDate); return{type:CHANGE_ENDING_DATE, id:id, endingDate: newDate}};
export const cancelDone = (id) => ({type: CANCEL_DONE, id: id});
export const changeDescription = (id, description) => ({type: CHANGE_DESCRIPTION, id: id, description: description});
export const setShowInCalendar  = (id) => ({type:SET_SHOW_IN_CALENDAR, id:id});
export const cancelShowInCalendar  = (id) => ({type:CANCEL_SHOW_IN_CALENDAR, id:id});
export const setImportant  = (id) => ({type:SET_IMPORTANT, id:id});
export const cancelImportant  = (id) => ({type:CANCEL_IMPORTANT, id:id});


/*const getElement = (id, data) => {
    let item = data.find((item) => item.id.slice(-2) === id.slice(0, 2));
    if(id.length > 2){
        item = getElement( id.slice(2), item.children);
    }
    return item
};*/

/*const CopyData = (data) => {
    return( data.map((item) => {
        let newItem = {...item};

        if(item.children.length !== 0){
            item.children = CopyData(item.children);
        }
        return newItem;
    }))
};*/

const ChangeDeal = (id, changing, data) => {
    return (data.map((item) => {
        let newItem = {...item};
        console.log(item.id, id);
        if (item.id.slice(-2) === id.slice(0, 2)) {
            id.length === 2
                ? newItem = {...item, ...changing}
                : newItem.children = ChangeDeal(id.slice(2), changing, newItem.children);
        }
        return newItem;
    }))
};

const genId = () => {
    let rand = 10 + Math.random() * (90);
    return Math.floor(rand) + '';
};

const addSubDeal = (id, data) => {
    return (data.map((item) => {
        let newItem = {...item};
        if (item.id.slice(-2) === id.slice(0, 2)) {
            if (id.length === 2) {
                let subDealId = genId();
                for (let i = 0; i < 99; i++) {
                    subDealId = genId();
                    if (item.children.findIndex(item => item.id.slice(-2) === subDealId) === -1) {
                        break;
                    }
                }

                item.children.push({
                    id: item.id + subDealId,
                    name: 'New Deal ',
                    description: '',
                    importance: false,
                    startDate: null,
                    deadLine: null,
                    isShowInCalendar: false,
                    done: false,
                    children: []
                });
            } else if (id.length > 2) {
                newItem.children = addSubDeal(id.slice(2), newItem.children);
            }
        }
        return newItem;
    }))
};

const addList = (data) => {
    let listId = genId();
    while (data.find(item => item.id === listId) === -1) {
        listId = genId();
        if (data.length > 99) {
            break
        }
    }
    return [...data, {
        id: listId,
        name: 'New list',
        children: [{
            id: listId + genId(),
            name: 'New Deal ',
            description: '',
            importance: false,
            startDate: null,
            deadLine: null,
            isShowInCalendar: false,
            done: false,
            children: []
        }]
    }];
};

const deletItem = (id, data = []) => {
    return (data.map((item) => {
        if (item.id.slice(-2) === id.slice(0, 2)) {
            if (id.length > 4) {
                deletItem(id.slice(2), item.children);
            } else {
                item.children = item.children.filter(item => item.id.slice(-2) !== id.slice(2))
            }
        }
        return {...item};
    }))
};

export const DealReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_LIST: {
            return addList(state)
        }
        case ADD_DEAL: {
            return addSubDeal(action.id, state)
        }
        case CHANGE_NAME: {
            let changing = {name: action.name};
            return ChangeDeal(action.id, changing, state)
        }
        case DELETE_DEAL: {
            return deletItem(action.id, state);
        }
        case DELETE_LIST: {
            if (state.length > 1) {
                return state.filter(item => item.id !== action.id)
            } else {
                return [...state]
            }
        }
        case CHANGE_START_DATE: {
            let changing = {startDate: new Date(action.startDate).getTime()};
            return ChangeDeal(action.id, changing, state)
        }
        case CHANGE_ENDING_DATE: {
            let changing = {endingDate: new Date(action.endingDate).getTime()};
            return ChangeDeal(action.id, changing, state)
        }
        case CHANGE_DESCRIPTION: {
            let changing = {description: action.description};
            return ChangeDeal(action.id, changing, state)
        }
        case SET_SHOW_IN_CALENDAR: {
            let changing = {isShowInCalendar: true};
            return ChangeDeal(action.id, changing, state)
        }
        case CANCEL_SHOW_IN_CALENDAR: {
            let changing = {isShowInCalendar: false};
            return ChangeDeal(action.id, changing, state)
        }
        case SET_IMPORTANT: {
            let changing = {importance: true};
            return ChangeDeal(action.id, changing, state)
        }
        case CANCEL_IMPORTANT: {
            let changing = {importance: false};
            return ChangeDeal(action.id, changing, state)
        }
        case MAKE_DONE: {
            let changing = {done: true};
            return ChangeDeal(action.id, changing, state)
        }
        case CANCEL_DONE: {
            let changing = {done: false};
            return ChangeDeal(action.id, changing, state)
        }
        case INIT_DATA: {
            if (!!JSON.parse(localStorage.getItem('userData'))) {
                return JSON.parse(localStorage.getItem('userData'))
            } else {
                return [...state]
            }
        }
        default: {
            return [...state]
        }
    }
};

