const container = document.querySelector(".container");
const containerSize = 960;

const drawCanvas = (grid_size) => {
  // row loop
  for (let i = 0; i < grid_size; i++) {
    //column loop
    const row = document.createElement("div");
    row.classList = `row`;
    row.style.height = `${containerSize / grid_size}px `;
    for (let j = 0; j < grid_size; j++) {
      const square = document.createElement("div");
      square.classList = "square";
      square.style.opacity = 0.0;
      square.style.backgroundColor = `rgb(${Math.random() * 256},${
        Math.random() * 256
      },${Math.random() * 256})`;
      row.appendChild(square);
      square.addEventListener("mouseenter", (e) => {
        if (e.target.style.opacity < 1) {
          e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
        }
      });
      container.appendChild(row);
    }
  }
};

const removeCanvas = (grid_size) => {
  const container = document.querySelector(".container");
  for (let i = 0; i < grid_size; i++) {
    console.log(i);
    const row = document.querySelector(".row");
    container.removeChild(row);
  }
};

const main = () => {
  let grid_size = 16;
  const grid_size_btn = document.querySelector("#grid-size");
  grid_size_btn.addEventListener("click", (e) => {
    removeCanvas(grid_size);
    do {
      if (grid_size > grid_size > 100 || grid_size < 1) {
        grid_size = prompt(
          "Enter grid size | Grid size must be in between 1 to 100 inclusive"
        );
      }
      grid_size = prompt("Enter grid size");
    } while (grid_size > 100 || grid_size < 1);

    drawCanvas(grid_size);
  });
  drawCanvas(grid_size);
};
main();
