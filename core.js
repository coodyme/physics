import Time from './time.js'
import Rect from './rect.js'


export default class Core {
  constructor() {
    this.canvas = null;
    this.context = null;
    this.rect = null
    this.start()
  }

  start() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

    this.rect = new Rect(this.context, 100, 0, 0, 50);

    // Start the first frame request
    window.requestAnimationFrame((timestamp) => { this.loop(timestamp) });
  }

  loop(timestamp) {
    this.rect.update(Time.deltaTime(timestamp))

    this.clear()

    this.rect.draw()

    window.requestAnimationFrame((timestamp) => { this.loop(timestamp) });
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}
