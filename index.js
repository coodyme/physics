'use strict';

import Time from './time.js';

let canvas;
let context;

let rect = {
  x: 100,
  y: 50,
  width: 200,
  height: 175
}

window.onload = start()

function start() {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  // Start the first frame request
  window.requestAnimationFrame(loop);
}

function update(timestamp) {
  rect.x += (100 * Time.deltaTime(timestamp));
  rect.y += (100 * Time.deltaTime(timestamp));
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'black';
  context.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function loop(timestamp) {
  update(timestamp)
  draw(timestamp);

  window.requestAnimationFrame(loop);
}




