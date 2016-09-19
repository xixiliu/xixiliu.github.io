//save for test
var frequency = 1;
var angle=0;

function setup() {
  var myCanvas=createCanvas(1200, 900);
  // myCanvas.position(0,0);
  myCanvas.parent('myContainer');
}

function draw() {
  background('#23262A');
  fill(0,0.5);
  strokeWeight(1);
  stroke('rgba(255,255,255,0.5)');
  var x = sin(radians(angle));
  angle-=frequency;

  push();
  translate(500, 400);
  
  for(i=25;i>0;i--){
    rotate(x*0.4);
    triangle(-15*i,15*i*sqrt(3)/3,0,-30*sqrt(3)*i/3,15*i,15*i*sqrt(3)/3);
  }
  pop();
 
}