function setup() {
  helpMsg = `
<p>welcome.
  <ul>
    <li>hit space to start and toggle this help page</li>
  </ul>
</p>
`
  standardSetup(helpMsg);
}

/* The `detections.multiHandLandmarks` array looks like this:
 * [ [ {x: 0.923, y:0.457, z: 0.103}, {x: 0.323, y:0.127, z: 0.012}, {x: 0.183, y:0.877, z: 0.003} ] ]
 * where each inner array represents a single recognized hand (each hand being an array of objects that
 * represent the landmarks outlined here:
 * https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker#models
 */
function draw() {
  background(backgroundColor);
  if (detections != undefined && detections.multiFaceLandmarks != undefined && detections.multiFaceLandmarks.length != 0) {
    detections.multiFaceLandmarks.forEach((each) => {
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
