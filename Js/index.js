document.getElementById('top-left-button').addEventListener('click', function () {
    var video = document.getElementById('video');
    var icon = this.querySelector('i');

    if (video.muted) {
        video.muted = false;
        icon.classList.remove('bi-volume-mute-fill');
        icon.classList.add('bi-volume-up-fill');
    } else {
        video.muted = true;
        icon.classList.remove('bi-volume-up-fill');
        icon.classList.add('bi-volume-mute-fill');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video");
    video.volume = 0.1; // Set video volume level

    // Immediately display the card
    document.getElementById('card').style.display = 'block';
});
