import {combineReducers, createStore} from "redux";
//import {settingReducer} from "./SettingReducer";
import {DealReducer} from "./DealReducer";


let reducers = combineReducers ({
    //settings: settingReducer,
    data: DealReducer,

});

let store = createStore(reducers);

window.store = store;
window.state = store.getState();

export default store;