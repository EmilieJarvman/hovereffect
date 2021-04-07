const container = document.getElementById("container");
const colors = ["#920391", "#7BB9F0", "#C91454", "#850F55", "#678A00", "#C7FF19", "#A1D600", "#60068A", "#A94FD1", "#FF3F1C", "#F527D3", "#DE1837", "#6715FA", "#FFE608", "#38FFF4", "#A7F222", "#2F51F5"]
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