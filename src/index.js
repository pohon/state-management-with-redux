import './styles/style.scss';
import { createStore } from 'redux';
import * as Actions from './actions';
import * as Status from './status';
import SourceInput from './ui/source-input';    // component's logic
import VideoWrapper from './ui/video_wrapper';  // component's logic
import PlayPauseBtn from './ui/playpause-btn';  // component's logic
import Timestamp from './ui/timestamp';         // component's logic
import { videoStateReducer } from './reducers';     // reducer


/* REMINDER
1 -- dispatch
2 -- action
3 -- reducer */

// Store
const videoStore = createStore(videoStateReducer);

// ekspos ke global NS biar bisa dipanggil di konsol
window.videoStore = videoStore;

// Subscriber
videoStore.subscribe(() => {
    // debugger;
    console.log('VideoStore:current state', videoStore.getState());
})


//init videowrapper
VideoWrapper(videoStore);

// init SourceInput
SourceInput(videoStore);

// init button play & pause
PlayPauseBtn(videoStore);

// init Timestamp
Timestamp(videoStore);