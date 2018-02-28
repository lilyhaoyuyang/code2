function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  fill(255, 0, 0);
  rect(100, 100, mouseX/10, 100);
  fill(255, 255, 0);
  rect(200, 200, mouseX/10, 100);
  fill(0, 0, 255);
  rect(300, 300, mouseX/10, 100);
}