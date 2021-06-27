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



//............................................................................................
//création of random number
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// functions for current score 
let currentScore = 0;
let reserveScore = 0;

function currentScoreLose() {
  alert("Vous avez perdu")
  document.getElementById("currentScore").textContent = loseScore;
  currentScore = 0;
}


function rollDice() {
  let randomNumber = getRandomInt(1, 6);
  if (randomNumber === 1) {
    currentScoreLose();
  } else {
    console.log(randomNumber);
    currentScore += randomNumber;
    console.log(currentScore);
    document.getElementById("currentScore").textContent = currentScore;
  }
}

function reserve() {
  reserveScore += currentScore;
  console.log(reserveScore);
  document.getElementById("reserveScore").textContent = reserveScore;
}


//here we call functions
let roll = document.getElementById("roll");
let hold = document.getElementById("hold");

roll.addEventListener("click", rollDice);
hold.addEventListener("click", reserve);


// //création of random number
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min+1) ) + min;
// }


// // functions for current score 
// let loseScore = 0;
// let addCurrentScore = 0;


// function currentScoreLose(){
//   alert ("Vous avez perdu")
//   document.getElementById("currentScore").textContent = loseScore;
//   addCurrentScore = 0;
// }


// function addCurrentScoreFunction(){
//   let randomNumber = getRandomInt(1, 6);
//   if (randomNumber === 1){
//     currentScoreLose();
//   } else {
//     alert (randomNumber)
//     addCurrentScore += randomNumber;
//     document.getElementById("currentScore").textContent = addCurrentScore;
//     let goodScore = document.getElementById("currentScore").textContent;
//     return goodScore;
//   }
// }


// //this function add current score to final score when we click on id hold
// let score = document.getElementById("score");

// function add (){
//   score.textContent += addCurrentScoreFunction(goodScore);
// }



// //here we call functions
// let roll = document.getElementById("roll");
// let hold = document.getElementById("hold");

// roll.addEventListener("click", addCurrentScoreFunction);
// hold.addEventListener("click", add);



//document.getElementById("hold").addEventListener("click", addCurrentScoreToScore);


//while(addScore < 40) {
  //console.log ("le chiffre alléatoire", randomNumber);
  //console.log("le nombre fini", addScore);
  //if (addScore > 40) {
    //addScore = score;
    //console.log("vous avez perdu", addScore);
  //}
//}

//console.log ("le score initial", score);



//animation of dice and display of current score
//let oldCurrentScore = document.getElementById("currentScore").textContent = 0;


//function rollDice() {
  //let numberRandom = getRandomInt(1, 6);

  //document.getElementById("dice").classList.add("rotate-vert-center");

  //setTimeout(function() {
    //alert(`Vous avez eu ${numberRandom}`);
    //document.getElementById("dice").classList.remove("rotate-vert-center");

    //if (numberRandom === 1){
      //document.getElementById("currentScore").textContent = 0;
      //document.getElementById('currentScore').textContent = 0;
      //alert(`Perdu, votre score provisoire retombe à 0.`);
    //} else {
      //document.getElementById("currentScore").textContent= oldCurrentScore += numberRandom;
    //}
  //}, 2500);
//}






