var player;
var speed = 5;
var objects = [];
var obstacles = [];
var exitPosition;
var playerReachedExit = false;
function setup() {
  createCanvas(600, 400);
  player = create_player(100,100,20,[255, 0, 0]);
  create_obstacles();
  exitPosition = createVector(width - 50, height - 50);
}

function draw() {
  background(220);
  player.draw();
  move_player();
  for(let obj of objects){
    obj.draw();
  }
  for(let obstacle of obstacles){
    move_obstacle(obstacle)
    obstacle.draw();
  }
  drawExit();
  drawBorders();
  checkWinCondition();
  if (playerReachedExit){
    displayWinMessage();
  }
}

function move_player() {
  if (keyIsDown(65)) {
    player.position.x -= 1;
  }
  if (keyIsDown(68)) {
    player.position.x += 1;
  }
  if (keyIsDown(87)) {
    player.position.y -= 1;
  }
  if (keyIsDown(83)) {
    player.position.y += 1;
  }
}

function mousePressed(){
  objects.push(create_object(mouseX, mouseY, 20, [0, 255, 0]));
}

function create_object(x, y, size, color, vx, vy) {
  return {
    x: x,
    y: y,
    size: size,
    color: color,
    vx: vx, 
    vy: vy, 
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    }
  };
}
function create_player(x,y,size,color){
  return{
    position: createVector(x,y),
    size: size,
    color: color,
    draw: function(){
      fill(this.color);
      rect(this.position.x, this.position.y, this.size, this.size);
    }
  };
}

function create_obstacles(){
  for (let i = 0; i < 5; i++){
    let x = random(width);
    let y = random(height);
    let size = random(10, 30);
    let color = [random(255), random(255), random(255)];
    let vx = random(-1, 1);
    let vy = random(-1, 1);
    obstacles.push(create_object(x, y, size, color));
    
  }
}

function move_obstacle(obstacle) {
  let speed = 1;

  
  if (typeof obstacle.vx !== 'number' || isNaN(obstacle.vx)) {
    obstacle.vx = 0; 
  }
  if (typeof obstacle.vy !== 'number' || isNaN(obstacle.vy)) {
    obstacle.vy = 0; 
  }
  
  obstacle.x += obstacle.vx;
  obstacle.y += obstacle.vy;

  if (random(1) < 0.05) {
    obstacle.vx = random(-speed, speed);
    obstacle.vy = random(-speed, speed);
  }

  obstacle.x = constrain(obstacle.x, 0, width - obstacle.size);
  obstacle.y = constrain(obstacle.y, 0, height - obstacle.size);
}

function drawBorders(){
  let borderThickness = 5;
  fill(0);
  noStroke();
  rect(0,0,width,borderThickness);
  rect(0, height - borderThickness, width, borderThickness);
  rect(0, 0, borderThickness, height);
  rect(width - borderThickness, 0, borderThickness, height);
}

function drawExit(){
  fill(0);
  noStroke();
  rect(exitPosition.x, exitPosition.y, 30, 30);
}

function checkWinCondition() {
  let distance = dist(player.position.x, player.position.y, exitPosition.x, exitPosition.y);
  console.log("Distance to exit:", distance);
  if (distance < 20) { 
    playerReachedExit = true;
  }
}

function displayWinMessage(){
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("You Win!", width / 2, height / 2);
}