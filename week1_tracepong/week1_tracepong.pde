Paddles myPaddles = new Paddles();

float xPos, yPos, speedX, speedY;
boolean gameOver = false;
int P1score, P2score;


void setup() {
  size(800, 600);
  xPos = width/2;
  yPos = height/2;
  speedX = random(1, 3);
  speedY = random(1, 3);
}


void draw() {
  background(0);
  noStroke();
  ellipse(xPos, yPos, 20, 20);
  stroke(255);
  line(width/2, 0, width/2, height);
  myPaddles.display();

  xPos -= speedX;
  yPos -= speedY;


  if (yPos < 10 || yPos >= 600 ) {
    //xPos += speedX;
    //yPos *=-speedY;
    speedY *= -1.3;


  }
     if ((xPos <= 25) && (yPos >= (myPaddles.paddle1Y-50)) && (yPos <= (myPaddles.paddle1Y+50))  ) {
      speedX *= -1.1;
      speedY *= 1.1;
    }



  //}
}



void keyPressed() {
  if (key == CODED) {
    if (keyCode == LEFT) {
      myPaddles.paddle2Y -= 20;
    }
    if (keyCode == RIGHT) {
      myPaddles.paddle2Y += 20;
    }
    if (keyCode == UP) {
      myPaddles.paddle1Y -= 20;
    }
    if (keyCode == DOWN) {
      myPaddles.paddle1Y += 20;
    }
  }
}