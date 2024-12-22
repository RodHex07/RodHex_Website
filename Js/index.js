document.getElementById('overlay').addEventListener('click', function () {
    this.style.display = 'none';
    var video = document.getElementById('video');
    video.style.display = 'block'; 
    video.play(); 

    var top_left_button = document.getElementById('top-left-button');
    top_left_button.style.display = 'block'; 
});

function startAnimation() {
    const overlay = document.getElementById('overlay');
    const card = document.getElementById('card');
    overlay.style.display = 'none';
    card.classList.add('show');
}

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
    video.volume = 0.3; // VİDEO SES SEVİYESİ 
    const card = document.getElementById('card');
    setInterval(() => {
        card.classList.add('fade-out'); 
        setTimeout(() => {
            card.classList.remove('fade-out');
        }, 9000); // KART YOK OLUŞ
    }, 35000); // KART GERİ GELİŞ
});