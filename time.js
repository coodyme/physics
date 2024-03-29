export default class Time {
  constructor() {
    this.deltaTimestamp;
    this.lastTimestamp;
    this.frameCount = 0;
  }

  static deltaTime(timestamp) {
    // The interval in seconds from the last frame to the current one.
    this.deltaTimestamp = (timestamp - this.lastTimestamp) / 1000;
    this.lastTimestamp = timestamp;
    if (!isNaN(this.deltaTimestamp)) {
      return this.deltaTimestamp;
    }
    return 1
  }

  static fps(deltaTime) {
    // Calculate the number of frames per second dividing 1 by the delta time in seconds
    this.frameCount = Math.round(1 / deltaTime);
    if (!isNaN(this.frameCount)) {
      return this.frameCount = Math.round(1 / deltaTime);
    }
    return 0
  }

}
