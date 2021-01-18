import * as ActionTypes from './ActionTypes'
import {baseUrl, AUTH_TOKEN} from '../Utilities/Constants'


export const fetchMusic = (query) => (dispatch) => {
    dispatch(searchLoading())
    return fetch(`${baseUrl}/api/music/search?q=${query}`,{
        method:'GET',
        headers: {
            'authorization': AUTH_TOKEN
        }
    }).then(response => {
        if (response.ok){
            return response
        }else{
            //error case
        }
    },
    error => {
        //error case
    })
    .then(response => response.json())
    .then((response) => {
        dispatch(updateMusic(response))
    })
}
export const getMusic = (id) => {
    return fetch(`${baseUrl}api/music/${id}`, {
        method: 'GET',
    }).then(response => {
        if(response.ok){
            return response
        }else{
            //error case
        }
    },
    error => {
        //error case
    })
}

export const getRecentMusic = () => (dispatch) => {
    return fetch(`${baseUrl}/api/recent/musics`, {
        method: 'GET',
        headers: {
            'authorization': AUTH_TOKEN
        }
    }).then(response => {
        if(response.ok){
            return response
        }else{
            //error case
        }
    },
    error => {
        //error case
    })
    .then(response => response.json())
    .then(response => {dispatch(updateRecentMusic(response))})
}

export const searchLoading = () => ({
    type:ActionTypes.SEARCH_LOADING
})
export const updateMusic = (data) => ({
    type: ActionTypes.UPDATE_MUSICS,
    payload: data.musics
})
export const updateCurrentlyPlaying = (url,name) => ({
    type: ActionTypes.UPDATE_CURRENTLY_PLAYING,
    payload: {url, name}
})
export const toggleDarkMode = () => ({
    type: ActionTypes.TOGGLE_DARK_MODE
})
export const updateRecentMusic = (data) => ({
    type: ActionTypes.UPDATE_RECENT_MUSIC,
    payload: data
})