const audio = document.getElementById("backsound");

// putar otomatis audio
document.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch(err => console.log("Autoplay dibatasi browser:", err));
    }
});

// berhenti jika berpindah tab
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        audio.pause(); // pause saat meninggalkan tab
    } else {
        audio.play().catch(err => console.log("Autoplay dibatasi browser:", err));
    }
});

// Jika pengguna keluar dari halaman (close / reload)
window.addEventListener("beforeunload", () => {
    audio.pause();
    audio.currentTime = 0; // reset ke awal
});

// diatas adalah codingan untuk backsound web

