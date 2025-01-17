let gridSize = 16;

function makeGrid(gridSize) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.setAttribute("style",
        "display: flex; justify-content: space-evenly; flex-wrap: wrap; padding: 0; margin: 0;");
    for (let i = 0;i < gridSize * gridSize;i++) {
        const gridBox = document.createElement("div");
        gridBox.setAttribute("class","grid-box");
        gridBox.setAttribute("style",
            "background-color: white; padding: 0; margin: 0; opacity: 0; box-sizing: border-box;");
        let boxSize = 480/gridSize;
        boxSize = boxSize + "px";
        gridBox.style.height = boxSize;
        gridBox.style.width = boxSize;
        gridContainer.appendChild(gridBox);
    }
}

function blackBox(event) {
    let currentOpacity = parseFloat(event.target.style.opacity);
    if (currentOpacity < 1) {
        event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
    }
    event.target.style.background = "black";
};

function rainbowBox(event) {
    randomR = Math.floor(Math.random() * 256);
    randomG = Math.floor(Math.random() * 256);
    randomB = Math.floor(Math.random() * 256);
    event.target.style.background = `rgb(${randomR},${randomG},${randomB})`;
};

function colorBlack() {
    const sketchBoxes = document.querySelectorAll(".grid-box");
    for (let i = 0; i < sketchBoxes.length; i++) {
        sketchBoxes[i].removeEventListener("mouseover",blackBox);
        sketchBoxes[i].addEventListener("mouseover", blackBox)
    };
}

function colorRainbow() {
    const sketchBoxes = document.querySelectorAll(".grid-box");
    let randomR = 0;
    let randomG = 0;
    let randomB = 0;
    for (let i = 0; i < sketchBoxes.length; i++) {
        sketchBoxes[i].removeEventListener("mouseover",rainbowBox);
        sketchBoxes[i].addEventListener("mouseover", rainbowBox);
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
    const regex = new RegExp(/[^0-9]/, 'g');
    gridSize = prompt("Please enter a grid size (integer between 16-100):")
    while ((gridSize == null) || gridSize.match(regex) || gridSize < 16 || gridSize > 100) {
        gridSize = prompt("Invalid choice. Please enter a grid size (integer between 16-100):","16")
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