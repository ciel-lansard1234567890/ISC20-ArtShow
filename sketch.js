let scene = 0;
let dot = new Dot();
let dots = [];

function setup() {

  //"createCanvas" adds the area where the final product is visible.
  createCanvas(400, 400);

  //"i" = iterations
  for (let i = 0; i < 4000; i++) {
    dots[i] = new Dot();
  }
}

//The "draw" function is where all of the code (at least, the code that affects the visuals/interactive features) goes.
function draw() {

  //"mouseClicked" tells the code to perform all of the code underneath it.
  mouseClicked = function() {
    scene++;
  };

  //This code displays scene 0 (the title screen).
  if (scene == 0) {

    //The "frameRate" action slows the reloading of the screen down (from the standard 60fps) in order the make the text's color change less jarring.
    frameRate(30);

    //The "background" action sets the canvas' color.
    background(80);

    //This "fill" action sets the color of the text that reads "Thanks for watching!" based on the mouse's position + a random value.
    fill(mouseX + random(50, 100), mouseY + random(50, 100), mouseY + random(50, 100));

    //The "textAlign", "textStyle" and "textFont" actions change the appearance of the text reading "Hi there!". "textAlign" centers the text on the canvas, "textStyle" makes the text bolder and "textFont" sets the text to a standard monospace font and scales it to 50pt.
    textAlign(CENTER);
    textStyle(BOLD);
    textFont('monospace', 50);
    text("Hi there!", 200, 200);

    //Since I don't want the "textAlign" and "textStyle" properties to change, the "textFont" action below is the only one needed to change the style of the text reading "Click the button to proceed". This "textFont" action keeps the same font, but it reduces the text's size down to 15pt.
    textFont('monospace', 15);
    text("Click the button to proceed", 200, 215);

    //This "drawButton" function places a button on the screen that allows the user to change the scene when clicked. This function's code is located in "button.js".
    drawButton();

  }

  //This code displays scene 1 (the animation).
  else if (scene == 1) {

    //The "frameRate" action sets the fps to 60 in order the make the animation smoother.
    frameRate(60);
    background(80);

    //This "for" loop sets the number of particles/shapes that are displayed on screen.
    for (let i = 0; i < 2000; i++) {
      dots[i].update();
      dots[i].show();

      //This "drawButton" function places a button on the screen that allows the user to change the scene when clicked. This function's code is located in "button.js".
      drawButton();
    }
  }

  //This code displays scene 2 (the final screen).
  else if (scene == 2) {

    //The "frameRate" action slows the reloading of the screen down (from the standard 60fps) in order the make the text's color change less jarring.
    frameRate(30);

    //The "background" action sets the canvas' color.
    background(80);

    //This "fill" action sets the color of the text that reads "Thanks for watching!" based on the mouse's position + a random value.
    fill(mouseX + random(50, 100), mouseY + random(50, 100), mouseY + random(50, 100));

    //The "textAlign", "textStyle" and "textFont" actions change the appearance of the text reading "Thanks for watching!". "textAlign" centers the text on the canvas, "textStyle" makes the text bolder and "textFont" sets the text to a standard monospace font and scales it to 35pt.
    textAlign(CENTER);
    textStyle(BOLD);
    textFont('monospace', 35);

    //"text" displays the final message.
    text("Thanks for Watching!", 200, 200);
  }
}
