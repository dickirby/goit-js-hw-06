const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((element) => {
  const elem = document.createElement("li");
  elem.textContent = element;
  elem.classList.add("item");
  document.querySelector("#ingredients").append(elem);
});
