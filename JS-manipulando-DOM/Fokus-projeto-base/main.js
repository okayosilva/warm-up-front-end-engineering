// html
const htmlContext = document.querySelector("html");

// context buttons
const shortRestButton = document.querySelector(".app__card-button--curto");
const longRestButton = document.querySelector(".app__card-button--longo");
const focusButton = document.querySelector(".app__card-button--foco");
const toggleButtonListAll = document.querySelectorAll(".app__card-button");

// select
const timerContainer = document.querySelector(".app__card-timer");
const imageSwitch = document.querySelector(".app__image");

const titleSwitch = document.querySelector(".app__title");
const titleStrongSwitch = document.querySelector(".app__title-strong");

const startButton = document.querySelector("#start-pause");

const isActiveAudio = document.querySelector("#alternar-musica");
const audio = new Audio("./sons/luna-rise-part-one.mp3");

const phrases = {
  "descanso-curto": {
    title:
      "Que tal dar uma respirada? <br> <strong class='app__title-strong'>Faça uma pausa curta!</strong>",
  },
  "descanso-longo": {
    title:
      "Hora de voltar à superfície. <br> <strong class='app__title-strong'>Faça uma pausa longa.</strong>",
  },
  foco: {
    title:
      "Otimize sua produtividade, <br> <strong class='app__title-strong'>mergulhe no que importa.</strong>",
  },
};

const toggleTitle = (context) => {
  titleSwitch.innerHTML = phrases[context].title;
};

const toggleImage = (context) => {
  imageSwitch.setAttribute("src", `./imagens/${context}.png`);
};

// toggle context
const toggleContext = (context, event) => {
  event.preventDefault();
  toggleButtonListAll.forEach((button) => {
    button.classList.remove("active");
  });

  htmlContext.setAttribute("data-contexto", context);
  toggleImage(context);
  toggleTitle(context);
};

// event listeners

isActiveAudio.addEventListener("change", () => {
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});

startButton.addEventListener("click", () => {
  console.log("start");
});

// context buttons
shortRestButton.addEventListener("click", (event) => {
  const timeValue = 300;
  toggleContext("descanso-curto", event);
  shortRestButton.classList.add("active");
});

longRestButton.addEventListener("click", (event) => {
  const timeValue = 900;
  toggleContext("descanso-longo", event);
  longRestButton.classList.add("active");
});

focusButton.addEventListener("click", (event) => {
  const timeValue = 1500;
  toggleContext("foco", event);
  focusButton.classList.add("active");
});
