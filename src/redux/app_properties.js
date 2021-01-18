import * as ActionTypes from './ActionTypes'

const initMode = {
    isDark: false
}

export const App_Properties = (state = initMode, 
    action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_DARK_MODE:
            let app = document.getElementById('body-app')
            app.style.backgroundColor = !state.isDark ? 'darkslateblue' : 'wheat'
            return {
                ...state,
                isDark: !state.isDark
            }
        default:
            return state;
    }
};