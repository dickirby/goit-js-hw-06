const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const allelems = [];
ingredients.forEach((element) => {
  const elem = document.createElement("li");
  elem.textContent = element;
  elem.classList.add("item");
  allelems.push(elem);
});
document.querySelector("#ingredients").append(...allelems);
