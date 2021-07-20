import "../scss/_main.scss";

let newItemForm = document.getElementsByClassName("main");

newItemForm[0].addEventListener("submit", (event) => {
  event.preventDefault();
  let input = event.target.elements[0];
  let inputError = document.getElementsByClassName("main__input-info--danger");
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(mailformat)) {
    input.value = "";
    input.classList.remove("main__input--danger");
    inputError[0].innerText = "";
  } else {
    inputError[0].innerText = "Please provide a valid email adress";
    input.classList.add("main__input--danger");
  }
});
