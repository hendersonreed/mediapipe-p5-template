let detections = {};

const videoElement = document.getElementById('video');

function gotFaces(results) {
  detections = results;
}

const faces = new FaceMesh({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
  }
});

faces.setOptions({
  maxNumFaces: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
faces.onResults(gotFaces);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await faces.send({ image: videoElement });
  },
  width: 640,
  height: 480
});
