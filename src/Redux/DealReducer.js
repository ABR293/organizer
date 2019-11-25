

let initialState =
    [

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
    ];








export const DealReducer = (state = initialState, action) => {
        return(state);
};
