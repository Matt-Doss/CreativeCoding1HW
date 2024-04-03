function setup() {
  createCanvas(300, 500);
}

function draw() {
  background(220);
  //neck
  ellipse(150,155, 40, 60);
  //head
  ellipse(150,100,75, 90);
  //torso
  rect(120, 160, 60, 150);
  //eyes
  strokeWeight(10);
  point(130, 90);
  point(170, 90);
  //nose
  point(150, 100);
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
  circle(100,295,10);
  //right hand
  circle(200,295,10);
  //left leg
  line(120, 310, 120, 390);
  //right leg
  line(180, 310, 180, 390);
  //left foot
  line(120,390,100,390);
  //right foot
  line(180,390,200,390);
  //left ear
  circle(105,100, 10);
  //right ear
  circle(195,100,10);
  //hair
  line(120,75,120,80);
  line(130,65,130,80);
  line(140,62,140,80);
  line(150,58,150,80);
  line(160,58,160,80);
  line(170,62,170,80);
  line(180,75,180,80);
  //title
  text('Matts Portrait', 120,30)
  //signature
  text('By Matt Doss', 120, 450)
}