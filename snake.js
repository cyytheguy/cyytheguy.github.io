

var numSegments = 10;
var direction = 'right';

var xStart = -100;
var yStart = 225; 
var diff = 10;

var xCor = [];
var yCor = [];

let c = 0;
let fps = 17
function setup() {
  createCanvas(700, 500);
  background(40)
  frameRate(fps);
  colorMode(HSB)
  strokeWeight(10);


  for (var i = 0; i < numSegments; i++) {
    xCor.push(xStart + (i * diff));
    yCor.push(yStart);
  }
}

function draw() {
    if (c>=360) c=0; else; c=c+3;
  stroke(c,100,100);

  for (var i = 0; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
  updateSnakeCoordinates();

}


function updateSnakeCoordinates() {

  for (var i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }


}
function keyPressed() {
  switch (keyCode) {
    case 65:
      if (direction != 'right') {
        direction = 'left';
      }
      break;
    case 68:
      if (direction != 'left') {
        direction = 'right';
      }
      break;
    case 87:
      if (direction != 'down') {
        direction = 'up';
      }
      break;
    case 83:
      if (direction != 'up') {
        direction = 'down';
      }
      break;
  }
}

