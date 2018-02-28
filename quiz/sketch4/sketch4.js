var r =0,g =0,b =0;
function setup() {
  createCanvas(500, 500);
 
}

function draw() {
   background(r,g,b);
  fill(255, 0, 0);
  rect(100, 100, 100, 100);
  fill(255, 255, 0);
  rect(200, 200, 100, 100);
  fill(0, 0, 255);
  rect(300, 300, 100, 100);
}
function mousePressed(){
  var d1 = dist(mouseX,mouseY,150,150);
  var d2 = dist(mouseX,mouseY,250,250);
  var d3 = dist(mouseX,mouseY,350,350);
  if(d1 < 50 || d2<50 || d3 < 50){
  r = random(255);
  g = random(255);
  b = random(255);
  }
}