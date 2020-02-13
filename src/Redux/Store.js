import {combineReducers, createStore} from "redux";
//import {settingReducer} from "./SettingReducer";
import {DealReducer} from "./DealReducer";
import {SettingReducer} from "./SettingReducer";


let reducers = combineReducers ({
    settings: SettingReducer,
    data: DealReducer,

});

let store = createStore(reducers);

window.store = store;
window.state = store.getState();

export default store;