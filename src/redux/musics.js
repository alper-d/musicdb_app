import * as ActionTypes from './ActionTypes';

const initState = {
    musics:[],
    recentMusics:[],
    searchLoading: true,
    currentlyPlaying: '',
    currentlyPlayingName:''
}


export const Musics = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.MAKE_SEARCH:
            return {
                ...state
            }
        case ActionTypes.UPDATE_MUSICS:
            return {
                ...state, 
                musics: (action.payload !== null) ? action.payload : [],
                searchLoading: false
            };
        case ActionTypes.UPDATE_RECENT_MUSIC:
            console.log(action.payload)
            return{
                ...state,
                recentMusics: (action.payload.musics !== null) ? action.payload.musics : []
            }
        case ActionTypes.UPDATE_CURRENTLY_PLAYING:
            return {
                ...state, 
                currentlyPlaying: action.payload.url,
                currentlyPlayingName:action.payload.name
            };
        case ActionTypes.SEARCH_LOADING:
            return{
                ...state,
                musics: [],
                searchLoading: true
            }

        default:
            return state;
    }
};