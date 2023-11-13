let fontSizeControl = document.querySelector("#font-size-control");
let spanText = document.querySelector("#text");
spanText.style.fontSize = fontSizeControl.value + "px";
fontSizeControl.addEventListener("input", () => {
  spanText.style.fontSize = fontSizeControl.value + "px";
});
