// logic player
import * as Status from '../status';
import * as Actions from '../actions';

const VideoWrapper = (store) => {
    const videoEl = document.getElementById('myvideo');

    // update timestamp
    // videoEl.ontimeupdate = () => {

    //     let sec = videoEl.currentTime;

    //     store.dispatch(Actions.updateTime(getTimeStamp(sec)));
    // };

    // update duration
    // videoEl.addEventListener('loadedmetadata', () => {
    //     debugger;
    //     console.log('LOADEDMETADATA!');

    //     if (videoEl.readyState > 0) {
            
    //         store.dispatch(Actions.updateDuration(getTimeStamp(videoEl.duration)));
    //     }

    // });

    // event listener tiap state berubah > ganti DOM src
    // javascript biasa
    store.subscribe(() => {
        let state = store.getState();
        if (state.status === Status.NEW_SOURCE) {
            // set src nya
            videoEl.src = state.source;
        } else if (state.status === Status.PAUSED) {
            videoEl.pause();
        } else if (state.status === Status.PLAYING) {
            videoEl.play();
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

}

export default VideoWrapper;