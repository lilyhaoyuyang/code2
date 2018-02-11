var s,c,rs = 50,e = [],sp = 1,am = 5,ded,s;

function preload(){
 // ded = loadSound('dead.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = color(200);
  background(c);
  for(var i = 0;i < am;i++){
    e[i] = new Enemy(round(random(3)),sp,75,100);
  }
}

function draw() {
  background(c);
  s = round((width/height)*rs);
  stroke(0);
  strokeWeight(10);
  noFill();
  rect(5,5,width-10,height-10);
  fill(0,150,0);
  ellipse(width/2,height/2, s,s);
  strokeWeight(3);
  fill(230);
  for(var i = 0;i < am;i++){
    e[i].move();
    if(1 == 1){
      e[i].checkM();
      if(e[i].touch){
        e[i] = new Enemy(round(random(3)),sp,75,100);
        sp+= 0.1;
        //ded.rate(random(0.8,1.3));
        //ded.play();
      }
    }
    
    e[i].checkL(rs);
    if(e[i].lose){
        textSize(200);
      textAlign(CENTER,CENTER);
        fill(0,100,255);
        noLoop();
        text('You Lose',width/2,height/2);
      }
    strokeWeight(3);
  fill(200,0,0);
    e[i].display();
  }
  textAlign(CENTER,CENTER);
  textSize(100);
  fill(0,0,0,0);
  text('Score = ' + round(millis()),400,100);
  fill(230);
  stroke(0);
  strokeWeight(10);
  noFill();
  rect(5,5,width-10,height-10);
  strokeWeight(1);
}

function Enemy(mode,speed,min,max){
  this.touch = false;
  this.lose = false;
  if(mode == 0){
    this.x = random(width);
    this.y = 0;
  }else if(mode == 1){
    this.x = 0;
    this.y = random(height);
  }else if(mode == 2){
    this.x = width;
    this.y = random(height);
  }else if(mode == 3){
    this.x = random(width);
    this.y = height;
  }
  this.sp = random(0.5,speed);
  this.s = random(min,max);
  this.r = atan2((height/2)-this.y,(width/2)-this.x);
  this.sx = this.sp * cos(this.r)
  this.sy = this.sp * sin(this.r)
  this.display = function(){
    ellipse(this.x,this.y,this.s,this.s);
  }
  this.move = function(){
    this.x += this.sx;
    this.y += this.sy;
    if(this.x < 0){
      this.x = width;
    }
    if(this.y < 0){
      this.y = height;
    }
    if(this.x > width){
      this.x = 0;
    }
    if(this.y > height){
      this.y = 0;
    }
  }
  
  this.checkM = function(){
    var d = dist(this.x,this.y,mouseX,mouseY);
    if(d < this.s/2){
      this.touch = true;
    }else{
      this.touch = false;
    }
  }
  this.checkL = function(size){
    var d1 = dist(this.x,this.y,width/2,height/2);
    if(d1 < size/2){
      this.lose = true;
    }else{
      this.lose = false;
    }
  }
}