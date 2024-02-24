import GameObject from './game-object.js';

export default class Rect extends GameObject {
  constructor(context, x, y, vx, vy) {
    super(context, x, y, vx, vy);

    this.width = 100;
    this.height = 100;
  }

  draw() {
    this.context.fillStyle = 'black';
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }

  update(deltaTime) {
    this.x += this.vx * deltaTime;
    this.y += this.vy * deltaTime;
  }
}



