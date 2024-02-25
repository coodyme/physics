import GameObject from './game-object.js';

export default class Rect extends GameObject {
  constructor(context, x, y, vx, vy) {
    super(context, x, y, vx, vy);

    this.width = 10;
    this.height = 10;
  }

  draw() {
    this.context.fillStyle = this.collinding ? 'red' : 'black';
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }

  update(deltaTime) {
    this.x += this.vx * deltaTime;
    this.y += this.vy * deltaTime;
  }
}



