import "./scss/style.scss";
import "./style.css";

import validator from "validator";
import isEmail from "validator/lib/isEmail";

const form = document.getElementById("form");
const emailInput = document.getElementById("emailInput");
const emailStateText = document.querySelector(".footer__error-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validator.isEmail(emailInput.value)) {
    emailStateText.classList.add("error-display");
  } else {
    emailStateText.classList.remove("error-display");
  }
});
