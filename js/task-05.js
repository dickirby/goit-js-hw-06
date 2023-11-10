let nameInp = document.querySelector("#name-input");
nameInp.addEventListener("input", () => {
  let nameOut = document.querySelector("#name-output");
  nameOut.textContent = nameInp.value || "Anonymous";
});
