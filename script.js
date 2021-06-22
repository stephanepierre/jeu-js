//creation of rules button
const rules = document.getElementById("rules")
  rules.addEventListener('click',()=>{
    alert(`Règles :
      Le jeu comprend 2 joueurs sur un seul et même écran.
      Chaque joueur possède un score temporaire (CURRENT) et un score global (SCORE).
      À chaque tour, le joueur a son CURRENT initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
      résultat d’un lancer est ajouté au CURRENT.
      Lors de son tour, le joueur peut décider à tout moment de:
      - Cliquer sur l’option “Réserver”, qui permet d’envoyer les points du CURRENT vers le SCORE. Ce sera alors le
      tour de l’autre joueur.
      - Lancer le dé. S’il obtient un 1, son score CURRENT est perdu et c’est la fin de son tour.
      Le premier joueur qui atteint les 100 points sur SCORE global gagne le jeu.`)
  })


let score = document.getElementById("score");
let currentScore = document.getElementById("currentScore");




//............................................................................................

//création of random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min+1) ) + min;
}


//animation of dice and display of current score
let oldCurrentScore = document.getElementById("currentScore").textContent = 0;


function rollDice() {
  let numberRandom = getRandomInt(1, 6);

  document.getElementById("dice").classList.add("rotate-vert-center");

  setTimeout(function() {
    alert(`Vous avez eu ${numberRandom}`);
    document.getElementById("dice").classList.remove("rotate-vert-center");

    if (numberRandom === 1){
      document.getElementById("currentScore").textContent = 0;
      alert(`Perdu, votre score provisoire retombe à 0.`);
    } else {
      document.getElementById("currentScore").textContent= oldCurrentScore += numberRandom;
    }

  }, 2500);
}


//function to reset current score

function resetCurrentScore() {
  currentScore.textContent = 0;
}

//reset score
function resetScore() {
  score.textContent = 0;
}


//button new game
const newGame = document.getElementById("newgame");

newGame.addEventListener("click", () => {
  resetScore();
  resetCurrentScore();
})

//add to score
let hold = document.getElementById("hold");
let oldScore = document.getElementById("Score").textContent = 0;

hold.addEventListener("click", () => {
  score.textContent = oldScore + currentScore.textContent;
  alert (score.textContent);
  resetCurrentScore();

})



