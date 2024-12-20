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

