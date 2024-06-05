document.getElementById("aboutMeButton").addEventListener("click", function() {
    window.location.href = "aboutme.html";
});

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-audio-button');

    playButton.addEventListener('click', () => {
        audio.play().catch(error => {
            console.log('Audio playback was prevented:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('aboutMeButton');

    playButton.addEventListener('click', () => {
        audio.play().catch(error => {
            console.log('Audio playback was prevented:', error);
        });
    });
});
