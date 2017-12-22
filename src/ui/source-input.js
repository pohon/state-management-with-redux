import { setSource } from '../actions';

const SourceInput = (store) => {

    const input = document.querySelector("input[name='video-source']"),
          btn = document.getElementById('load-src-btn');

    input.setAttribute('value', '//vjs.zencdn.net/v/oceans.mp4');

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        // kalo input ga kosong
        if(input.value){
            store.dispatch(setSource(input.value));
        }
    });

}

export default SourceInput;