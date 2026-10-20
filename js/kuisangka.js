const questions = [
  {
    image: "asset/buaah.png",
    correct: 4,
    sound: "sounds/soal.mp3",
    options: [2, 3, 4, 5]
  },
  {
    image: "asset/anak.png",
    correct: 3,
    sound: "sounds/soal2.mp3",
    options: [1, 3, 2, 4]
  },
  {
    image: "", // TANPA GAMBAR
    correct: 6,
    sound: "sounds/soal3.mp3",
    options: [8, 2, 4, 6]
  }
];

let index = 0;

const questionCell = document.querySelector(".question-cell");
const img = document.getElementById("questionImage");

const popup = document.getElementById("popupBenar");
const btnNext = document.getElementById("btnNext");
const btnPlay = document.getElementById("btnPlay");
const btnSoal = document.getElementById("btnSoal");

const soundSoal = document.getElementById("soundSoal");
const soundBenar = document.getElementById("soundBenar");
const soundSalah = document.getElementById("soundSalah");

const answerButtons = document.querySelectorAll("#answerRow .answer-btn");

/* LOAD SOAL */
function loadQuestion() {
  const q = questions[index];

  // 👉 INI KUNCI UTAMANYA
  if (q.image) {
    questionCell.style.display = "table-cell"; // tampilkan kotak
    img.src = q.image;
  } else {
    questionCell.style.display = "none"; // 🔥 HILANGKAN KOTAK
  }

  // SET PILIHAN
  answerButtons.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.dataset.value = q.options[i];
    btn.classList.remove("wrong");
  });
}

/* PUTAR SOAL */
function playSoal() {
  soundSoal.src = questions[index].sound;
  soundSoal.currentTime = 0;
  soundSoal.play();
}

/* EVENT */
btnPlay.onclick = playSoal;
btnSoal.onclick = playSoal;

/* CEK JAWABAN */
answerButtons.forEach(btn => {
  btn.onclick = () => {
    const val = Number(btn.dataset.value);

    if (val === questions[index].correct) {
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
});

/* NEXT */
btnNext.onclick = () => {
  popup.style.display = "none";

  index++;
  if (index >= questions.length) index = 0;

  loadQuestion();
};

/* LOAD AWAL */
loadQuestion();
