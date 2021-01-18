import {createStore,combineReducers, applyMiddleware} from 'redux'
import {Musics } from './musics'
import {App_Properties} from './app_properties'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


export const reduxConfig = () => {
    return createStore(combineReducers({
        musics: Musics,
        isDark: App_Properties
    }),
    applyMiddleware(thunk, logger))
}