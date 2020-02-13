import theme1 from "../Components/Common/Theme1.module.css";
import theme2 from "../Components/Common/Theme2.module.css";
// import theme3 from "../Components/Common/Theme3.module.css";
// import theme4 from "../Components/Common/Theme4.module.css";
// import theme5 from "../Components/Common/Theme5.module.css";

const SET_THEME = "SET_THEME";
const INIT_SETTINGS = "INIT-SETTINGS";

export const changeTheme= (id) => {console.log(id); console.log({type: SET_THEME, id:id}); return ({type: SET_THEME, id:id})};
export const changeTheme1 = (id) => ({type:SET_THEME, id:id});


let initialState = {
    theme: theme2,
    themeId: 2
};


/*let setTheme = (id) => {
    let theme;
    switch (id) {
        case 1 : {
            return theme = theme1
        }
        case 2 : {
            return theme = theme2
        }
        case 3 : {
            return theme = theme3
        }
        case 4 : {
            return theme = theme4
        }
        case 5 : {
            return theme = theme5
        }
    }

};*/

export const SettingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME: {
            console.log('s');
            return {...state}
        }
        case INIT_SETTINGS:{
            return JSON.parse(localStorage.getItem('userSettings'));
        }
        default: {
            return {...state}
        }
    }
};