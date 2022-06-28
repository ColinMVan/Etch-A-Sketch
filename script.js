const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "pink",
  "orange",
  "yellow",
  "green",
];
let colorCounter = 0;

// let widthCounter = 0;
// const possWidths = [5, 10, 20, 30, 40];

// const gridSizeChanger = document.querySelector(".gridSize");
// gridSizeChanger.addEventListener("click", () => {
//   widthCounter++;
//   width = possWidths[widthCounter];
// });

let width = 32;
const grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

for (let i = 0; i < width * width; i++) {
  let div = document.createElement("div");
  div.classList.add("grid-item");
  grid.appendChild(div);
}

const boxes = document.querySelectorAll(".grid-item");

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = `${colors[colorCounter]}`;
  });
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
});

const changeColor = document.querySelector(".changeColor");

const currentColor = document.querySelector(".currentColor");
currentColor.textContent = `Current Color: ${colors[colorCounter]}`;

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

const backgroundChanger = document.querySelector(".backgroundChanger");
backgroundChanger.addEventListener("click", () => {
  grid.classList.toggle("black");
});
