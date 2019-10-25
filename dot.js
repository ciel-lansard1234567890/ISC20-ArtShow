//"new p5();" was added to allow "rectSize"/"dotSize" to be declared without a "setup" function.
new p5();

//"rectSize"/"dotSize" are the variables that set the shapes'/particles' sizes.
var rectSize = random(10, 20);
var dotSize = random(10, 30);

//"Dot" gives the particles a start/origin point (center of the canvas.)
var Dot = function() {
  this.x = 400 / 2;
  this.y = 400 / 2;
};

//This ".update" function allows the dots to move away from the origin point in an erratic, yet controlled way.
Dot.prototype.update = function() {
  this.x += random(-10, 10);
  this.y += random(-10, 10);
};

//This ".show" functions randomizes the shapes displayed (ellipse/rectangle), their starting point, their size and their color.
Dot.prototype.show = function() {
  noStroke();
  if (random(1) > 0.5) {

    fill(mouseX + dotSize, mouseY + dotSize, mouseX + dotSize, dotSize * 2);
    ellipse(this.x, this.y, dotSize, dotSize);

  } else {

    fill(mouseX + rectSize, mouseY + rectSize, mouseY + rectSize, rectSize * 2);
    rect(this.x, this.y, rectSize, rectSize);

  }
};
