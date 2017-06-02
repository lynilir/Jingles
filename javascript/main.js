import { createGrid, createAudio, toggleActive } from './setup';


let curCol = 0;
function play() {
  let col = document.querySelectorAll(`.col-${curCol}`);
  for (let j = 0; j < 16; j++) {
    let cell = col[j];
    cell.classList.toggle("curCol");
    if (cell.classList.contains("active")) {
      let audio = document.getElementById(`sound-${j}`);
      audio.cloneNode(true).play();
    }
    setTimeout(()=> {
      cell.classList.toggle("curCol");
    }, 300);
  }
}

const muteButton = document.getElementById("mute");
const audioElements = document.querySelectorAll("audio");
let isMuted = false;

const muteAll = () => {
  for (let i = 0; i < audioElements.length; i++) {
    audioElements[i].muted = true;
  }
  isMuted = true;
};
const unmuteAll = () => {
  for (let i = 0; i < audioElements.length; i++) {
    audioElements[i].muted = false;
  }
  isMuted = false;
};
muteButton.addEventListener("click", () => {
  return isMuted ? unmuteAll() : muteAll();
});


document.addEventListener("DOMContentLoaded", () => {
  createGrid();
  createAudio();
  setInterval(() => {
    play();
    curCol = (curCol + 1) % 16;
  }, 300);
});
