let inp = document.querySelector("#validation-input");
let datact = Number(inp.dataset.length);
inp.addEventListener("blur", () => {
  if (inp.value.trim().length !== datact) {
    inp.classList.remove("valid");
    inp.classList.add("invalid");
  } else {
    inp.classList.remove("invalid");
    inp.classList.add("valid");
  }
});
