let activePlayer = 'player 1';
let randomNumber = 0;
let currentScore = 0;
let reserveScore = 0;
let currentScore2 = 0;
let reserveScore2 = 0;
let loseScore = 0;

const rules = document.getElementById("rules")
const status = document.getElementById('message');
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const dice = document.getElementById("dice");
const newGameFunction = document.getElementById("newgame");


//............................................................................................
// creation of messages
let loseMessage = () => `Perdu ${activePlayer}, vous avez obtenu 1`;
let reserveMessage = () => `Vous réservez votre score, au ${activePlayer} de jouer`;
let randomNumberMessage = () => `Vous avez obtenu ${randomNumber}, relancer ou reserver`;
let winMessage = () => ` Félicitation ${activePlayer} vous avez gagné !!`;


//............................................................................................
//creation of rules button
rules.addEventListener('click',()=>{
  alert(`Règles :
    Le jeu comprend 2 joueurs sur un seul et même écran.
    Chaque joueur possède un score temporaire (CURRENT) et un score global (SCORE).
    À chaque tour, le joueur a son "CURRENT" initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
    résultat d’un lancer est ajouté au "CURRENT".
    Lors de son tour, le joueur peut décider à tout moment de:
    - Cliquer sur l’option “Réserver”, qui permet d’envoyer les points du "CURRENT" vers le "SCORE". Ce sera alors le
    tour de l’autre joueur.
    - Lancer le dé. S’il obtient un 1, son score "CURRENT" est perdu et c’est la fin de son tour.
    Le premier joueur qui atteint les 100 points sur "SCORE" gagne le jeu.`)
})



//............................................................................................
//function to switch between players
function switchPlayer() {
  if (activePlayer === 'player 1') {
    activePlayer = 'player 2';
  } else {
    activePlayer = 'player 1';
  }
}

//function to change variables according to the players
switch (activePlayer) {
  case 'player 1': {
    console.log("1")
    var currentText = document.getElementById("currentScore");
    var reserveText = document.getElementById("reserveScore");
    var current = currentScore;
    var reserved = reserveScore;
    break;
  }
  case 'player 2': {
    console.log("2")
    var currentText = document.getElementById("currentScore2");
    var reserveText = document.getElementById("reserveScore2");
    var current = currentScore2;
    var reserved = reserveScore2;
    break;
  }
  default: {
    console.log('erreur de sélection de joueur');
  }
}


//............................................................................................
//function to reset all score when we click on "Nouvelle partie" button
function newGame() {
  currentText.textContent = 0;
  reserveText.textContent = 0;
  current = 0;
  reserved = 0;
  activePlayer = 'player 1';
}


//............................................................................................
//functions related to current score 
//............................
//création of random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//function at call if random number is 1 (you lose)
function currentScoreLose() {
  status.innerHTML = loseMessage();
  currentText.textContent = loseScore;
  current = 0;
}


//function to add random number to current score if it's not 1(you win). Else you lose
function rollDice() {
  randomNumber = getRandomInt(1, 6);
  setTimeout(function(){
    if (randomNumber === 1) {
      currentScoreLose();
      switchPlayer();
    } else {
      status.innerHTML = randomNumberMessage();
      current += randomNumber;
      currentText.textContent = current;
    }
  }, 2500)
}


//............................................................................................
//function to add current score to your score if you click on "reserver".
function reserve() {
  reserved += current;
  reserveText.textContent = reserved;
  current = 0;
  if (reserved >= 100){
    status.innerHTML = winMessage();
    newGame();
  };
  switchPlayer();
  currentText.textContent = 0;
}


//............................................................................................
//function to animate the dice. In first you animate and in second, you remove the function 
// to call it again.
function animationDice(){
  dice.classList.add("rotate-vert-center");
  setTimeout(function(){
    dice.classList.remove("rotate-vert-center");
  }, 2500);
}


//............................................................................................
//here we call functions
roll.addEventListener("click", rollDice);
hold.addEventListener("click", reserve);
newGameFunction.addEventListener("click", newGame);








