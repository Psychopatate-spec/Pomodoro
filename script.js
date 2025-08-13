// script.js file //

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const music = document.getElementById("music");
const timer = document.getElementById("countDown");
const audio = document.getElementById("audio");

let timeLeft = 1500;
let isTimerOn = false;
let interval;

function saveValue () {
  timeLeft = parseInt((document.getElementById("workDuration").value) * 60, 10);
  return timeLeft;
}

const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  countDown.innerHTML = 
  `${minutes.toString().padStart(2,"0")}
  :
  ${seconds.toString().padStart(2,"0")}`;
};

const startTimer = () => {
  if (isTimerOn === false) {
    interval = setInterval(() => {
      
      timeLeft--;
      updateTimer();

      if (timeLeft === 0) {
        clearInterval(interval);
        alert("Time's up!");
        timeLeft = 1500;
        updateTimer();
      }
    }, 1000)
  }
};

const stopTimer = () => {
  clearInterval(interval);
}

const resetTimer = () => {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
};

start.addEventListener("click", () => {
  startTimer();
  isTimerOn = true;
});
stop.addEventListener("click", () => {
  stopTimer();
  isTimerOn = false;
});
reset.addEventListener("click", () => {
  resetTimer();
  isTimerOn = false;
});
music.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        music.textContent = "Pause Music";
    } else {
        audio.pause();
        music.textContent = "Play Music";
    }
});