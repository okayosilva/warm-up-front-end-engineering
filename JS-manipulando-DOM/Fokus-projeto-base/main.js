// html
const htmlContext = document.querySelector("html");

// context buttons
const shortRestButton = document.querySelector(".app__card-button--curto");
const longRestButton = document.querySelector(".app__card-button--longo");
const focusButton = document.querySelector(".app__card-button--foco");
const toggleButtonListAll = document.querySelectorAll(".app__card-button");

// select
const timerCountDownContainer = document.querySelector(".app__card-timer");
const imageSwitch = document.querySelector(".app__image");

const titleSwitch = document.querySelector(".app__title");
const titleStrongSwitch = document.querySelector(".app__title-strong");

const titleElement = document.querySelector("title");

const startButton = document.querySelector("#start-pause");
const titleButtonTimer =
  document.querySelector("#start-pause").lastElementChild;
const imageButtonTimer =
  document.querySelector("#start-pause").firstElementChild;

const isActiveAudio = document.querySelector("#alternar-musica");
const audio = new Audio("./sons/luna-rise-part-one.mp3");
const playAudio = new Audio("./sons/play.wav");
const pauseAudio = new Audio("./sons/pause.mp3");
const alertAudio = new Audio("./sons/beep.mp3");

let timeInSeconds = 1500;
let timerInterval;
timerCountDownContainer.innerHTML = `00:00`;

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
  showTimer();
  toggleButtonListAll.forEach((button) => {
    button.classList.remove("active");
  });

  htmlContext.setAttribute("data-contexto", context);
  toggleImage(context);
  toggleTitle(context);
};

const timerCountDown = () => {
  if (timeInSeconds <= 0) {
    alertAudio.volume = 0.2;
    alertAudio.play();

    imageButtonTimer.setAttribute("src", "./imagens/play_arrow.png");
    titleButtonTimer.textContent = `Começar`;

    clearIntervalTimer();
    alert("Tempo esgotado");
    return;
  }

  showTimer();
  imageButtonTimer.setAttribute("src", "./imagens/pause.png");
  titleButtonTimer.textContent = `Pausar`;
  timeInSeconds--;
};

const showTimer = () => {
  const time = new Date(timeInSeconds * 1000);
  const timeFormatted = time.toLocaleTimeString("pt-BR", {
    minute: "2-digit",
    second: "2-digit",
  });

  timerCountDownContainer.textContent = timeFormatted;
  titleElement.textContent = `Fokus - ${timeFormatted}`;
};

const initTimer = () => {
  if (timerInterval) {
    pauseAudio.volume = 0.2;
    pauseAudio.play();
    imageButtonTimer.setAttribute("src", "./imagens/play_arrow.png");
    titleButtonTimer.textContent = `Começar`;
    clearIntervalTimer();
    return;
  }

  playAudio.volume = 0.2;
  playAudio.play();
  timerInterval = setInterval(timerCountDown, 1000);
};

const clearIntervalTimer = () => {
  clearInterval(timerInterval);
  timerInterval = null;
};

// event listeners

isActiveAudio.addEventListener("change", () => {
  audio.loop = true;
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});

// context buttons
shortRestButton.addEventListener("click", (event) => {
  timeInSeconds = 300;
  toggleContext("descanso-curto", event);
  shortRestButton.classList.add("active");
});

longRestButton.addEventListener("click", (event) => {
  timeInSeconds = 900;
  toggleContext("descanso-longo", event);
  longRestButton.classList.add("active");
});

focusButton.addEventListener("click", (event) => {
  timeInSeconds = 1500;
  toggleContext("foco", event);
  focusButton.classList.add("active");
});

startButton.addEventListener("click", () => initTimer());

showTimer();
