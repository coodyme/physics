# Physics

This is a simple physics engine that I'm building to learn more about game development and physics. I'm using JavaScript and the HTML5 canvas to build this engine.

### Why do we need a game loop?

A game loop is a way to update the game state and render the game at a consistent rate. This is important because the game state and rendering should be independent of the frame rate. If the frame rate is too high, the game will run too fast. If the frame rate is too low, the game will run too slow. A game loop ensures that the game runs at a consistent rate, regardless of the frame rate.

We a looking for:

- A frame rate that is as high as possible for smoothness
- A frame rate that isn't higher than the screen refresh rate
- A frame rate that doesn't uses too much system resources

### Setup the game loop

If we need a game loop, why not just use a `while` loop? 

```javascript
while (running) {
    draw();
}
```
JavaScript is single-threaded, so we can't have a game loop that runs in parallel with the rest of the code. We can, however, use the `requestAnimationFrame` function to create a game loop that runs at the same time as the rest of the code.


```javascript
window.requestAnimationFrame(update);

function update(timestamp) {
    // Draw something to the screen
    requestAnimationFrame(update);
}
```

The `requestAnimationFrame` function tells the browser that we want to update the game state and render the game at the next available opportunity. This allows the browser to optimize the game loop and ensure that the game runs at a consistent rate.

The timestamp argument that is passed to the `update` function is the current time in milliseconds. We can use this timestamp to calculate the time that has passed since the last frame, and use this information to update the game state.

## Calculate the display FPS

We can calculate the display FPS by measuring the time that has passed since the last frame in `milliseconds` and using this information to calculate the frame rate. We can then use this frame rate to update the game state and render the game at a consistent rate.

