const formSubmit = document.querySelector(".login-form");
let formEmail = formSubmit.elements["email"];
let formPassw = formSubmit.elements["password"];
let containEmailPassw = {};
function formCheck(event) {
  event.preventDefault();
  if (formEmail.value.length === 0 && formPassw.value.length === 0) {
    return alert("Всі поля повинні бути заповнені!");
  }
  containEmailPassw.email = formEmail.value;
  containEmailPassw.password = formPassw.value;
  console.log(containEmailPassw);
  formSubmit.reset();
}
formSubmit.addEventListener("submit", formCheck);
