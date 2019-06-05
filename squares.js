let squares = []

function setup() {
  createCanvas(600,400);
}
function mouseDragged() {
  let c = random(36);
  let r = random(10,50)
  let b = new Box(mouseX,mouseY,r,c);
  squares.push(b);
}
function draw() { 
  background(0);
  for (let i = 0; i <squares.length; i++) {
    squares[i].move();
    squares[i].show();
  }
}

class Box {
  constructor(x,y,r,c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
  }
  
  move() {
    this.x = this.x + random(-3.5,3.5);
    this.y = this.y + random(-3,3);
  }
  
  show() {
    colorMode(HSB,36);
    stroke(this.c,100,100,36);
    strokeWeight(4);
    fill(this.c,100,100,6);
    rect(this.x,this.y,this.r,this.r);
  }
}