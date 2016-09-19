// this is the fourth effect
var width, height, center;
var points = 10;
var smooth = true;
var path = new Path();
var mousePos = view.center / 4;
var pathHeight = mousePos.y;
path.fillColor = '#23262A';
path.selectedColor = 'white';
// path.strokeWidth = 1 ;
initializePath();

function initializePath() {
  center = view.center;
  width = view.size.width;
  console.log('width'+width);
  height = view.size.height/2;
  path.segments = [];
  path.add(view.bounds.bottomLeft);
  for (var i = 1; i < points; i++) {
    var point = new Point(width / points * i, center.y);
    path.add(point);
  }
  path.add(view.bounds.bottomRight);
  path.fullySelected = true;
}

function onFrame(event) {
  pathHeight += (center.y - mousePos.y - pathHeight) / 10;
  for (var i = 1; i < points; i++) {
    var sinSeed = event.count + (i + i % 10) * 100;
    var sinHeight = Math.sin(sinSeed / 200) * pathHeight;
    var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
    path.segments[i].point.y = yPos;
  }
  if (smooth)
    path.smooth({ type: 'continuous' });
}

function onMouseMove(event) {
  mousePos = event.point;
}


