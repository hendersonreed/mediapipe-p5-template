# mediapipe-p5-example

This is intended to be a teeny tiny starter kit for intermediate programmers to build simple webcam interactions using Google Mediapipe's landmarking models.

Read the comments in the code to get a sense of how things are working. The default sketch is a white canvas that draws teal dots where it detects the landmarks. There is both a face-landmarking example and a hand-landmarking example.

## quickstart:

```bash
git clone https://github.com/hendersonreed/mediapipe-p5-template.git && cd mediapipe-p5-template/hands-detection
python -m http.server
```

Visit http://localhost:8000/ in your browser of choice and hit `space` to start. You'll need to grant it access to your webcam.
