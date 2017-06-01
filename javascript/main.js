import Setup from './setup';

function toggleActive() {
  this.classList.toggle("active");
  let audio = document.getElementById('kick');
}

function play() {
  for (var i = 0; i < 8; i++) {
    let col = document.querySelectorAll(`.col-${i}`);
    // let audio = document.getElementById('kick');
    col.forEach( (cell) => {
      // col.toggle the class
      if (cell.classList.contains("active")) {
        console.log(cell);
        // audio.play();
      }
    });
  }
}



document.addEventListener("DOMContentLoaded", () => {
  let grid = Setup.new();
  grid.createGrid();
  // createAudio();
});
