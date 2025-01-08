let gridSize = 16;

function makeGrid(gridSize) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.setAttribute("style",
        "display: flex; justify-content: space-evenly; flex-wrap: wrap; padding: 0; margin: 0;");
    for (let i = 0;i < gridSize * gridSize;i++) {
        const gridBox = document.createElement("div");
        gridBox.setAttribute("class","grid-box");
        gridBox.setAttribute("style",
            "background-color: white; border: 1px solid black; padding: 0; margin: 0; box-sizing: border-box;");
        let boxSize = 480/gridSize;
        boxSize = boxSize + "px";
        gridBox.style.height = boxSize;
        gridBox.style.width = boxSize;
        gridContainer.appendChild(gridBox);
    }
}

makeGrid(gridSize);

const sketchBoxes = document.querySelectorAll(".grid-box");
for (let i = 0; i < sketchBoxes.length; i++) {
    sketchBoxes[i].addEventListener("mouseover", () => {
        sketchBoxes[i].style.background = "black";
    })
};