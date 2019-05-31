const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;
let fire;
function preload() {
  abstract = loadImage("abstract.png")
  paper = loadImage("paper.jpg")
}

function setup() {
  
  
  var c = random(320);

  var diff = random(-60,60)
  colorMode(HSB);
  b1 = color(360);
  b2 = color(0);
  c1 = color(c+40,40,20);
  c2 = color(c,80,90);
 
  
  var rand1 = round(random(firstnames.length-1))
  var firstname = firstnames[rand1]
  
  var rand2 = round(random(lastnames.length-1))
  var lastname = lastnames[rand2]
  
  var randperson = round(random(person.length-1))
  var per = person[randperson]
  
  var randprod = round(random(prods.length-1))
  var prod = prods[randprod]
 
  var randname = round(random(nouns.length-1))
  var name = nouns[randname]
      
  var randadj = round(random(adjectives.length-1))
  var adj = adjectives[randadj]
  
  var randnouns = round(random(nouns.length-1))
  var nn = nouns[randnouns]
  
  var randfont = round(random(fonts.length-1))
  var font = fonts[randfont]
  
  var adjective = adj.charAt(0).toUpperCase() + adj.substr(1,adj.length).toLowerCase();
  var noun = nn.charAt(0).toUpperCase() + nn.substr(1,nn.length).toLowerCase();
  var name = name.charAt(0).toUpperCase() + name.substr(1,nn.length).toLowerCase();

  createCanvas(720,960);

 

  print(font);
 
  
  setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
  setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
  setGradient(0, 0, 720, 960, c1, c2, Y_AXIS);
  setGradient(0, 0, 720, 960, c2, c1, X_AXIS);
  textStyle(BOLD);
  textFont(font);
  tint(c,100,100,.4);
  image(paper,0,0,720,960)
  tint(c,60,100,.6)
  image(abstract,0,0,abstract.width+50,abstract.height-150);
  
    textSize(45)
  textAlign(CENTER)
  fill(c,100,20,.9)
  text(str(per)+' '+str(firstname)+' '+str(lastname),255,380,200,300)
  fill(c,100,100);
  text(str(per)+' '+str(firstname)+' '+str(lastname),260,385,200,300)
  fill(c,100,100);     
 
  textSize(90);
  textAlign(CENTER);
  fill(c,100,20,.9)
  text(str(adjective)+' ' +str(noun),width/2-random(8,10),height/5-random(6,8),0.5)
  
  fill(c,100,100);  
  text(str(adjective)+' ' +str(noun),width/2,height/5,0.5);

  fill(c,90,100,random(.05,.15));  
  text(str(adjective)+' ' +str(noun),width/2+random(4,8),height/5+random(5,6),0.5);
  
  fill(0,0,0,.5);
  rect(0,850,720,250);
  textAlign(CENTER)
  textSize(50);
  fill(c,90,20,.1)
  text(str(name)+' ' + str(prod),width/2,918);
  
  fill(c,100,100);
  text(str(name)+' ' + str(prod),width/2+3,921);

  

  

  
  
  
  tint(c,80,100,0.15);
  image(paper,0,0,720,960)
  
}

function draw() {

  
  
  
} 
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {

    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
    
      line(x, i, x + w, i);
      line(x+1, i, x + w, i);
    }
  }
}
