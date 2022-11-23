let cx;
let cy;
let path = [];
let black;
let red;
let blue;
let selectedColor = (222, 0, 0);

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  cx = width / 2;
  cy = height / 2;
  black = createButton("black");
  black.size(width / 3 - 10, height / 15);
  black.position(0, 0);
  black.mouseClicked(function () {
    selectedColor = color(0);
  });

  red = createButton("red");
  red.size(width / 3 - 10, height / 15);
  red.position(width / 3 + 5, 0);
  red.mouseClicked(function () {
    selectedColor = color(222, 0, 0);
  });

  red.class("bubbly-button ");

  blue = createButton("blue");
  blue.size(width / 3 - 10, height / 15);
  blue.position((width / 3) * 2 + 10, 0);
  blue.mouseClicked(function () {
    selectedColor = color(0, 0, 222);
  });

  background(255);
}

function draw() {
  if (touches.length > 0) console.log("ciao mamma");
  background(255);
  stroke(0, 0, 0, 100);
  strokeWeight(3);
  fill(255, 204, 0, 100);
  const dx = constrain(rotationY, -3, 3);
  const dy = constrain(rotationX, -3, 3);
  cx += dx;
  cy += dy;
  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);
  ellipse(cx, cy, 20, 20);
  if (touches.length > 0) if (touches[0].y > height / 15) paint();

  if (path.length > 1)
    for (let i = 1; i < path.length; i++) {
      if (!path[i].end) {
        stroke(path[i].colore);
        strokeWeight(2);
        line(path[i - 1].x, path[i - 1].y, path[i].x, path[i].y);
      } else i++;
    }
}

function paint() {
  path.push({ x: cx, y: cy, end: false, colore: selectedColor });
}

function touchEnded() {
  
    if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
  console.log("miao");
  path.push({ x: cx, y: cy, end: true, colore: selectedColor });
}

function deviceShaken() {
  path = [];
}
