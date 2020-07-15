
var r = 0;
var g = 0;
var b=0;



function setup(){

  createCanvas(windowWidth,windowHeight);
}


function draw(){

  
  r = map(mouseX,0,1200,0,205,0);
  
  g = map(mouseX,50,900,50,100);
  
  b=map(mouseX,0,1200,10,0);
  
  background(r,g,b);

  fill(0);
  ellipse(mouseX,windowHeight/2,50,50);
  
}