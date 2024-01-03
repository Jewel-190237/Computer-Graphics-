var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function drawCircle(xc, yc, r) {
  var x = 0;
  var y = r;
  var d = 3 - 2 * r;

  while(x <= y) {
    drawPixels(xc, yc, x, y);

    if(d < 0) {
      d += 4 * x + 6;
    } else {
      d += 4 * (x - y) + 10;
      y--;
    }

    x++;
  }
}

function drawPixels(xc, yc, x, y) {
  ctx.fillRect(xc + x, yc + y, 1, 1);
  ctx.fillRect(xc + y, yc + x, 1, 1);
  ctx.fillRect(xc - x, yc + y, 1, 1);
  ctx.fillRect(xc - y, yc + x, 1, 1);
  ctx.fillRect(xc + x, yc - y, 1, 1);
  ctx.fillRect(xc + y, yc - x, 1, 1);
  ctx.fillRect(xc - x, yc - y, 1, 1);
  ctx.fillRect(xc - y, yc - x, 1, 1);
}


drawCircle(200, 200, 100);
