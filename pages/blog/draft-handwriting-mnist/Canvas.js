import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';

const CANVAS_SIZE = 300;

const WriteableCanvas = forwardRef(({ onDrawEnd }, ref) => {
  const canvasRef = React.useRef();

  useImperativeHandle(ref, () => ({
    clearCanvas() {
      canvasRef.current.getContext('2d').clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    },
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');

    var mouse = { x: 0, y: 0 };

    canvas.addEventListener(
      'mousemove',
      function(e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      },
      false
    );

    context.lineWidth = 25;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.strokeStyle = '#0000FF';

    canvas.addEventListener(
      'mousedown',
      function(e) {
        context.moveTo(mouse.x, mouse.y);
        context.beginPath();
        canvas.addEventListener('mousemove', onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      'mouseup',
      function() {
        canvas.removeEventListener('mousemove', onPaint, false);
        var img = new Image();
        img.onload = function() {
          context.drawImage(img, 0, 0, 28, 28);
          const data = context.getImageData(0, 0, 28, 28).data;
          var input = [];
          for (var i = 0; i < data.length; i += 4) {
            input.push(data[i + 2] / 255);
          }
          onDrawEnd(input);
        };
        img.src = canvas.toDataURL('image/png');
      },
      false
    );

    var onPaint = function() {
      context.lineTo(mouse.x, mouse.y);
      context.stroke();
    };

    // http:/ / bencentra.com / code / 2014 / 12 / 05 / html5 - canvas - touch - events.html;
    // Set up touch events for mobile, etc
    canvas.addEventListener(
      'touchstart',
      function(e) {
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
        canvas.dispatchEvent(new MouseEvent('mouseup', {}));
      },
      false
    );
    canvas.addEventListener(
      'touchmove',
      function(e) {
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
  }, []);

  return (
    <canvas
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
      style={{ border: '1px solid black', cursor: 'crosshair' }}
      ref={canvasRef}
    ></canvas>
  );
});

export default WriteableCanvas;
