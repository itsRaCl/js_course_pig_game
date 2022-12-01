var d, currentScore, heldScore,temp, temp1;
var players, activePlayer, score;
players= [0, 1];
currentScore= [];
heldScore = [];
function newGame(){
    document.querySelector(".winnerLabel-0").classList.add("disp");
    document.querySelector(".winnerLabel-1").classList.add("disp");
    document.querySelector(".player-1-label").classList.remove("winner");
    document.querySelector(".player-0-label").classList.remove("winner");
    activePlayer= players[0];
    currentScore = [0,0];
    heldScore = [0,0];
    document.querySelector(".btn-roll").addEventListener("click", rollDie);
    document.querySelector(".btn-new").addEventListener("click", newGame);
    document.querySelector(".btn-hold").addEventListener("click", hold);
    document.querySelector(".tempScore-0-Number").textContent = 0;
    document.querySelector(".tempScore-1-Number").textContent = 0;
    document.querySelector(".player-1-cscore").textContent = 0;
    document.querySelector(".player-0-cscore").textContent = 0;
}
function tempScore(score){
    temp = currentScore[activePlayer];
    currentScore[activePlayer]=temp + score;
    console.log(activePlayer);
    document.querySelector(".tempScore-"+ activePlayer+ "-Number").textContent =currentScore[activePlayer];

}

function rollDie(){
    d= Math.floor(Math.random()*6 +1);
    document.querySelector(".die").src= "die-"+d+".png";
    if (d!==1){
        tempScore(d);
    }else {
        console.log("else");
        document.querySelector(".tempScore-" + activePlayer + "-Number").textContent = 0;
        currentScore[activePlayer]= 0; 
        changePlayer();
        console.log(activePlayer);
    }
}

function hold(){
    temp1 =heldScore[activePlayer];
    heldScore[activePlayer]=temp1 +currentScore[activePlayer];
    currentScore[activePlayer]=0;
    document.querySelector(".player-"+activePlayer +"-cscore").textContent= heldScore[activePlayer];
    document.querySelector(".tempScore-"+activePlayer+"-Number").textContent = 0;
    changePlayer();
}


function changePlayer(){
    if (heldScore[activePlayer]>=100  ){
        document.querySelector(".player-"+activePlayer+"-label").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-label").classList.remove("active");
        document.querySelector(".winnerLabel-"+activePlayer).classList.remove("disp");
        document.querySelector(".btn-roll").removeEventListener("click",rollDie);
        document.querySelector(".btn-hold").removeEventListener("click", hold);
    }
    else if (activePlayer === players[0]){
        activePlayer =players[1];
        document.querySelector(".player-0-label").classList.remove("active");
        document.querySelector(".player-1-label").classList.add("active");
    }else  if (activePlayer === players[1]){
        document.querySelector(".player-" + activePlayer + "-label");
        activePlayer =players[0];
        document.querySelector(".player-1-label").classList.remove("active");
        document.querySelector(".player-0-label").classList.add("active");
    }
}

setInterval(function(){
    var pw , ph;
pw=innerWidth;
ph=innerHeight;
console.log("called")
if (ph>pw){
    document.querySelector(".potrait").classList.remove("disp");
    document.querySelector(".player-0-panel").classList.add("disp");
    document.querySelector(".player-1-panel").classList.add("disp");
    document.querySelector(".die-face-area").classList.add("disp");
    document.querySelector(".button-area").classList.add("disp");
}else {
    document.querySelector(".potrait").classList.add("disp");
    document.querySelector(".player-0-panel").classList.remove("disp");
    document.querySelector(".player-1-panel").classList.remove("disp");
    document.querySelector(".die-face-area").classList.remove("disp");
    document.querySelector(".button-area").classList.remove("disp");
}
},1000);

newGame();   