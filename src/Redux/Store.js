import {combineReducers} from "redux";
import {settingReducer} from "./SettingReducer";
import {dealReducer} from "./DealReducer";


let reducers = combineReducers ({
    settings: settingReducer,
    DealData: dealReducer,

});

let store = createStore(reducers);

export default store;