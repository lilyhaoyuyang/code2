class circle {
  int now = 0;
  circle(int e) {
    now = e;
  }

  void updateBall() {
    ballX[now] += speedX[now]; 
    ballY[now] += speedY[now];
  }

  void reset() {
    ballX[now] = width/2; 
    ballY[now] = height/2; 

    speedX[now] = random(2, 4); 
    speedY[now] = random(2, 4);
  }

  void checkCollision() {
    if (ballX[now] >= width-d/2) {
      playerLives -= 1; 
      reset();
    }

    if (ballX[now] <= d/2 + 10) {
      speedX[now] *= -1;
    }

    if (ballY[now] >= height-d/2 || ballY[now] <= d/2) {
      speedY[now] *= -1;
    }

    if (ballX[now] >= player1.xPos - d/2 && ballY[now]>= (player1.yPos-player1.rectSize/2) && 
      ballY[now]<= (player1.yPos+player1.rectSize/2)) {
      speedX[now] *= -1; 
      speedY[now] *= 1;
    }
  }

  void checkLives() {
    if (playerLives <= 0) {
      text("Game Over :( ", width*.4, height/2); 
      gameOver = true;
    }
    if (time >= 30) {
      background(0);
      text("You Win! :) ", width*.4, height/2); 
      gameOver = true;
    }
  }
}