// html
const htmlContext = document.querySelector("html");

// context buttons
const shortRestButton = document.querySelector(".app__card-button--curto");
const longRestButton = document.querySelector(".app__card-button--longo");
const focusButton = document.querySelector(".app__card-button--foco");

// select
const timerContainer = document.querySelector(".app__card-timer");
const imageSwitch = document.querySelector(".app__image");
const titleSwitch = document.querySelector(".app__title");
const titleStrongSwitch = document.querySelector(".app__title-strong");
const startButton = document.querySelector("#start-pause");

// toggle context
const toggleContext = (context, event) => {
  event.preventDefault();
  // htmlContext.dataset.contexto = context;
  htmlContext.setAttribute("data-contexto", context);
};

const toggleButton = (button) => {
  if (button.classList.contains("active")) {
    button.classList.remove("active");
  } else {
    button.classList.add("active");
  }
};

// event listeners

startButton.addEventListener("click", () => {
  console.log("start");
});

// context buttons
shortRestButton.addEventListener("click", (event) => {
  const timeValue = 300;
  toggleContext("descanso-curto", event);
});

longRestButton.addEventListener("click", (event) => {
  const timeValue = 900;
  toggleContext("descanso-longo", event);
});

focusButton.addEventListener("click", (event) => {
  const timeValue = 1500;
  toggleContext("foco", event);
});
