const container = document.getElementById("container");
const colors = ["#12FF1B", "#DA36FF", "#FF1D08", "#ffff00", "#ff00cc", "#00ff00", "#ff5f1f", "#39ff14", "#32CD32", "#FF3F1C", "#83f52c", "#DE1837", "#f547c3", "#FFE608", "#dafa33", "#A7F222", "#2F51F5"]
const squares = 500;

for(let i = 0; i < squares; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", () => setColor(square))

    square.addEventListener("mouseout", () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}