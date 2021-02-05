//création nombre aléatoire
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min+1) ) + min;
}

const rollDice = () => {document.getElementById("dice").classList.add("rotate-vert-center")};
const numberRandom = () => {getRandomInt(1, 6)}
const alertMessageNumberRandom = () => { alert(`vous avez eu ${numberRandom}`)}


const roll = document.getElementById("roll");
roll.addEventListener('click',numberRandom);
roll.addEventListener('click', alertMessageNumberRandom);
roll.addEventListener('click', rollDice);

const currentScore1 = document.getElementById("currentScore1")
currentScore1 = currentNumber += numberRandom

//creation nb current
let currentNumber = 0

