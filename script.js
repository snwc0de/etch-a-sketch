const gridContainer = document.querySelector("#gridContainer");


for (let i = 1; i <= (16 * 16); i++) {
    const grid = document.createElement("div");
    grid.classList.add(`item${i}`);
    gridContainer.appendChild(grid);
    grid.textContent = `${i}`;
};

const items = gridContainer.querySelectorAll("div")
items.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
        e.target.style.cssText = "background-color: orange; color: black"
    })
});

const btn = document.querySelector("#btn");
const newBtn = document.createElement("button");
newBtn.setAttribute("class", "newBtn");
const resetBtn = document.createElement("button");
resetBtn.classList.add("resetBtn");
btn.appendChild(newBtn);

newBtn.addEventListener("click", removeGrid);

function removeGrid () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}


