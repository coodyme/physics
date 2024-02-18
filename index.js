'use strict';

import Time from './time.js';

let canvas;
let context;

window.onload = main()

function start() {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  // Start the first frame request
  window.requestAnimationFrame(update);
}

function update(timestamp) {
  draw();

  let deltaTime = Time.deltaTime(timestamp);
  let fps = Time.fps(deltaTime);
  console.log(deltaTime, fps)

  window.requestAnimationFrame(update);
}

function draw() {
  let randomColor = Math.random() > 0.5 ? '#ff8080' : '#0099b0';
  context.fillStyle = randomColor;
  context.fillRect(100, 50, 200, 175);
}

function main() {
  start();
}


