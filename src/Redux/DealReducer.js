

let initialState = {
    lists: [
        {   id:1,
            name: 'Test List1',
            description:'This is first test Deal for example',
            importance: false,
            startDate: 1,
            deadLine: 2,
            isShowInCalendar: false,
            done: false,
            ChildrenDeals:[

            ]},
        ]
};



export const dealReducer = (state = initialState, action) => {

};
