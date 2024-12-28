
function makeGrid(size) {
    const gridContainer = document.querySelector("#gridContainer");
    let itemSize = (100 / size);
    let total = size * size;

    //creates grid
    for (let i = 1; i <= total; i++) {
        const grid = document.createElement("div");
        grid.classList.add(`item`);
        grid.textContent = `${i}`;
        gridContainer.appendChild(grid);
        grid.style.width = `${itemSize}%`;
        grid.style.height = `${itemSize}%`;
        
        document.querySelectorAll(".item").forEach((item) => {
            item.addEventListener("mouseover", (e) => {
                e.target.style.cssText = "background-color: orange; color: black;"
                e.target.style.width = `${itemSize}%`;
                e.target.style.height = `${itemSize}%`;
            });
        });
    };  
};
makeGrid(16);


//creates button for choosing grid number
const btn = document.querySelector("#btn");
const newBtn = document.createElement("button");
newBtn.setAttribute("class", "newBtn");
newBtn.textContent = "CREATE";
btn.appendChild(newBtn);

newBtn.addEventListener("click", createGrid);

//function to remove existing grid
function removeGrid () {
    //continuosly removes the first child of the container until none is left
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
};

//function to create grid
function createGrid () {
    let size = prompt("WRITE A NUMBER", "Input number here")

    if (size <= 100) {
        removeGrid();
        makeGrid(size);
    } else if (size > 100) {
        alert("Number should not exceed 100!")
    } else if (size !== Number()) {
        alert("Input a Number!");
    } 
};

//creates the reset button
const resetBtn = document.createElement("button");
resetBtn.classList.add("resetBtn");
resetBtn.textContent = "RESET";
btn.appendChild(resetBtn);


resetBtn.addEventListener("click", resetGrid)
 
//function to reset grid
function resetGrid() {
    document.querySelectorAll(".item").forEach(item => {
        item.style.color = "white";
        item.style.backgroundColor = "green";
    })
}


