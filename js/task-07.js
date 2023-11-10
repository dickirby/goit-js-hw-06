let fontSizeControl = document.querySelector("#font-size-control");
let spanText = document.querySelector("#text");
fontSizeControl.addEventListener("input", () => {
  spanText.style.fontSize = fontSizeControl.value + "px";
});
