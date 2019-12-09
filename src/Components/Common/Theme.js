import theme1 from './Theme1.module.css';
import theme2 from './Theme2.module.css';
import theme3 from './Theme3.module.css';
import theme4 from './Theme4.module.css';
import theme5 from './Theme5.module.css';


let i = 1;
let theme;

let ThemeSet = () => {
    switch (i) {
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

};



export default ThemeSet();