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

createGrid(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    createGrid(input);
  } else {
    document.querySelector(".error").style.display = "block";
  }
}

function createGrid(size) {
  const grid = document.querySelector(".grid");
  const boxes = document.querySelectorAll(".grid-item");
  boxes.forEach((box) => box.remove());
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = `${colors[colorCounter]}`;
    });
    div.classList.add("grid-item");
    grid.appendChild(div);
  }
}

// Clears the board of all colored blocks back to the selected background color
function clearBoard() {
  const boxes = document.querySelectorAll(".grid-item");
  boxes.forEach((box) => {
    box.style.backgroundColor = "transparent";
  });
}
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearBoard);

// // Changes the title of current color when the color is changed
const currentColor = document.querySelector(".currentColor");
currentColor.textContent = `Current Color: ${colors[colorCounter]}`;

// // Changes and displays the color selected
function changesColor() {
  const boxes = document.querySelectorAll(".grid-item");
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
}

const changeColor = document.querySelector(".changeColor");
changeColor.addEventListener("click", changesColor);

// // Toggles the background color of the grid between black and white
function changeBackgroundColor() {
  const grid = document.querySelector(".grid");
  const boxes = document.querySelectorAll(".grid-item");
  let gridStyle = window.getComputedStyle(grid);
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
}

const backgroundChanger = document.querySelector(".backgroundChanger");
backgroundChanger.addEventListener("click", changeBackgroundColor);

// // Shows and hides outlines for grid items
const showOutlines = document.querySelector(".showOutlines");

function showHideOutlines() {
  const grid = document.querySelector(".grid");
  const boxes = document.querySelectorAll(".grid-item");
  let gridStyle = window.getComputedStyle(grid);
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
}

showOutlines.addEventListener("click", showHideOutlines);
