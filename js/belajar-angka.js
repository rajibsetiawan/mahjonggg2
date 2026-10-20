const numberGrid = document.getElementById("numberGrid");
const soundAngka = document.getElementById("soundAngka");
const soundReward = document.getElementById("soundReward");

// === ANGKA 0 - 10 ===
for (let i = 0; i <= 10; i++) {
  const btn = document.createElement("button");
  btn.className = "number-btn";
  btn.textContent = i;

  btn.onclick = () => {
    soundAngka.src = `sounds/angka/${i}.mp3`;
    soundAngka.currentTime = 0;
    soundAngka.play();
  };

  numberGrid.appendChild(btn);
}

// === KOTAK BINTANG ⭐ (REWARD) ===
const starBtn = document.createElement("button");
starBtn.className = "number-btn star-btn";
starBtn.textContent = "⭐";

starBtn.onclick = () => {
  soundReward.currentTime = 0;
  soundReward.play();
};

numberGrid.appendChild(starBtn);
