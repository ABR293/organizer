const ADD_LIST = 'ADD-LIST';
const ADD_DEAL = 'ADD-DEAL';
const CHANGE_NAME = 'CHANGE-NAME';
const CHANGE_START_DATE = 'CHANGE-START-DATE';
const CHANGE_ENDING_DATE = 'CHANGE-ENDING-DATE';
const MAKE_DONE = 'MAKE-DONE';
const CANCEL_DONE = 'CANCEL-DONE';
const INIT_DATA = 'INIT-DATA';
const DELETE_DEAL = 'DELETE-DEAL';
const DELETE_LIST = 'DELETE-LIST';

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
                    endingDate: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: [
                        {
                            id: '324268',
                            name: 'Eat cooci',
                            description: 'This is therd test Deal for example',
                            importance: false,
                            startDate: 1,
                            endingDate: 2,
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
                    endingDate: 2,
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
                    endingDate: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: [
                        {
                            id: '452133',
                            name: 'learn breesing',
                            description: 'This is therd test Deal for example',
                            importance: false,
                            startDate: 1,
                            endingDate: 2,
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
                    endingDate: 2,
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
                    endingDate: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: [
                        {
                            id: '113154',
                            name: 'Chi-gun',
                            description: 'This is therd test Deal for example',
                            importance: false,
                            startDate: 1,
                            endingDate: 2,
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
                    endingDate: 2,
                    isShowInCalendar: false,
                    done: false,
                    children: []
                },
            ]
        }
    ];

export const changeName = (id, newName) => ({type:CHANGE_NAME, id:id, name:newName});
export const addNewDeal = (id) => ({type:ADD_DEAL, id:id});
export const addNewList = () => ({type:ADD_LIST});
export const deleteDeal = (id) => {console.log({type:DELETE_DEAL, id:id}); return({type:DELETE_DEAL, id:id})};
export const deleteList = (id) => ({type:DELETE_LIST, id:id});
export const initData = () =>  ({type:INIT_DATA});
export const makeDone = (id) => ({type:MAKE_DONE, id:id});
export const changeStartDate = (id, newDate) => {console.log(newDate); return{type:CHANGE_START_DATE, id:id, startDate: newDate}};
export const changeEndingDate = (id, newDate) =>{console.log(newDate); return{type:CHANGE_ENDING_DATE, id:id, endingDate: newDate}};
export const cancelDone = (id) => ({type:CANCEL_DONE, id:id});


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

const DeployData = (data) => {
    let NewData = [...data];
    data.forEach((item) => {
        if(item.children.length > 0){
            NewData = [...NewData, ...item.children];
            DeployData(item.children);
        }
    });
    return NewData;
};

const ChangeDeal = (id, changing, data) => {
    return( data.map((item)=>{
        let newItem = {...item};
        if(item.id.slice(-2) === id.slice(0, 2)){
            id.length === 2
                ? newItem = {...item, ...changing}
                : newItem.children = ChangeDeal(id.slice(2), changing, newItem.children);}
        return newItem;
    }))
};

const genId = () => {
    let rand = 10 + Math.random() * (90);
    return Math.floor(rand)+'';
};

const addSubDeal = (id, data) => {
    return (data.map((item) => {
        let newItem = {...item};
        if (item.id.slice(-2) === id.slice(0, 2)) {
            if (id.length === 2) {
                let subDealId = genId();
                for(let i=0; i<99; i++){
                    subDealId = genId();
                    if (item.children.findIndex(item=> item.id === subDealId ) === -1){
                        break;
                    }
                }

                item.children.push({
                    id: item.id+subDealId,
                    name: 'New Deal ',
                    description: '',
                    importance: false,
                    startDate: null,
                    endingDate: null,
                    isShowInCalendar: false,
                    done: false,
                    children: []
                });
            }
            else if (id.length > 2){
                newItem.children = addSubDeal(id.slice(2), newItem.children);
            }
        }
        return newItem;
    }))
};

const addList = (data) => {
    let listId = genId();
    while(data.find(item=>item.id === listId) === -1){
        listId = genId();
        if(data.length > 99){break}
    }
    return [...data, {
        id: listId,
        name: 'New list',
        children: [{
            id: listId+genId(),
            name: 'New Deal ',
            description: '',
            importance: false,
            startDate: null,
            endingDate: null,
            isShowInCalendar: false,
            done: false,
            children: []
        }]
    }];
};

const deletItem = (id, data=[]) => {
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
        switch(action.type) {
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
            case CHANGE_START_DATE: {
                let changing = {startDate:  action.startDate};
                return ChangeDeal(action.id, changing, state)
            }
            case CHANGE_ENDING_DATE: {
                let changing = {endingDate: action.endingDate};
                return ChangeDeal(action.id, changing, state)
            }
            case DELETE_DEAL: {
                return deletItem(action.id, state);
            }
            case DELETE_LIST: {
                return state.filter(item => item.id !== action.id);
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
                if(!! JSON.parse(localStorage.getItem('userData'))){
                    return JSON.parse(localStorage.getItem('userData'))
                }
                else{
                    return [...state];
                }
            }
            default: {
                return [...state]
            }
        }
};

