const shortRestButton = document.querySelector(".app__card-button--curto");
const longRestButton = document.querySelector(".app__card-button--longo");
const focusButton = document.querySelector(".app__card-button--foco");

const htmlContext = document.querySelector("html");

const toggleContext = (context) => {
  // htmlContext.dataset.contexto = context;
  htmlContext.setAttribute("data-contexto", context);
};

const toggleButton = (button) => {
  console.log(button);
  if (button.classList.contains("active")) {
    button.classList.remove("active");
  } else {
    button.classList.add("active");
  }
};

shortRestButton.addEventListener("click", () => {
  toggleContext("descanso-curto");

});

longRestButton.addEventListener("click", () => {
  toggleContext("descanso-longo");

});

focusButton.addEventListener("click", () => {
  toggleContext("foco");

});
