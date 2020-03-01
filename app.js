//Constants and Variables
const container = document.getElementById("container");
const grid = document.getElementById("grid");

createCells(16, 16);

//Function to create grid
function createCells(row, cell) {
    for (let i = 0; i < row; i++)  {
    rows = document.createElement('div');
    rows.classList.add('rows');
    grid.appendChild(rows);

    for (let j =0; j < cell; j++) {
        cells = document.createElement('div');
        cells.classList.add('cells');
        rows.appendChild(cells);
    }
    }
}

//Functin for changing cell colour after hovering
let allCells = document.querySelectorAll('.cells');

allCells.forEach(element => {
    element.addEventListener('mouseenter', ()=> {
        element.style.backgroundColor = "black";
    });
});

//Function to reset the grid
function resetGrid(num, num) {
    num = prompt("How many squares per side would you like?");
    createCells(num, num);

    let allCells = document.querySelectorAll('.cells');

allCells.forEach(element => {
    element.addEventListener('mouseenter', ()=> {
        element.style.backgroundColor = "black";
    });
});
}

//Function to clear grid
function clearGrid() {
    while (grid.hasChildNodes()) {
      grid.removeChild(grid.firstChild);
    };
    resetGrid();
};

function rainbow() {
    
}