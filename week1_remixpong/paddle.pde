class Paddle {
  float xPos, yPos;
  float d = 25; 
  float rectSize; 

  Paddle(float _xPos) {
    xPos = _xPos; 
    yPos = 100; 
    rectSize = 200;
  }
  
  void update(){
    yPos = mouseY; 
  }

  void display(int t) {
    rectMode(CENTER); 
    if(t==1)
    fill(0, 255, 0); 
    else
    fill(#08E0FA);
    rect(xPos, yPos, 10, rectSize);
  }
}