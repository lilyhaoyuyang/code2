
function setup() {
  createCanvas(500, 500);
 //colorMode(HSB);
}

function draw() {
   background(0);
  for(var i = 0;i< 10;i++)
  for(var j = 0;j< 10;j++){
  //fill(i*10+j*10, 255, i*20+10);
  fill(i*30, j*30, 0,255-dist(mouseX,mouseY,i*30, j*30));
  rect(i*50+10, j*50+10, 30, 30);
  }
}
function mousePressed(){

}