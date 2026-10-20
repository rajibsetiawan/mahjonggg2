const questions = [
  {
    correct: "kucing.png",
    options: ["kucing.png", "anjing.png", "buaya.png"],
    sound: "sounds/kucing.mp3"
  },
  {
    correct: "anjing.png",
    options: ["bebek.png", "kucing.png", "anjing.png"],
    sound: "sounds/anjing.mp3"
  },
  {
    correct: "buaya.png",
    options: ["anjing.png", "buaya.png", "ayam.png"],
    sound: "sounds/buaya.ogg"
  }
];

let index = 0;

const answerBox = document.getElementById("answerBox");
const popup = document.getElementById("popupBenar");

const btnPlay = document.getElementById("btnPlay");
const btnNext = document.getElementById("btnNext");
const btnSoal = document.getElementById("btnSoal");

const soundSoal = document.getElementById("soundSoal");
const soundBenar = document.getElementById("soundBenar");
const soundSalah = document.getElementById("soundSalah");

/* TAMBAHAN: volume suara benar & salah */
soundBenar.volume = 0.8;
soundSalah.volume = 0.8;

/* LOAD SOAL */
function loadQuestion() {
  const q = questions[index];
  answerBox.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";

    const img = document.createElement("img");
    img.src = "asset/" + opt;
    img.style.width = "100px";
    img.style.pointerEvents = "none";

    btn.appendChild(img);

    btn.onclick = () => {
      if (opt === q.correct) {
        soundBenar.currentTime = 0;
        soundBenar.play();
        popup.style.display = "flex";
      } else {
        soundSalah.currentTime = 0;
        soundSalah.play();
        btn.classList.add("wrong");
        setTimeout(() => btn.classList.remove("wrong"), 400);
      }
    };

    answerBox.appendChild(btn);
  });
}

/* PUTAR SUARA SOAL */
function playSoal() {
  soundSoal.src = questions[index].sound;
  soundSoal.currentTime = 0;

  // TAMBAHAN: atur volume soal ke-3
  if (index === 2) {           // soal ke-3
    soundSoal.volume = 1;     // 100%
  } else {
    soundSoal.volume = 0.6;   // soal lain 60%
  }

  soundSoal.play();
}

btnPlay.onclick = playSoal;
btnSoal.onclick = playSoal;

/* NEXT */
btnNext.onclick = () => {
  popup.style.display = "none";
  index++;
  if (index >= questions.length) index = 0;
  loadQuestion();
};

/* LOAD AWAL */
loadQuestion();
