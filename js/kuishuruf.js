const questions = [
  { letter: "A", sound: "sounds/a.mp3", options: ["C", "A", "F"] },
  { letter: "B", sound: "sounds/b.mp3", options: ["P", "G", "B"] },
  { letter: "C", sound: "sounds/c.mp3", options: ["C", "Z", "H"] }
];

let index = 0;

const letterBox = document.getElementById("letterBox");
const answerBox = document.getElementById("answerBox");
const popup = document.getElementById("popupBenar");

const btnPlay = document.getElementById("btnPlay");
const btnNext = document.getElementById("btnNext");
const btnSoal = document.getElementById("btnSoal");

const soundSoal = document.getElementById("soundSoal");
const soundBenar = document.getElementById("soundBenar");
const soundSalah = document.getElementById("soundSalah");

function loadQuestion() {
  const q = questions[index];
  letterBox.textContent = "?";
  answerBox.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = opt;

    btn.onclick = () => {
      if (opt === q.letter) {
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
