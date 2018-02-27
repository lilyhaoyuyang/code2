// USING THE P5.JS LIBRARY
var birds = [];
var speedup = 1.5;
var score = 0;
var hitredturner = 100;
var hitting = false;

function Bird() {
  this.x = floor(random(width));
  this.y = 0;
  this.r = 40
    this.xspeed = random(-1, 1)*speedup;
  this.yspeed = random(1, 2)*speedup;
  speedup += 0.03;
  this.deathSpeed = 1;
  this.display = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    var disMB = dist(mouseX, mouseY, this.x+this.r/2, this.y+this.r/2)
      if (disMB<this.r)
      fill(255, 0, 0);
    else
      fill(255, 255, 0);
    ellipse(this.x, this.y, this.r, this.r);
  }
  this.outofbounds = function(index) {
    if (this.y>height) {
      birds.splice(index, 1);
      var bird = new Bird();
      birds.push(bird);
      score -= 1;
      hitredturner = 0;
    }
    if (this.x<this.r/2 || this.x>width-this.r/2) {
      this.xspeed *= -1
    }
  }
  this.shoot = function() {
    var disMB = dist(mouseX, mouseY, this.x+this.r/2, this.y+this.r/2)
      if (disMB<this.r) {
      hitting = true;
      this.r -= this.deathSpeed;
    }
  }
  this.shotdeath = function(index) {
    if (this.r<25) {
      birds.splice(index, 1);
      var bird = new Bird();
      birds.push(bird);
      score += 1;
    }
  }
}

function shooter() {
  fill(20, 150, 120);
  if (hitredturner<27) {
    fill(255, 0, 0);
  }
  rect(width/2-55/2, height-60, 55, 55);
}

function lineCreator() {
  strokeWeight(4);
  stroke(30, 115, 250);
  if (hitting) {
    stroke(30, 250, 45)
  }
  line(mouseX, mouseY, width/2, height-60);
  strokeWeight(1);
  hitting = false; 
  stroke(1);
}

function setup() {
  createCanvas(windowWidth-30, windowHeight-30);
  background(155);
  shooter();
  var bird = new Bird();
  birds.push(bird);
}

function draw() {
  document.getElementById('display').innerHTML = "score: " + score;
  background(155);
  for (i = birds.length-1; i>=0; i--) {
    birds[i].display();
    birds[i].shoot(); 
    birds[i].shotdeath(i);
    birds[i].outofbounds(i);
  }
  lineCreator();
  shooter();
  hitredturner++;
  if (score<0) {
    //alert("you have lost")
    birds = [];
    speedup = 1.5;
    score = 0;
    hitredturner = 100;
    hitting = false;
    background(155);
    shooter();
    var bird = new Bird();
    birds.push(bird);
  }
}