let gridSize = 16;

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
            let currentOpacity = parseFloat(sketchBoxes[i].style.opacity) || 0;
            if (currentOpacity < 1) {
                sketchBoxes[i].style.opacity = parseFloat(sketchBoxes[i].style.opacity) + 0.1;
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
    if (blackBtn.id == "black-button-default") {
        rainbowBtn.id = "rainbow-button-default";
        blackBtn.id = "black-button-clicked";
    }
}

function rainbowButtonToggle() {
    let rainbowBtn = document.querySelector(".rainbow-button");
    if (rainbowBtn.id == "rainbow-button-default") {
        blackBtn.id = "black-button-default";
        rainbowBtn.id = "rainbow-button-clicked";
    }
}

makeGrid(gridSize);
colorBlack();

let sizeBtn = document.querySelector(".size-button");
let blackBtn = document.querySelector(".black-button");
let rainbowBtn = document.querySelector(".rainbow-button");
let clearBtn = document.querySelector(".clear-button");


sizeBtn.addEventListener("click", () => {
    gridSize = prompt("Please enter a grid size (integer between 16-100):")
    if ((gridSize == null) || !isNaN(gridSize) || gridSize < 16 || gridSize > 100) {
        gridSize = prompt("Invalid choice. Please enter a grid size (integer between 16-100):")
    }
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.replaceChildren();
    makeGrid(gridSize);
    if (blackBtn.id == "black-button-clicked") {
        colorBlack();
    } else {
        colorRainbow();
    }

})

blackBtn.addEventListener("click", () => {
    blackButtonToggle();
    colorBlack();
});

rainbowBtn.addEventListener("click", () => {
    rainbowButtonToggle();
    colorRainbow();
})

clearBtn.addEventListener("click", () => {
    clearGrid();
})