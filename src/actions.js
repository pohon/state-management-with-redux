export const SET_SOURCE = 'SET_SOURCE';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE'
export const SEEK = 'SEEK';
export const VOLUME_UP = 'VOLUME_UP';
export const VOLUME_DOWN = 'VOLUME_DOWN';
export const UPDATE_TIME = 'UPDATE_TIME';
export const UPDATE_DURATION = 'UPDATE_DURATION';

// function yg return object (objecty yg di dalamny ada type)

// (2)
export const setSource = (url) => ({
    type: SET_SOURCE,
    url
});

export const play = () => ({
    type: PLAY
});

export const pause = () => ({
    type: PAUSE
});

export const seek = (time) => ({
    type: SEEK,
    time
});

export const volumeUp = () => ({
    type: VOLUME_UP
});

export const volumeDown = () => ({
    type: VOLUME_DOWN
});

export const updateTime = (time) => ({
    type: UPDATE_TIME,
    time
});

export const updateDuration = (duration) => ({
    type: UPDATE_DURATION,
    duration
});