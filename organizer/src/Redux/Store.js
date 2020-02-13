import {combineReducers, createStore} from "redux";
import {SettingReducer} from "./SettingsReducer1";
import {DealReducer} from "./DealReducer";
import {calendarReducer} from "./CalendarReducer";

let reducers = combineReducers ({
    data: DealReducer,
    settings: SettingReducer,
    calendar: calendarReducer,
});

let store = createStore(reducers);

window.store = store;
window.state = store.getState();

export default store;