import * as Actions from '../actions'
import * as Status from '../status'

// State
const defaultVideoState = {
    source: undefined,
    status: undefined,
    volume: 1,
    duration: '00 : 00 : 00',
    time: '00 : 00 : 00'
}

// Reducer (3) -- utk modif2 state
export const videoStateReducer = (state = defaultVideoState, action) => {
    console.log('action yg dikirim : ', action.type);
    switch (action.type) {
        case Actions.SET_SOURCE:
            return {
                ...state,
                status: Status.NEW_SOURCE,
                source: action.url
            }
        case Actions.PLAY:
            return {
                ...state,
                status: Status.PLAYING
            }
        case Actions.PAUSE:
            return {
                ...state,
                status: Status.PAUSED
            }
        case Actions.UPDATE_TIME:
            return {
                ...state,
                time: action.time
            }
        case Actions.UPDATE_DURATION:
            return {
                ...state,
                duration: action.duration
            }
        default:
            return state;
            break;
    }



    return state;
};