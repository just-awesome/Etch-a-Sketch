let side = prompt("Enter the grid side between 1-100 ");
let len = 800/side;
const container = document.querySelector(".container");
for(let i = 1;i<=side;++i) {
    const row = document.createElement("div");
    row.setAttribute("class","row");
    row.style.display = "flex";
    container.appendChild(row);
    for(let j=1;j<=side;++j) {
        const box = document.createElement("div");
        box.setAttribute("class","box");
        box.style.width = `${len}px`;
        box.style.height = `${len}px`;
        row.appendChild(box);
    }
}

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${r},${g},${b})`;
        // container.style.borderColor = `rgb(${r},${g},${b})`;
    })
})

const button = document.querySelector("button");
button.addEventListener("click", () => {
    // boxes.forEach((box)=>{
    //     box.style.backgroundColor = "gray";
    // })
    // const side_new = prompt("Enter the grid side between 1-100 ");
    // boxes.forEach( (box) => {
    //     box.style.width = `${800/side_new}px`;
    //     box.style.height = `${800/side_new}px`;
    // })
    location.reload();
})