# mpp5

This is intended to be a teeny tiny starter kit for intermediate programmers to build simple webcam interactions using Google Mediapipe's landmarking models and p5.js.

The default sketch is a white canvas that draws teal dots where it detects the landmarks. There is both a face-landmarking example and a hand-landmarking example.

## quickstart:

```bash
git clone https://github.com/hendersonreed/mpp5.git && cd mpp5/
./runner fetch # fetches dependencies
./runner serve hand-detection # attempts to open $BROWSER with the hand-detection sketch
```
