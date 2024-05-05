var scene = 0;
var characterX = 50;
var userChoice = '';
var houseX;
var animationProgress = 0;

function setup() {
    createCanvas(600, 400);
    houseX = width - 100;
    background(50, 200, 50);
}

function draw() {
    background(220);
    if (scene === 0) {
        startingScene();
    } else if (scene === 6) {
        getGoingPrompt();
    } else if (scene === 1) {
        exploreScene();
    } else if (scene === 2) {
        houseScene();
        if (userChoice === 'c') {
            animateMoveRight();
        }
    } else if (scene === 3) {
        hearNoise();
    } else if (scene === 3.1) {
        exhaustedLossScene();
    } else if (scene === 3.2) {
        hideUnderBedOrCloset();
    } else if (scene === 4) {
    runningLowOnWaterScene();
    } else if (scene === 7) {
            nobodyCame();
}else if (scene === 8) {
  rightTurnWin();
}
  else if (scene===9){
    hide();
  }
  else if (scene ===10){
    runAway();
  }else if (scene===11){
    postHideRun();
  }else if (scene === 12){
    hidingAgain();
  }
}

function keyPressed() {
    console.log("Key pressed:", key);
    console.log("Current scene:", scene);

    if (scene === 0) { 
        if (key === 'y' || key === 'Y') {
            scene = 1; 
        } else if (key === 'n' || key === 'N') {
            scene = 6; 
        }
    } else if (scene === 6) { 
        if (key === 'y' || key === 'Y') {
            scene = 1; 
        }
    } else if (scene === 2) { 
        if (key === 'b' || key === 'B') {
            scene = 3; 
        } else if (key === 'k' || key === 'K') {
            scene = 7; 
        } else if (key === 'c' || key === 'C') {
            userChoice = key.toLowerCase();
            characterX = 50;
            animationProgress = 0;
            continueAnimation(); 
        }
    } else if (scene === 7) { 
        if (key === 'y' || key === 'Y') {
            scene = 4; 
        } else if (key === 'n' || key === 'N') {
            scene = 2; 
        }
    } else if (scene === 3) { 
        if (key === 'y' || key === 'Y') {
            if (userChoice === 'k') {
                continueAnimation();
            } else {
                userChoice = 'y';
                nobodyCame();
            }
        } else if (key === 'n' || key === 'N') {
            userChoice = 'n';
            nobodyCame();
        }
    } else if (scene === 4) {
      runningLowOnWaterScene();
        }else if (scene === 3.1) { 
        if (key === 'l' || key === 'L') {
            exhaustedLossScene();
        }else if (scene === 8) {
          if (key === 'r' || key === 'R'){
          rightTurnWin();}
    else if(scene ===9) {
          hide();
        }else if (scene === 11){
          if (key === 'y' || key === 'Y')
          postHideRun();
        }else if (scene === 12){
          if(key=== 'N' || key === 'N'){
            hidingAgain();
          }
        }
        }
}
}


function continueAnimation() {
    if (scene === 3) {
        animationProgress += 5;
        characterX += 5;
        if (animationProgress >= 100) {
            scene = 4;
            userChoice = 'c';
        }
    }
}


function startingScene() {
    background(220);
    textSize(20);
    textAlign(CENTER);
    text("You wake up in the woods with no memory of how you got here.\nDo you want to explore? Enter: Yes (y) or (n).", width / 2, height / 2);
}

function exploreScene() {
    background(50, 200, 50);
    characterX += 5;
    fill(255);
    ellipse(characterX, height / 2, 30, 30);
    if (characterX >= width - 50) {
        scene = 2;
        characterX = 50;
    }
}

function houseScene() {
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("You come across a house. \nDo you want to break in (b), knock (k), or continue (c)?", width / 2, height / 2);
}

function transitionScene() {
    if (userChoice === 'b') {
        hearNoise();
    } else if (userChoice === 'k') {
        nobodyCame();
    } else if (userChoice === 'c') {
        animateMoveRight();
    }
}

function hearNoise() {
    background(220);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("You hear a noise. Will you hide (h) or run (r)?", width / 2, height / 2);
    scene = 3; 
  if(key === 'h' || key === 'H'){
    scene = 9;
  }else if (key === 'r' || key === 'R'){
    scene = 10;
  }
}

function nobodyCame() {
    background(220);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Nobody came to the door. \nIt is probably time to continue. \nWhat do you think? Yes (y) or No (n)", width / 2, height / 2);
    if (userChoice === 'y') {
        scene = 4;
    } else if (userChoice === 'n') {
        scene = 2;
    } else if (userChoice === 'k') {
        if (scene === 3) {
            continueAnimation();
        } else {
            scene = 7;
        }
    }
    userChoice = '';
}

function animateMoveRight() {
    if (animationProgress < width - 50) {
        background(50, 200, 50);
        characterX = 50 + animationProgress;
        animationProgress += 5;
        fill(255);
        ellipse(characterX, height / 2, 30, 30);
    } else {
        userChoice = '';
        animationProgress = 0;
        scene = 4; 
    }
}
function runningLowOnWaterScene() {
    background(220);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("You are running low on water,\nand getting very dehydrated from this exploring.\nYou need to find some fast.\nWill you turn left (L) or right (R)?", width / 2, height / 2);
    
    if (key === 'l' || key === 'L') {
        scene = 3.1;
    } else if (key === 'r' || key === 'R') {
        scene = 8;
    }
}

function hideUnderBedOrCloset() {
    background(220);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("You decide to hide. \nDo you want to hide under the bed (b) \nor in the closet (c)?", width / 2, height / 2);
}

function exhaustedLossScene() {
    
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("You walk... and keep walking.\nYou find nothing.\nYou're passing out \nYou Lose", width / 2, height / 2);
}

function getGoingPrompt() {
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Really, you should get going. Press 'Y' to continue exploring.", width / 2, height / 2);
}

function rightTurnWin(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("You walk... \nAnd in the distance you see a town! \nYou're saved!\nYou win.", width / 2, height / 2);
}

function hide(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Someone is coming. \nThey might see you. \nThis is your last chance to run. \nDo you want to?\nYes(Y) No(N)", width /2, height /2);
  if (key === 'y' || key === 'R'){
    scene = 11;
  }else if (key === 'n' || key === 'N'){
    scene = 12;
  }
}

function runAway(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("You made it! \nAnd there's a town in the distance! \nYou're safe! \nYou win!", width / 2, height /2);
}

function postHideRun(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("You barely made it! \nLuckily there's a town in the difference you can retire to safely. \nYou Win!", width / 2, height / 2)
}

function hidingAgain(){
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("You were caught and captured. \nWho knows how you're gonna escape this one. \nYou lose.", width / 2, height / 2)
}