//création bouton règles du jeu
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

//création nombre aléatoire
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min+1) ) + min;
}

//création du lancé de dé
const roll = document.getElementById("roll")
roll.addEventListener('click',()=>{
  var numberRandom = getRandomInt(1, 6)
   // alert(`vous avez eu ${numberRandom}`)
})

//recupération du lancé vers current
const hold = document.getElementById("hold")
hold.addEventListener('click',()=>{
  var 
})

//current score player 1
const current1 = document.getElementById("currentScore1")


// Current score player 2
const current2 = document.getElementById("currentScore2")


//création bouton nouvelle partie








  