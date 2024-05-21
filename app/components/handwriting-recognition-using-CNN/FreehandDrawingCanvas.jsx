import React, { useEffect, forwardRef, useImperativeHandle } from 'react';

const setupCanvas = (canvas, onDrawEnd) => {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const mouse = { x: 0, y: 0 };
  const context = canvas.getContext('2d');
  context.lineWidth = isMobile ? 60 : 25;
  context.lineJoin = 'round';
  context.lineCap = 'round';
  context.strokeStyle = '#0000FF';

  function extractPixelData() {
    // EXTRACT: convert the drawn canvas to a image's Data URL representation
    const img = new Image();
    img.src = canvas.toDataURL('image/png');
    img.onload = function() {
      // RESIZE: re-draw this image again on the same canvas in a 28x28 size
      context.drawImage(img, 0, 0, 28, 28);

      // NORMALIZE: Extract information from one channel (blue in our case)
      // and divide it with 255 to normalize it
      const data = context.getImageData(0, 0, 28, 28).data;
      console.log('ImageData from canvas', data);

      const input = [];
      for (var i = 0; i < data.length; i += 4) {
        input.push(data[i + 2] / 255);
      }
      onDrawEnd(input);
    };
  }

  function paint() {
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
  }

  canvas.addEventListener(
    'mousemove',
    function(e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
      //console.log(mouse);
    },
    false
  );

  canvas.addEventListener(
    'mousedown',
    function(e) {
      context.moveTo(mouse.x, mouse.y);
      context.beginPath();
      canvas.addEventListener('mousemove', paint);
    },
    false
  );

  canvas.addEventListener(
    'mouseup',
    function() {
      canvas.removeEventListener('mousemove', paint);
      extractPixelData();
    },
    false
  );

  // http://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html
  // Set up touch events for mobile, etc
  canvas.addEventListener(
    'touchstart',
    function(e) {
      e.preventDefault();

      var touch = e.touches[0];
      canvas.dispatchEvent(
        new MouseEvent('mousedown', {
          clientX: touch.clientX,
          clientY: touch.clientY,
        })
      );
    },
    false
  );

  canvas.addEventListener(
    'touchend',
    function(e) {
      e.preventDefault();

      canvas.dispatchEvent(new MouseEvent('mouseup', {}));
    },
    false
  );

  canvas.addEventListener(
    'touchmove',
    function(e) {
      e.preventDefault();

      var touch = e.touches[0];
      canvas.dispatchEvent(
        new MouseEvent('mousemove', {
          clientX: touch.clientX,
          clientY: touch.clientY,
        })
      );
    },
    false
  );
};

const FreehandDrawingCanvas = forwardRef(({ size, onDrawEnd }, ref) => {
  const canvasRef = React.useRef();

  useImperativeHandle(ref, () => ({
    clearCanvas() {
      canvasRef.current.getContext('2d').clearRect(0, 0, size, size);
    },
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setupCanvas(canvas, onDrawEnd);
  }, []);

  return (
    <canvas
      width={size}
      height={size}
      style={{ cursor: 'crosshair' }}
      ref={canvasRef}
      className='border border-gray-900 dark:border-white'
    ></canvas>
  );
});

export default React.memo(FreehandDrawingCanvas);
