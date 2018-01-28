float d = 25; 
float ballX[], ballY[];
float speedX[], speedY[]; 

int playerLives = 3; 

boolean playerMoveUp, playerMoveDown;
boolean gameOver = false; 

Paddle player1, player2; 
circle []c;
int time = 0;
int bb = 0;
void setup() {
  size(700, 600); 
  ballX = new float[100];
  ballY = new float[100];
  speedX = new float[100];
  speedY = new float[100];
  textSize(24); 
  player1 = new Paddle(width-30); 
  player2 = new Paddle(width-680);
  c = new circle[100];
  for (int i = 0; i < 100; i++)
  {
    c[i] = new circle(i);
    c[i].reset();
  }
}

void draw() {
  bb++;
  background(#FC2B91); 
  stroke(0);
  line(350, 0, 350, 600);
  noStroke();
  if (!gameOver) {
    time = millis()/1000; 
 

    fill(#FADE08); 
    for (int i = 0; i < 1; i++)
      ellipse(ballX[i], ballY[i], d, d); 

    fill(255); 
    text("LIVES: " + playerLives, width*.2, height*.10); 
    for (int i = 0; i < 1; i++)
    { 
      c[i].updateBall(); 
      c[i].checkCollision();
    }
    player1.update(); 
    player1.display(1);
    player2.update(); 
    player2.display(2);
  }
  text("TIME: " + time, width*.4, height*.10); 
  for (int i = 0; i < bb/180.0; i++)
    c[i].checkLives();
}