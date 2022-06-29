createGrid(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    createGrid(input);
  } else {
    document.querySelector(".error").style.display = "block";
  }
}

let currentColor = "black";

function createGrid(size) {
  const grid = document.querySelector(".grid");
  const boxes = document.querySelectorAll(".grid-item");
  boxes.forEach((box) => box.remove());
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = currentColor;
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

// // Changes and displays the color selected
function changesColor(color) {
  const boxes = document.querySelectorAll(".grid-item");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = color;
    });
  });
  currentColor = color;
}

const changeColor = document.querySelector(".changeColor");
changeColor.addEventListener("click", changesColor);

// // Toggles the background color of the grid between black and white
function changeBackgroundColor(color) {
  const grid = document.querySelector(".grid");
  const boxes = document.querySelectorAll(".grid-item");
  grid.style.backgroundColor = color;

  let gridStyle = window.getComputedStyle(grid);
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
    box.classList.toggle("outlineBlack");
  });
}

showOutlines.addEventListener("click", showHideOutlines);
