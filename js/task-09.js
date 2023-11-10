function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector(".change-color");
function ChangeBgColor(event) {
  const spantext = document.querySelector(".color");
  const randomColor = getRandomHexColor();
  spantext.textContent = randomColor;
  let styleColor = (document.body.style.backgroundColor = randomColor);
}
btnChangeColor.addEventListener("click", ChangeBgColor);
