function drawDDALine(x1, y1, x2, y2, color) {
    // Calculate the distance between the two points
    const dx = x2 - x1;
    const dy = y2 - y1;
  
    // Determine the number of steps needed to increment x and y
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
  
    // Calculate the amount to increment x and y at each step
    const xIncrement = dx / steps;
    const yIncrement = dy / steps;
  
    // Draw the line by iterating over each step and incrementing x and y
    let x = x1;
    let y = y1;
    for (let i = 0; i <= steps; i++) {
      setPixel(Math.round(x), Math.round(y), color);
      x += xIncrement;
      y += yIncrement;
    }
  }
  
  function setPixel(x, y, color) {
    // Draw a pixel at the given x and y coordinates with the given color
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = color;
    context.fillRect(x, y, 1, 1);
  }
  
  drawDDALine(10, 10, 100, 50, "red"); // Draw a red line from (10, 10) to (100, 50)
  