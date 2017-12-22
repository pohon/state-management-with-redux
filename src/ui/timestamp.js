import * as Status from '../status';

const Timestamp = (store) => {

    const timeEl = document.querySelector("input[name='time']"),
        durationEl = document.getElementById("duration");
    // set default
    timeEl.value = store.getState().time;
    durationEl.innerHTML = store.getState().duration;

    store.subscribe(() => {
        
        let state = store.getState();

        if(state.time){
            timeEl.value = `${state.time.h} : ${state.time.m} : ${state.time.s}`;
        }

        // tiap ganti video, update durasi
        if(state.status === Status.DURATION_UPDATED){
            durationEl.innerHTML = `${state.duration.h} : ${state.duration.m} : ${state.duration.s}`;
        }

    });

    const getTimeStamp = (dirtySecond) => {

        let hours = Math.floor(dirtySecond / 3600),
            hoursInSeconds = hours * 3600,
            mins = Math.floor((dirtySecond - hoursInSeconds) / 60),
            minsInSeconds = mins * 60,
            seconds = Math.floor(dirtySecond - hoursInSeconds - minsInSeconds);

        let objTime = {
            h: (hours < 10 ? '0' + String(hours) : String(hours)),
            m: (mins < 10 ? '0' + String(mins) : String(mins)),
            s: (seconds < 10 ? '0' + String(seconds) : String(seconds)),
        }

        return objTime;

    };

};



export default Timestamp;