var ribbitSound = document.createElement('audio');
ribbitSound.src = 'assets/ribbit.mp3';
ribbitSound.preload = 'auto';

function ribbit() {
    ribbitSound.play();
}