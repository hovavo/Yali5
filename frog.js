var ribbitSound = document.createElement('audio');
ribbitSound.src = 'Assets/ribbit.mp3';
ribbitSound.preload = 'auto';

function ribbit() {
    ribbitSound.play();
}