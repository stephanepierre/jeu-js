//creation of rules button
const rules = document.getElementById("rules")
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

const status = document.getElementById('message');
let activePlayer = "PLAYER 1";
let randomNumber = 0;

const loseMessage = () => `Perdu, vous avez obtenu 1, au joueur ${activePlayer} de jouer`;
const reserveMessage = () => `Vous réservez votre score, au joueur ${activePlayer} de jouer`;
const randomNumberMessage = () => `Vous avez obtenu ${randomNumber}, relancer ou reserver`;
const winMessage = () => ` Félicitation ${activePlayer} vous avez gagné !!`;

//création of random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// functions for current score 
let currentScore = 0;
let reserveScore = 0;
let loseScore = 0;

//function at call if random number is 1 (you lose)
function currentScoreLose() {
  status.innerHTML = loseMessage();
  document.getElementById("currentScore").textContent = loseScore;
  currentScore = 0;
}


//function to add random number to current score if it's not 1(you win). Else you lose
function rollDice() {
  randomNumber = getRandomInt(1, 6);
  setTimeout(function(){
    if (randomNumber === 1) {
      currentScoreLose();
    } else {
      status.innerHTML = randomNumberMessage();
      currentScore += randomNumber;
      document.getElementById("currentScore").textContent = currentScore;
    }
  }, 2500)
}

//function to add current score to your score if you click on "reserver".
function reserve() {
  reserveScore += currentScore;
  console.log(reserveScore);
  document.getElementById("reserveScore").textContent = reserveScore;
  if (reserveScore >= 100){
    status.innerHTML = winMessage();
  }
}


//function to animate the dice. In first you animate and in second, you remove the function 
// to call it again.
function animationDice(){
  dice.classList.add("rotate-vert-center");
  setTimeout(function(){
    dice.classList.remove("rotate-vert-center");
  }, 2500);
}


//here we call functions
let roll = document.getElementById("roll");
let hold = document.getElementById("hold");
let dice = document.getElementById("dice");


roll.addEventListener("click", rollDice);
hold.addEventListener("click", reserve);







