# Sound Snippets

[Live site][Live]

[Live]: https://yonglin2.github.io/Jingles//

This project is a music sequencer built using JavaScript and CSS. It loops through the notes the user have selected to play a snippet of sound.

## Technologies

This project utilizes the following technologies:

* Vanilla JavaScript for overall structure and logic
* HTML/CSS for audio and visual effects
* Webpack to bundle and serve various scripts

## Demo

Click or hold down the mouse button to "activate" a box. When the slider reaches the box, it will play the notes that were selected. Mute the sounds and reset the grid with the control buttons below the grid.

![Screenshot](/assets/docs/jingles.png)

## Technical Implementation Details

To minimize the number of DOM interactions, I created a DocumentFragment instead of appending it directly to the DOM to increase load time.

```js
export const createGrid = () => {
    let gridContainer = document.getElementById('grid-container');
    let grid = document.createDocumentFragment();
    for (let i = 0; i < 16; i++){
      let row = document.createElement("ul");
      row.setAttribute("class", `row row-${i}`);
      for (var j = 0; j < 16; j++) {
        let cell = document.createElement("li");
        cell.setAttribute("class", `col-${j} cell`);
        row.appendChild(cell);
      }
      grid.appendChild(row);
    }
    gridContainer.appendChild(grid);
  };
```

## Future Features

- [ ] Different CSS effects
- [ ] Tempo Slider
- [ ] Utilizing web audio api to allow user to add effects to the sounds
