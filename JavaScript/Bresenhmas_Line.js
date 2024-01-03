var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    function drawLine(x0, y0, x1, y1) {
      var dx = Math.abs(x1 - x0);
      var dy = Math.abs(y1 - y0);
      var sx = (x0 < x1) ? 1 : -1;
      var sy = (y0 < y1) ? 1 : -1;
      var err = dx - dy;

      while(true) {
        drawPixel(x0, y0);

        if (x0 === x1 && y0 === y1) {
          break;
        }

        var e2 = 2 * err;
        if (e2 > -dy) {
          err -= dy;
          x0 += sx;
        }

        if (e2 < dx) {
          err += dx;
          y0 += sy;
        }
      }
    }

    function drawPixel(x, y) {
      ctx.fillRect(x, y, 1, 1);
    }

    drawLine(10, 10, 100, 50);