var x = 0;

function setup() {
  createCanvas(800, 800);
  background(255, 0, 0);
}

function draw() {
  changeText();
  console.log("hello, world!");
  let r = 50;
  ellipse(x, height/2, r, r*2);
  x += 2;
  if(x > width + r)
    x = 0;
}

setInterval(function(){
  //your function here
}, 500);
