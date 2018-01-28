class Paddles {
  float paddle1X, paddle1Y, paddle2X, paddle2Y;
  
  
  Paddles(){
    paddle1X = 15;
    paddle2X = 800-25;
    paddle1Y = 300;
    paddle2Y = 300;
  }
  
  void display(){
    noStroke();
    rect(paddle1X,paddle1Y, 10, 100);
    rect(paddle2X,paddle2Y, 10, 100);
    
    
  }
  
 
  
}