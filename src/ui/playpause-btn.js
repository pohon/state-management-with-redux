import * as Status from '../status';
import * as Actions from '../actions';

const PlayPauseBtn = (store) => {

    const btnEl = document.getElementById('play-pause-btn');

    btnEl.addEventListener('click', (e) => {
        
        e.preventDefault();
        
        const status = store.getState().status;

        if(status === Status.PLAYING){
            store.dispatch(Actions.pause());            
        }
        else {
            store.dispatch(Actions.play());            
        }

    });

    // label
    // bagusnya waktu state ny udh ke update, jadi pasang di subscribe aja
    store.subscribe( () => {

        let state = store.getState();
        
        if(state.status === Status.PAUSED){
            btnEl.innerText = 'Play';           
        }
        else if(state.status === Status.PLAYING){
            btnEl.innerText = 'Pause';
        }
    });

};

export default PlayPauseBtn;