let gridSize = 16;
let boardState = 0;

function makeGrid(gridSize) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.setAttribute("style",
        "display: flex; justify-content: space-evenly; flex-wrap: wrap; padding: 0; margin: 0;");
    for (let i = 0;i < gridSize * gridSize;i++) {
        const gridBox = document.createElement("div");
        gridBox.setAttribute("class","grid-box");
        gridBox.setAttribute("style",
            "background-color: white; padding: 0; margin: 0; box-sizing: border-box;");
        let boxSize = 480/gridSize;
        boxSize = boxSize + "px";
        gridBox.style.height = boxSize;
        gridBox.style.width = boxSize;
        gridContainer.appendChild(gridBox);
    }
}

function colorBlack() {
    const sketchBoxes = document.querySelectorAll(".grid-box");
    for (let i = 0; i < sketchBoxes.length; i++) {
        sketchBoxes[i].addEventListener("mouseover", () => {
            let currentOpacity = Number(sketchBoxes[i].style.opacity);
            if (currentOpacity < 1) {
                sketchBoxes[i].style.opacity = (parseFloat(sketchBoxes[i].style.opacity) || 0) + 0.1;
            }
            sketchBoxes[i].style.background = "black";
        })
    };
}

function colorRainbow() {
    const sketchBoxes = document.querySelectorAll(".grid-box");
    let randomR = 0;
    let randomG = 0;
    let randomB = 0;
    for (let i = 0; i < sketchBoxes.length; i++) {
        sketchBoxes[i].addEventListener("mouseover", () => {
            randomR = Math.floor(Math.random() * 256);
            randomG = Math.floor(Math.random() * 256);
            randomB = Math.floor(Math.random() * 256);
            sketchBoxes[i].style.background = `rgb(${randomR},${randomG},${randomB})`;
        })
    };
}

function clearGrid() {
    const sketchBoxes = document.querySelectorAll(".grid-box");
    for (let i = 0; i < sketchBoxes.length; i++) {
        sketchBoxes[i].style.opacity = 0;
        sketchBoxes[i].style.background = "white";
    }
}

function blackButtonToggle() {
    let blackBtn = document.querySelector(".black-button");
    blackBtn.id = (blackBtn.id == "black-button-default") ? "black-button-clicked" : "black-button-default";
}

function rainbowButtonToggle() {
    let rainbowBtn = document.querySelector(".rainbow-button");
    rainbowBtn.id = (rainbowBtn.id == "rainbow-button-default") ? "rainbow-button-clicked" : "rainbow-button-default";
}

makeGrid(gridSize);
colorBlack();

let sizeBtn = document.querySelector(".size-button");

let blackBtn = document.querySelector(".black-button");
blackBtn.addEventListener("click", () => {
    blackButtonToggle();
    colorBlack();
});

let rainbowBtn = document.querySelector(".rainbow-button");
rainbowBtn.addEventListener("click", () => {
    rainbowButtonToggle();
    colorRainbow();
})

let clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener("click", () => {
    clearGrid();
})