var r1,r2,r3,g1,g2,g3,b1,b1,b3;
function setup() {
  createCanvas(500, 500);
  mousePressed();
  
}

function draw() {
  background(0);
  fill(r1,g1,b1);
  rect(100, 100, 100, 100);
   fill(r2,g2,b2);
  rect(200, 200, 100, 100);
   fill(r3,g3,b3);
  rect(300, 300, 100, 100);
}
function mousePressed(){
  r1 = random(255);
  g1 = random(255);
  b1 = random(255);
  r2 = random(255);
  g2 = random(255);
  b2 = random(255);
  r3 = random(255);
  g3 = random(255);
  b3 = random(255);
  
}