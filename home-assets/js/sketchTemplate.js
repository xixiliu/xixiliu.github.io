//save for test
function setup() {
  var myCanvas=createCanvas(1000, 800);
  // myCanvas.position(0,0);
  myCanvas.parent('myContainer');
}

function draw() {
  background('#23262A');
  fill(0,0.5);
  // noFill();
  strokeWeight(0.3);
  stroke('rgba(255,255,255,0.5)');
  // for(n=0;n<5;n++){ 
  //   ellipse(500, 75+n*2, 50-n*3,50-n*3);
  // }
  for(i=0;i<100;i=i+2){
    ellipse(600, 200+i*5, 100+i*10,100+i*10);
  }
}

var angle=0;
function setup() {
  var myCanvas=createCanvas(1000, 800);
  // myCanvas.position(0,0);
  myCanvas.parent('myContainer');
}

function draw() {
  background('#23262A');
  angle=angle+mouseX*0.00004;
  fill(0,0.5);
  // noFill();
  strokeWeight(0.5);
  stroke('rgba(255,255,255,0.5)');
  // for(n=0;n<5;n++){ 
  //   ellipse(500, 75+n*2, 50-n*3,50-n*3);
  // }
  push();
  translate(600, 690);
  rotate(angle);
  for(i=0;i<100;i=i+2){
    ellipse(0, -490+i*5, 100+i*10,100+i*10);
  }
  pop();
}