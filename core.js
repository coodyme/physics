import Time from './time.js'
import Rect from './rect.js'
import Overlap from './overlap.js'

export default class Core {
  constructor() {
    this.canvas = null;
    this.context = null;

    this.rects = [];

    this.start();
  }

  start() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

    this.rects = Array.from({ length: 50 }, () => {
      return new Rect(
        this.context,
        Math.floor(Math.random() * this.canvas.width),
        Math.floor(Math.random() * this.canvas.height),
        Math.random() * 100 - 50,
        Math.random() * 100 - 50
      )
    })

    // Start the first frame request
    window.requestAnimationFrame((timestamp) => { this.loop(timestamp) });
  }

  update(timestamp) {
    let deltaTime = Time.deltaTime(timestamp)

    for (let i = 0; i < this.rects.length; i++) {
      this.rects[i].update(deltaTime)
    }
  }

  collision() {
    let a;
    let b;

    // Make sure all rects are not collinding
    for (let i = 0; i < this.rects.length; i++) {
      this.rects[i].collinding = false;
    }

    for (let i = 0; i < this.rects.length; i++) {
      a = this.rects[i];
      for (let j = i + 1; j < this.rects.length; j++) {
        b = this.rects[j];
        if (Overlap.rect(a, b)) {
          a.collinding = true;
          b.collinding = true;
          a.vx *= -1;
          a.vy *= -1;
          b.vx *= -1;
          b.vy *= -1;
        }
      }
    }

  }

  draw() {
    for (let i = 0; i < this.rects.length; i++) {
      this.rects[i].draw()
    }
  }

  loop(timestamp) {
    this.update(timestamp)
    this.collision()
    this.clear()
    this.draw()

    window.requestAnimationFrame((timestamp) => { this.loop(timestamp) });
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}
