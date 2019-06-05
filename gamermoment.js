let x;
let y;

let xspeed;
let yspeed;

let dvd;

function preload() {
  dvd = loadImage("dvd-logo.png");
}
  
function setup() {
  createCanvas(800, 600);
  x = 0;
  y = 0;
  xspeed = 2;
  yspeed = 1.5;
}

function draw() {
  background(0);
  image(dvd,x,y,160,120);
	
  x = x + xspeed;
  y = y + yspeed;
	
  if (x + 156 == width || x == 0) {
    xspeed = -xspeed;
  }
   
  if (y + 117 == height || y == 0) {
    yspeed = -yspeed;
  }
}