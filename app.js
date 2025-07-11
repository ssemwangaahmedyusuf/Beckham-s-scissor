let images = [
  "dice1.png", "dice2.jpg","dice3.png", "dice4.png", "dice5.png", "dice6.png"
]

let move = ""
const play = document.getElementById=("playgame");
playgame.addEventListener("click",function(){
  const randomNumber = Math.random();
  if(randomNumber >=0 && randomNumber < 1/6){
    move = images[0];
  }else if(randomNumber >=1/6 && randomNumber < 2/6){
    move = images[1];
  }else if(randomNumber >=2/6 && randomNumber < 3/6){
    move = images[2]
  }else if(randomNumber >= 3/6 && randomNumber < 4/6){
    move = images[3]
  }else if(randomNumber >= 4/6 && randomNumber < 5/6){
    move = images[4]
  }else if(randomNumber >= 5/6 && randomNumber < 1){
    move = images[5]
  }
  
  alert(move)
})