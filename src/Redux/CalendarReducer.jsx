let INIT_CALENDAR = "INIT-CALENDAR";
let FILL_CALENDAR = "FILL-CALENDAR";

export const initCalendar = () =>({type:INIT_CALENDAR});


let initialstate = {
    week: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    days: [],
    daysForward: 5,
    daysAgo: 3,
    dealData: [],
};


export const calendarReducer = (state = initialstate, action) => {
    switch (action.type){
        case INIT_CALENDAR:{
            let days =[];
            for(let i=0; i<state.daysForward; i++){
                days[i] = new Date();
                days[i].setDate(days[0].getDate()+i);
            }
            console.log(days);
            return {...state, days:[...days]}
        }

        default:{
            return {...state}
        }
    }


};