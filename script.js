let timer = 60;
let score = 0;
let newHit = "";

document.querySelector(".panel-bottom").addEventListener("click",function(data){
  let details = Number(data.target.textContent);
  if(details === newHit){
    inceraseScore();
    getNewHit();
    makeBubble();
  }
  
})

function getNewHit(){
  newHit = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = newHit; 
}


function inceraseScore(){
  score += 10;
  document.querySelector("#score-bord").textContent = score;
}

let runTimer = function runTimer(){
  let timefuc = setInterval(function(){
    if(timer > 0){
      timer --;
      document.querySelector("#timerval").textContent = timer
    }else{
      clearInterval(timefuc);
      document.querySelector(".panel-bottom").innerHTML = `Game Over<br><h1>Score Is -</h1>${score }`
    }
  },1000)

  
}

function makeBubble(){
let count = "";
for(let i = 1; i < 200; i++){
  let randomNum = Math.floor(Math.random() *10);
  count += `<div id="bubble">${randomNum}</div>`            
}
document.querySelector(".panel-bottom").innerHTML = count;
}

getNewHit()
runTimer()
makeBubble();