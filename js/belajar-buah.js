const fruitGrid = document.getElementById("fruitGrid");
const soundBuah = document.getElementById("soundBuah");
const soundReward = document.getElementById("soundReward");

const fruits = [
  "apel",
  "pisang",
  "jeruk",
  "nanas",
  "semangka",
  "anggur",
  "durian"
];

// BUAT KOTAK BUAH
fruits.forEach(name => {
  const btn = document.createElement("button");
  btn.className = "fruit-btn";

  const img = document.createElement("img");
  img.src = `asset/${name}.png`;
  img.alt = name;

  btn.appendChild(img);

  btn.onclick = () => {
    soundBuah.src = `sounds/buah/${name}.mp3`; // "Ini apel"
    soundBuah.currentTime = 0;
    soundBuah.play();
  };

  fruitGrid.appendChild(btn);
});

// ⭐ KOTAK TERAKHIR (REWARD)
const starBtn = document.createElement("button");
starBtn.className = "fruit-btn star-btn";
starBtn.textContent = "⭐";

starBtn.onclick = () => {
  soundReward.currentTime = 0;
  soundReward.play();
};

fruitGrid.appendChild(starBtn);
