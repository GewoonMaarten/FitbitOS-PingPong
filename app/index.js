/*
 * Entry point for the watch app
 */
import document from "document";

console.log("App Started");

const rect = document.getElementById("rect");
const batLeft = document.getElementById("bat-left");
const batRight = document.getElementById("bat-right");
const txtScore = document.getElementById("txt-score");

const ball = document.getElementById("ball");

let xSpeed = 4;
let ySpeed = 4;
let batSpeed = 0;

let score = 0;

rect.onmousemove = (event) => {
  if(batLeft.y >= 0 && batLeft.y <= 190){
    
    batSpeed = event.screenY  - batRight.y
    
    if(event.screenY > 190){
      batLeft.y = 190;
      batRight.y = 190;
    } else {
      batLeft.y = event.screenY;
      batRight.y = event.screenY;
    }
  }

}

let timerBall = setInterval(() => {
  ball.x += xSpeed;
  ball.y += ySpeed;
  
  if(ball.y < 0){
    ball.y = 0;
    ySpeed = -ySpeed;
  } else if (ball.y + 10 > 250){
    ball.y = 240;
    ySpeed = -ySpeed;
  }
  
  if(ball.x < 0 || ball.x > 348){
    xSpeed = Math.floor(Math.random() * 5) + 3;
    ySpeed = Math.floor(Math.random() * 9) - 4;
    ball.x = 169;
    ball.y = 120;
    
    score = 0;
    txtScore.text = `Score: ${score}`;
  }
  
  
  if((ball.x < batRight.x + batRight.width &&
    ball.x + ball.width > batRight.x &&
    ball.y < batRight.y + batRight.height &&
    ball.y + ball.height > batRight.y) || 
    (ball.x < batLeft.x + batLeft.width &&
    ball.x + ball.width > batLeft.x &&
    ball.y < batLeft.y + batLeft.height &&
    ball.y + ball.height > batLeft.y)){
    
    ySpeed += (batSpeed /2);
    xSpeed = -xSpeed;

    score += 1;
    txtScore.text = `Score: ${score}`;
  }
}, 20);