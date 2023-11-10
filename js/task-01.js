let runs = 0;

document.querySelectorAll("#categories > .item").forEach((elem) => {
  console.log("Category:", elem.querySelector("h2"));
  console.log("Elements:", elem.querySelectorAll("li").length);
  runs += 1;
});
console.log("Number of categories:", runs);
