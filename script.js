let blueScore = document.getElementById("blue-score")
let redScore = document.getElementById("red-score")
let blueGamju = document.getElementById("blue-gamju")
let redGamju = document.getElementById("red-gamju")
let score = 0
let score2 = 0
let score3 = 0
let score4 = 0

function plus1Blue(){
  score +=1
  blueScore.innerText= score
  updateScores()
}
    
function plus2Blue(){
  score +=2
  blueScore.innerText= score
  updateScores()
}

function plus3Blue(){
  score +=3
  blueScore.innerText= score
  updateScores()
}

function plus1Red(){
  score2 +=1
  redScore.innerText= score2
  updateScores()
}
    
function plus2Red(){
  score2 +=2
  redScore.innerText= score2
  updateScores()
}

function plus3Red(){
  score2 +=3
  redScore.innerText= score2
  updateScores()
}

function updateScores() {
  if (score > score2) {
    blueScore.style.color = 'yellow';
    redScore.style.color = 'white'; // Reset color to default
  } else if (score2 > score) {
    redScore.style.color = 'yellow';
    blueScore.style.color = 'white'; // Reset color to default
  } else {
    // If scores are tied, reset both colors
    blueScore.style.color = 'white';
    redScore.style.color = 'white';
  }
}

function plusBlueGj(){
  if (score3 < 5) {
    score3 += 1;
    score2 +=1
    blueGamju.innerText = score3;
    redScore.innerText= score2
    updateScores()
  }
}

function plusRedGj(){
  if (score4 < 5) {
    score4 += 1;
    score +=1
    redGamju.innerText = score4;
    blueScore.innerText= score
    updateScores()
  }
}