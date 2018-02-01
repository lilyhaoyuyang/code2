ArrayList<FireworkParticle> fireworkArray = new ArrayList<FireworkParticle>();
PVector position = new PVector(random(width/3.0, (2.0/3.0) * width), random(0, height/2));
color randomColor = color(random(255), random(255), random(255));
int numFireworks = 450;
boolean re = false;
void setup() {
  size(1000, 1000);
  frameRate(60);

  for (int i = 0; i < numFireworks; i++) {
    fireworkArray.add(new FireworkParticle(position, randomColor));
  }
}

void draw() {
  background(0);
  for (int i = 0; i < fireworkArray.size(); i++) {
    FireworkParticle firework = fireworkArray.get(i);
    firework.update();
    firework.draw();
  }
  if (re) {
    position = new PVector(random(width/3.0, (2.0/3.0) * width), random(0, height/2));
    randomColor = color(random(255), random(255), random(255));
    for (int i = 0; i < fireworkArray.size(); i++) {
      FireworkParticle firework = fireworkArray.get(i);
      firework.reset(position, randomColor);
    }
    re = false;
  }
}