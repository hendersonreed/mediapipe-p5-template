///////////////////////////////////////
// danger zone, don't edit this junk //
///////////////////////////////////////

let bannerElement;
let myCanvas;
let started = false;

function setup() {
  noLoop(); // saves us a bunch of error messages from running too fast before the video is done loading.
  background(220);

  myCanvas = createCanvas(640, 480);
  myCanvas.id('myCanvas');
  centerCanvas();

  bannerElement = createElement('div', 'Hit space to start');
  bannerElement.id('banner');
  positionBanner();
}

function windowResized() {
  centerCanvas();
  positionBanner();
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  myCanvas.position(x, y);
}

function positionBanner() {
  let bannerWidth = windowWidth * 0.4;
  let bannerHeight = windowHeight * 0.2;
  bannerElement.size(bannerWidth, bannerHeight);
  bannerElement.position((windowWidth - bannerWidth) / 2, (windowHeight - bannerHeight) / 2);
}

document.addEventListener('keypress', (event) => {
  if (event.key == ' ') {
    started = true;
    bannerElement.remove();
    loop();
  }
});

//////////////////////////////////////////////////////
//                   end of danger zone             //
// below this line is where the fun stuff can begin //
//////////////////////////////////////////////////////


// the `detections.multiHandLandmarks` array contains the landmarks for all the recognized hands (up to maxHands, which
// is set in detections.js.)
//
// It looks something like this:
// [ [ {x: 0.2482, y: 0.1014, z: 0.0023}, {x: 0.272, y: 0.973, z: 0.023} ... ] [...] ]
// 
// Each inner array represents a particular hand, while the objects within represent individual landmarks on the hand.
// To understand which landmarks are where on a particular hand, see this link:
//  https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker#models
// 
// The values are, as you can tell, *not* actual x, y coordinates, but are normalized, so you'll need to multiply them by
// the dimensions of the video element (in the below example, we can use the p5.js `width` and `height` vars because we have
// set our canvas to be the same size as the video element.

function draw() {
  background(255);
  if (detections != undefined && detections.multiHandLandmarks != undefined && detections.multiHandLandmarks.length != 0) {
    detections.multiHandLandmarks.forEach((each) => {
      each.forEach((point) => {
        drawTealCircle(point.x * width, point.y * height);
      });
    });
  }
}

function drawTealCircle(x, y) {
  push();
  fill(66, 245, 242);  // Teal color
  noStroke();
  circle(x, y, 10);
  pop();
}

