
function setup() {
  createCanvas(500, 500);
 colorMode(HSB);
}

function draw() {
   background(0);
  for(var i = 0;i< 10;i++){
  fill(0, 255, i*20+10);
  rect(i*50+10, 235, 30, 30);
  }
}
function mousePressed(){

}