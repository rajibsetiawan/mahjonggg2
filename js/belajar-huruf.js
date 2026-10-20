const letterGrid = document.getElementById("letterGrid");
const soundHuruf = document.getElementById("soundHuruf");
const soundReward = document.getElementById("soundReward");

// HURUF A - Z
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// BUAT KOTAK HURUF
letters.forEach(letter => {
  const btn = document.createElement("button");
  btn.className = "letter-btn";
  btn.textContent = letter;

  btn.onclick = () => {
    soundHuruf.src = `sounds/huruf/${letter.toLowerCase()}.mp3`;
    soundHuruf.currentTime = 0;
    soundHuruf.play();
  };

  letterGrid.appendChild(btn);
});

// ⭐ KOTAK TERAKHIR (KOLOM KE-4)
const starBtn = document.createElement("button");
starBtn.className = "letter-btn star-btn";
starBtn.textContent = "⭐";

starBtn.onclick = () => {
  soundReward.currentTime = 0;
  soundReward.play();
};

letterGrid.appendChild(starBtn);
