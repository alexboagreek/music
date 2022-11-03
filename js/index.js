const audio = new Audio();
const player = document.querySelector('.player');
const tracks = document.getElementsByClassName('track');
const pause = document.querySelector('.player__controller_pause');
const stop = document.querySelector('player__controller_stop');

const playMusic = event => {
    const trackActive =  event.currentTarget;

    audio.src = trackActive.dataset.track;
    audio.play();
    pause.classList.remove('player__icon_play');
    player.classList.add('player_active');

    for (let i = 0; i < tracks.length; i++) {
        tracks[i].classList.remove('track_active');
    }

    trackActive.classList.add('track_active');

};

for (let i = 0; i < tracks.length;  i++) {
    tracks[i].addEventListener('click', playMusic);
}

// pause.addEventListener('click', () => {
//     playMusic('../assets/audio/Madonna - Frozen.mp3');
// });

pause.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        pause.classList.remove('player__icon_play');
    } else {
        audio.pause();
        pause.classList.add('player__icon_play');
    }
});