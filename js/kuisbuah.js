const questions = [
  {
    image: "asset/pisang.png",
    correct: "Pisang",
    options: ["Apel", "Pisang", "Jeruk"],
    sound: "sounds/buah.mp3"
  },
  {
    image: "asset/nanas.png",
    correct: "Nanas",
    options: ["Nanas", "Pisang", "Apel"],
    sound: "sounds/buah.mp3"
  },
  {
    image: "asset/durian.png",
    correct: "Durian",
    options: ["Apel", "Pisang", "Durian"],
    sound: "sounds/buah.mp3"
  }
];

let index = 0;

const img = document.getElementById("questionImage");
const answerBox = document.getElementById("answerBox");
const popup = document.getElementById("popupBenar");

const btnPlay = document.getElementById("btnPlay");
const btnNext = document.getElementById("btnNext");
const btnSoal = document.getElementById("btnSoal");

const soundSoal = document.getElementById("soundSoal");
const soundBenar = document.getElementById("soundBenar");
const soundSalah = document.getElementById("soundSalah");

/* LOAD */
function loadQuestion() {
  const q = questions[index];
  img.src = q.image;
  answerBox.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt;

    btn.onclick = () => {
      if (opt === q.correct) {
        soundBenar.play();
        popup.style.display = "flex";
      } else {
        soundSalah.play();
        btn.classList.add("wrong");
        setTimeout(() => btn.classList.remove("wrong"), 400);
      }
    };

    answerBox.appendChild(btn);
  });
}

/* PLAY SOAL */
function playSoal() {
  soundSoal.src = questions[index].sound;
  soundSoal.currentTime = 0;
  soundSoal.play();
}

btnPlay.onclick = playSoal;
btnSoal.onclick = playSoal;

btnNext.onclick = () => {
  popup.style.display = "none";
  index = (index + 1) % questions.length;
  loadQuestion();
};

loadQuestion();
