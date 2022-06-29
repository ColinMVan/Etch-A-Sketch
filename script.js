// Colors available to draw with
const colors = [
  "red",
  "green",
  "blue",
  "purple",
  "pink",
  "orange",
  "yellow",
  "black",
  "white",
];
let colorCounter = 0;

// Creates the grid and boxes
let width = prompt("How many boxes would you like to be the width?");
if (width === null || isNaN(width)) {
  width = 10;
}

const grid = document.querySelector(".grid");
createGrid();

function createGrid() {
  grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

  for (let i = 0; i < width * width; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-item");
    grid.appendChild(div);
  }
}

const boxes = document.querySelectorAll(".grid-item");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = `${colors[colorCounter]}`;
  });
});

// Clears the board of all colored blocks back to the selected background color
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.style.backgroundColor = "transparent";
  });
});

// Changes the title of current color when the color is changed
const currentColor = document.querySelector(".currentColor");
currentColor.textContent = `Current Color: ${colors[colorCounter]}`;

// Changes and displays the color selected
const changeColor = document.querySelector(".changeColor");
changeColor.addEventListener("click", () => {
  if (colorCounter > colors.length - 2) {
    colorCounter = 0;
  } else {
    colorCounter++;
  }
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = `${colors[colorCounter]}`;
    });
  });

  currentColor.textContent = `Current Color: ${colors[colorCounter]}`;
});

// Toggles the background color of the grid between black and white
const backgroundChanger = document.querySelector(".backgroundChanger");
backgroundChanger.addEventListener("click", () => {
  grid.classList.toggle("black");
  if (showOutlines.textContent === "Hide Outlines") {
    boxes.forEach((box) => {
      if (
        gridStyle.getPropertyValue("background-color") === "rgba(0, 0, 0, 0)"
      ) {
        box.classList.remove("outlineWhite");
        box.classList.toggle("outlineBlack");
      } else {
        box.classList.remove("outlineBlack");
        box.classList.toggle("outlineWhite");
      }
    });
  }
});

// Shows and hides outlines for grid items
const showOutlines = document.querySelector(".showOutlines");
let gridStyle = window.getComputedStyle(grid);
showOutlines.addEventListener("click", () => {
  if (showOutlines.textContent === "Show Outlines") {
    showOutlines.textContent = "Hide Outlines";
  } else {
    showOutlines.textContent = "Show Outlines";
  }
  boxes.forEach((box) => {
    if (gridStyle.getPropertyValue("background-color") === "rgba(0, 0, 0, 0)") {
      box.classList.remove("outlineWhite");
      box.classList.toggle("outlineBlack");
    } else {
      box.classList.remove("outlineBlack");
      box.classList.toggle("outlineWhite");
    }
  });
});

const gridSizeChanger = document.querySelector(".gridSize");
gridSizeChanger.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.remove();
  });
});
