const animalGrid = document.getElementById("animalGrid");
const soundMain = document.getElementById("soundMain");
const soundReward = document.getElementById("soundReward");

const animals = [
  { name: "Kucing", file: "kucing" },
  { name: "Ayam", file: "ayam" },
  { name: "Sapi", file: "sapi" },
  { name: "Bebek", file: "bebek" },
  { name: "Monyet", file: "monyet" },
  { name: "Burung", file: "burung" },
  { name: "Anjing", file: "anjing" }
];

// BUAT KARTU HEWAN
animals.forEach(animal => {
  const card = document.createElement("div");
  card.className = "animal-card";

  // GAMBAR
  const img = document.createElement("img");
  img.src = `asset/${animal.file}.png`;
  img.alt = animal.name;

  img.onclick = () => {
    soundMain.src = `sounds/hewan/${animal.file}_nama.mp3`; // "Ini kucing"
    soundMain.currentTime = 0;
    soundMain.play();
  };

  // TOMBOL
  const btnWrap = document.createElement("div");
  btnWrap.className = "card-buttons";


  // tombol nama hewan
  const btnNama = document.createElement("button");
  btnNama.textContent = animal.name;
  btnNama.onclick = () => {
    soundMain.src = `sounds/hewan/${animal.file}_nama.mp3`; // "Kucing"
    soundMain.currentTime = 0;
    soundMain.play();
  };

  // tombol suara hewan
  const btnSuara = document.createElement("button");
  btnSuara.textContent = "🔊";
  btnSuara.onclick = () => {
    soundMain.src = `sounds/hewan/${animal.file}_suara.mp3`; // suara hewan
    soundMain.currentTime = 0;
    soundMain.play();
  };

  btnWrap.append(btnNama, btnSuara);
  card.append(img, btnWrap);
  animalGrid.appendChild(card);
});

// ⭐ REWARD
const star = document.createElement("div");
star.className = "animal-card star-card";
star.textContent = "⭐";
star.onclick = () => soundReward.play();

animalGrid.appendChild(star);
