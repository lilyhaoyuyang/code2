class FireworkParticle {
  color fireworkColor;
  PVector position;
  PVector velocity;
  PVector acceleration;
  float alpha;
  int size;

  FireworkParticle(PVector position, color fireworkColor) {
    reset(position, fireworkColor);
  }

  void reset(PVector position, color fireworkColor) {
    this.position = new PVector(position.x, position.y);
    this.fireworkColor = fireworkColor;

    this.velocity = new PVector(random(-1.5, 1.5), random(-1.5, 1.5));
    this.acceleration = new PVector(random(-0.06, 0.06), random(-0.06, 0.06));

    this.size = 12;
    this.alpha = 255;
  }

  void update() {
    velocity.add(acceleration);
    float d = dist(position.x, position.y, mouseX, mouseY);
    if (d < 30) {
      PVector v =new PVector(position.x-mouseX, position.y-mouseY);
      velocity.add(v);
    }
    //PVector v =new PVector(mouseX, mouseY);

    position.add(velocity);

    alpha--;
    if (alpha< 0) {
      re = true;
    }
  }

  void draw() {
    noStroke();
    fill(fireworkColor, alpha);
    ellipse(position.x, position.y, size, size);
  }
}