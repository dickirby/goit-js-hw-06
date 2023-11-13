function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divCtrls = document.querySelector("#controls");
const containerBox = document.querySelector("#boxes");
function createBoxes(amount) {
  amount = Number(divCtrls.querySelector("input").value);
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const element = amount[i];
    const divelem = document.createElement("div");
    divelem.style.height = size + "px";
    divelem.style.width = size + "px";
    divelem.style.backgroundColor = getRandomHexColor();
    containerBox.appendChild(divelem);
    size += 10;
  }
}
function destroyBoxes() {
  containerBox.innerHTML = "";
}
divCtrls.querySelector("[data-create]").addEventListener("click", createBoxes);
divCtrls
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
