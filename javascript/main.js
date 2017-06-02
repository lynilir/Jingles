import { createGrid, createAudio, toggleActive } from './setup';

let curCol = 0;
function play() {
  let col = document.querySelectorAll(`.col-${curCol}`);
  for (let j = 0; j < 16; j++) {
    let cell = col[j];
    cell.classList.toggle("curCol");
    if (cell.classList.contains("active")) {
      let audio = document.getElementById(`sound-${j}`);
      if (!audio.muted) {
        audio.cloneNode(true).play();
      }
    }
    setTimeout(()=> {
      cell.classList.toggle("curCol");
    }, 300);
  }
}



document.addEventListener("DOMContentLoaded", () => {
  createGrid();
  createAudio();

  // let slider = document.getElementById('tempo');
  // let tempo = slider.value;
  // slider.addEventListener("change", (e) => {
  //   tempo = 1000 - e.currentTarget.value;
  //   console.log(tempo);
  // });

  let mouseDown;
  document.addEventListener("mousedown", () => {
    mouseDown = true;
  });
  document.addEventListener("mouseup", () => {
    mouseDown = false;
  });

  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("mouseover", () => {
      if (mouseDown) {
        li.classList.toggle("active");
      }
    });
  });

  const muteButton = document.getElementById("mute");
  const soundEls = document.querySelectorAll("audio");
  let isMuted = false;

  const muteFunction = (bool) => {
    muteButton.classList.toggle("fa-volume-up");
    muteButton.classList.toggle("fa-volume-off");
    for (let i = 0; i < soundEls.length; i++) {
      soundEls[i].muted = bool;
    }
    isMuted = bool;
  };

  muteButton.addEventListener("click", () => {
    return isMuted ? muteFunction(false) : muteFunction(true);
  });

  // reset button
  const resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", () => {
    document.querySelectorAll("li").forEach((li) => {
      li.classList.remove("active");
    });
  });

  setInterval(() => {
    play();
    curCol = (curCol + 1) % 16;
  }, 300);
});
