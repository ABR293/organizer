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

export const changeNameAC = (elementId, newName) => ({type:CHANGE_NAME, elementId:elementId, newName:newName});


export const DealReducer = (state = initialState, action) => {

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

