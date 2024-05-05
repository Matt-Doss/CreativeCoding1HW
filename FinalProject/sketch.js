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
    console.log("Drawing...");
    
    // Clear the canvas at the beginning of each draw cycle
    background(220);
    // Draw the background based on the current scene
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

    if (scene === 0) { // Exploration scene
        if (key === 'y' || key === 'Y') {
            scene = 1; // Transition to the exploration scene
        } else if (key === 'n' || key === 'N') {
            scene = 6; // Transition directly to the get going prompt scene
        }
    } else if (scene === 6) { // Get going prompt scene
        if (key === 'y' || key === 'Y') {
            scene = 1; // Transition back to exploration scene when 'y' is pressed
        }
    } else if (scene === 2) { // House scene
        if (key === 'b' || key === 'B') {
            scene = 3; // Transition to the hear noise scene
        } else if (key === 'k' || key === 'K') {
            scene = 7; // Transition to the nobody came scene
        } else if (key === 'c' || key === 'C') {
            userChoice = key.toLowerCase();
            characterX = 50;
            animationProgress = 0;
            continueAnimation(); // Transition to the animation scene
        }
    } else if (scene === 7) { // Nobody came scene
        if (key === 'y' || key === 'Y') {
            scene = 4; // Transition to the next scene if the user chooses 'y'
        } else if (key === 'n' || key === 'N') {
            scene = 2; // Transition back to the house scene if the user chooses 'n'
        }
    } else if (scene === 3) { // Scene after animation
        if (key === 'y' || key === 'Y') {
            if (userChoice === 'k') {
                // If 'y' is pressed after knocking, continue the animation
                continueAnimation();
            } else {
                // If 'y' is pressed without knocking, trigger nobodyCame function
                userChoice = 'y';
                nobodyCame();
            }
        } else if (key === 'n' || key === 'N') {
            // If 'n' is pressed, trigger nobodyCame function
            userChoice = 'n';
            nobodyCame();
        }
    } else if (scene === 4) {
      runningLowOnWaterScene();
        }else if (scene === 3.1) { // Scene after choosing to turn left
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
        // Increment animation progress
        animationProgress += 5;
        characterX += 5;
        
        // If animation progress exceeds 100, transition to the next scene
        if (animationProgress >= 100) {
            scene = 4; // Transition to the next scene
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
    // Display the options for the house scene
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("You come across a house. \nDo you want to break in (b), knock (k), or continue (c)?", width / 2, height / 2);
}

function transitionScene() {
    if (userChoice === 'b') {
        hearNoise();
    } else if (userChoice === 'k') {
        // If the player chose to knock, transition to the scene where it asks if they want to break in
        nobodyCame();
    } else if (userChoice === 'c') {
        animateMoveRight();
    }
}

function hearNoise() {
    // Clear the canvas
    background(220);

    // Change background color to green
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("You hear a noise. Will you hide (h) or run (r)?", width / 2, height / 2);

    // Transition to the 'hear noise' scene
    scene = 3; // Adjust the scene number accordingly
  if(key === 'h' || key === 'H'){
    scene = 9;
  }else if (key === 'r' || key === 'R'){
    scene = 10;
  }
}

function nobodyCame() {
    console.log("Inside nobodyCame() function");
    console.log("userChoice:", userChoice);

    // Display text to indicate nobody came
    background(220);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Nobody came to the door. \nIt is probably time to continue. \nWhat do you think? Yes (y) or No (n)", width / 2, height / 2);
    // Set the scene based on user's choice
    if (userChoice === 'y') {
        scene = 4; // Transition to the next scene if the user chooses 'y'
    } else if (userChoice === 'n') {
        scene = 2; // Transition back to the house scene if the user chooses 'n'
    } else if (userChoice === 'k') {
        if (scene === 3) {
            console.log("Calling continueAnimation()...");
            continueAnimation(); // Continue animation if the previous scene was the house and the user chose 'k'
        } else {
            scene = 7; // Continue in the same scene if the user knocked ('k')
        }
    }

    console.log("After nobodyCame() call, scene:", scene);
    console.log("After nobodyCame() call, userChoice:", userChoice);

    // Reset userChoice after processing
    userChoice = '';
}

function animateMoveRight() {
    console.log("Animating move right");
    if (animationProgress < width - 50) {
        // Clear the canvas
        background(50, 200, 50);

        // Update character position
        characterX = 50 + animationProgress;
        animationProgress += 5;

        // Draw the character
        fill(255);
        ellipse(characterX, height / 2, 30, 30);

        console.log("Character position:", characterX); // Log character position
        console.log("Animation progress:", animationProgress); // Log animation progress
    } else {
        userChoice = '';
        animationProgress = 0;
        scene = 4; // Transition to the next scene
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
    // Display the get going prompt
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