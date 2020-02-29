let sideSquares = 16;
const gridSize = 480;

const grid = document.querySelector(".grid");

grid.style.height = `${gridSize}px`;
grid.style.width = `${gridSize}px`;
grid.style.display = "grid";
grid.style.margin = "1rem auto";
grid.style.gridTemplateAreas = "none";

let resize = () => {
  grid.style.gridTemplateColumns = `repeat(${sideSquares}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${sideSquares}, 1fr)`;
};

let addSquares = () => {
  for (i = 1; i <= sideSquares; i++) {
    for (j = 1; j <= sideSquares; j++) {
      let square = document.createElement("div");

      square.classList.add("square");
      square.style.border = "solid black 1px";
      square.style.gridColumn = `${i} / span 1`;
      square.style.gridRow = `${j} / span 1`;

      grid.appendChild(square);
    }
  }

  let squares = document.querySelectorAll(".square");
  squares.forEach(
    square =>
      square.addEventListener("mouseenter", function() {
        square.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * (255 - 0) + 0
        )}, ${Math.floor(Math.random() * (255 - 0) + 0)}, ${Math.floor(
          Math.random() * (255 - 0) + 0
        )})`;
      }),
    square.addEventListener("touchenter", function() {
      square.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * (255 - 0) + 0
      )}, ${Math.floor(Math.random() * (255 - 0) + 0)}, ${Math.floor(
        Math.random() * (255 - 0) + 0
      )})`;
    })
  );
};

let removeSquares = () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => square.remove());
};

let custom = () => {
  sideSquares = prompt("Grid Size?");

  resize();
  removeSquares();
  addSquares();
};

resize();
addSquares();
