const ADD_LIST = 'ADD-LIST';
const ADD_DEAL = 'ADD-DEAL';
const CHANGE_NAME = 'CHANGE-NAME';
const CHANGE_DATE = 'CHANGE-DATE';
const MAKE_DONE = 'MAKE-DONE';
const SAVE_CHANGES = 'SAVE-CHANGES';
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

export const changeName = (id, newName) => ({type:CHANGE_NAME, id:id, name:newName});
//export const changeData = (id, newName) => ({type:CHANGE_NAME, id:id, newName:newName});
//export const Change = (id, newName) => ({type:CHANGE_NAME, id:id, newName:newName});
export const addNewDeal = (id) => ({type:ADD_DEAL, id:id});
export const addNewList = () => ({type:ADD_LIST});
export const deleteDeal = (id) => ({type:DELETE_DEAL, id:id});
export const deleteList = (id) => ({type:DELETE_LIST, id:id});
export const saveData = () =>  {console.log('AC SD'); return({type:SAVE_CHANGES})};
export const initData = () =>  {console.log('AC ID'); return({type:INIT_DATA})};


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
                while(item.children.find(item=>item.id === subDealId) === -1){
                    subDealId = genId();
                    if(data.length > 99){break};}
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
            deadLine: null,
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
                console.log(action.id, state);
                return addSubDeal(action.id, state)
            }
            case CHANGE_NAME: {
                console.log(action);
                let changing = {name: action.name};
                console.log(changing);

                return ChangeDeal(action.id, changing, state)
            }
            case DELETE_DEAL: {
                return deletItem(action.id, state);
            }
            case DELETE_LIST: {
                return state.filter(item => item.id !== action.id);
            }
            case MAKE_DONE: {
                let changing = {done:true};
                return ChangeDeal(action.id, changing, state)
            }
            case SAVE_CHANGES: {
                localStorage.setItem('userData', JSON.stringify(state));
                return state
            }
            case INIT_DATA: {
                return JSON.parse(localStorage.getItem('userData'));
            }
            default: {
                return [...state]
            }
        }
};

