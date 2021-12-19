let pizza;

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function init(){
  ww = windowWidth;
  wh = windowHeight;
  wcx = ww/2;
  wcy = wh/2;
  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  pizza = new Pizza(100, 'red');
}

function setup(){
  pixelDensity(2);
  init();
}

function draw(){
  pizza.show();
  // circle(mouseX,mouseY,100);
}
