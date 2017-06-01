
export const createGrid = () => {

    let gridContainer = document.getElementById('grid-container');
    let grid = document.createDocumentFragment();
    // needs to iterate through the different types of audio
    for (let i = 0; i < 4; i++){
      let row = document.createElement("ul");
      row.setAttribute("class", `row row-${i}`);
      for (var j = 0; j < 8; j++) {
        let cell = document.createElement("li");
        cell.setAttribute("class", `col-${j} cell`);
        cell.onclick=toggleActive;
        row.appendChild(cell);
      }
      grid.appendChild(row);
    }
    gridContainer.appendChild(grid);
  };

export const createAudio = () => {
    let audioContainer = document.getElementById('audio-container');
    let sounds = document.createDocumentFragment();
    for (let i = 0; i < 8; i++) {
      let audio = document.createElement("audio");
      audio.setAttribute("id", `sound-${i}`);
      const attr = document.createAttribute("autobuffer");
      audio.setAttributeNode(attr);

      let source = document.createElement("source");
      source.setAttribute("src", `../assets/sounds/${i}.mp3`);

      audio.appendChild(source);
      sounds.appendChild(audio);
    }
    audioContainer.appendChild(sounds);
  };

export const toggleActive = (e) => {
  e.currentTarget.classList.toggle("active");
};
