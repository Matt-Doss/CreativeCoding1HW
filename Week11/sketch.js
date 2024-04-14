var handx=100;
var handy=295;
var handmovement;

var earx= 195;
var eary= 100;
var earmovement;

var nosex= 150;
var nosey= 100;
var nosemovement;

var torsox=120;
var torsoy=160;
var torsomovement;

var footx=120;
var footy=390;
var footmovementX;
var footmovementY;

var textSizeStep = 10;
var currentTextSize = 20;
var textGrow = true;
var textCounter = 0;
function setup() {
  createCanvas(300, 500);
  handmovement = random(1, 13);
  earmovement = random(1, 13);
  nosemovement = random(1,13);
  torsomovement=random(1,13);
  footmovementX=random(1,13);
  footmovementY=random(1,13);
}

function draw() {
  background('#fae');
  //neck
  ellipse(150,155, 40, 60);
  //head
  ellipse(150,100,75, 90);
  //torso
  rect(torsox, torsoy, 60, 150);
  torsoy+=torsomovement;
  if(torsoy>=500||torsoy<=0){
    torsomovement*=-1;
  }
  //eyes
  strokeWeight(10);
  point(130, 90);
  point(170, 90);
  //nose
  point(nosex, nosey);
  nosey+=nosemovement;
  if(nosey>=500||nosey<=0){
    nosemovement*=-1;
  }
  //mouth
  line(140, 130, 160, 130);
  //left shoulder
  triangle(115,160,115,170,105,165);
  //right shoulder
  triangle(185,160,185,170,195,165);
  //left arm
  line(110,165,100,300);
  //right arm
  line(190,165,200,300);
  //left hand
  circle(handx,handy,10);
  handx+=handmovement;
  if (handx >= 300||handx <= 0) {
    handmovement*=-1;
  }
  //right hand
  circle(200,295,10);
  //left leg
  line(120, 310, 120, 390);
  //right leg
  line(180, 310, 180, 390);
  //left foot
  line(footx,footy,footx-20,footy);
  footx += footmovementX;
  footy += footmovementY;
  if(footx >= 300||footx<=0){
    footmovementX*=-1;
  }
  if(footy >= 500||footy<=0){
    footmovementY*=-1;
  }
  //right foot
  line(180,390,200,390);
  //left ear
  circle(105,100, 10);
  //right ear
  circle(earx, eary, 10);
  earx+=earmovement;
  if (earx >= 300||earx <=0) {
    earmovement*=-1;
  }
  //hair
  line(120,75,120,80);
  line(130,65,130,80);
  line(140,62,140,80);
  line(150,58,150,80);
  line(160,58,160,80);
  line(170,62,170,80);
  line(180,75,180,80);
  //title
  textSize(currentTextSize);
  text('Matts Portrait', 120, 30);
   if (textCounter < 5) {
    if (textGrow) {
      currentTextSize += textSizeStep;
      if (currentTextSize >= 25) {
        textGrow = false;
        textCounter++;
      }
    } else {
      currentTextSize -= textSizeStep;
      if (currentTextSize <= 15) {
        textGrow = true;
        textCounter++;
      }
    }
  } else {
    textCounter = 0;
  }
  //signature
  text('By Matt Doss', 120, 450);
}