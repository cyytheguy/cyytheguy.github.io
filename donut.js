function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
}
	var x = 0;
	var y = 0;
	var px = 0;
	var py = 0;
	var easing = .14;
function draw() {
	let col = map(mouseX,0,500,0,320);
	let sat = map(mouseY,0,500,50,100);
background(col,sat,100);
	var targetX = mouseX;
x += (targetX - x) * easing;
	var targetY = mouseY;
y += (targetY - y) * easing;
	var weight = dist(x, y, px, py);
strokeWeight(weight);
stroke(col,sat,30);
fill(0,0,0,0);
ellipse(x, y, 60, 60);
py = y;
px = x;
}