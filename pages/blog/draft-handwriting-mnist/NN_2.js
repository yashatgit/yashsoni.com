//https://www.chartjs.org/docs/latest/charts/line.html#line-styling
//https://codesandbox.io/s/nameless-bird-fz5gk?file=/src/index.js:549-620
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// https://www.yashsoni.com/static/blog/handwriting-mnist/model/model.json
// https://github.com/mick703/mnist-tfjs/blob/master/mnist.html
import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

const tf = require('@tensorflow/tfjs');

const predict = (model, val) => model.predict(tf.tensor([val])).arraySync();

const CANVAS_SIze = 100;

const loadModel = async () => {
  //model = await tf.loadLayersModel('https://s3-ap-southeast-2.amazonaws.com/mystaticdemo/model.json');
  model = await tf.loadLayersModel('https://www.yashsoni.com/static/blog/handwriting-mnist/model/model.json');
  console.log(model.summary());
  return model;
};

let model;

let canvas, ctx;
let last_mousex,
  last_mousey = 0;
let mousex,
  mousey = 0;
let canvas_x,
  canvas_y = 0;

const predictNumber = () => {
  //cacluate the dpi of the current window
  const dpi = window.devicePixelRatio;
  const imgData = ctx.getImageData(0, 0, CANVAS_SIze, CANVAS_SIze);

  const preprocessedData = tf.tidy(() => {
    //convert to a tensor
    //Resize to 28X28
    let tfImage = tf.browser.fromPixels(imgData, 1);
    let tfResizedImage = tf.image.resizeBilinear(tfImage, [28, 28]).toFloat();
    console.log(tfResizedImage.dataSync());
    //Since white is 255 black is 0 so need to revert the values
    //so that white is 0 and black is 255
    //tfResizedImage = tf.abs(tfResizedImage.sub(tf.scalar(255))).div(tf.scalar(255));

    tfResizedImage = tf.abs(tfResizedImage.sub(tf.scalar(255))).div(tf.scalar(255)); // |tfResizedImage - 255|/255
    //tfResizedImage = tf.scalar(1.0).sub(tfResizedImage.div(tf.scalar(255.0))); //1 - tfResizedImage/255
    //tfResizedImage = tfResizedImage.reshape([1, 784]);

    //We add a dimension to get a batch shape
    const batched = tfResizedImage.expandDims(0);

    //console.log(tfResizedImage.dataSync());
    //console.log(tfResizedImage.toString());
    return batched;
  });

  //get the prediction
  const prediction = model.predict(preprocessedData);
  const predictionResult = Array.from(prediction.dataSync());
  const sortedPredictionResult = Array.from(predictionResult).sort();
  const maxPossibility = predictionResult.reduce((a, b) => Math.max(a, b));
  console.log({ predictionResult, maxPossibility });
  console.log(predictionResult.indexOf(maxPossibility));
};

var mouse = { x: 0, y: 0 };

const App = () => {
  const theme = useTheme();
  const [preTrainedModel, setPreTrainedModel] = useState(false);
  const canvasRef = React.useRef();

  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    context.lineWidth = 25;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.strokeStyle = '#0000FF';
    const { top, left } = canvas.getBoundingClientRect();
    canvas_y = top;
    canvas_x = left;

    ctx.fillCircle = function(x, y, radius, fillColor) {
      this.fillStyle = fillColor;
      this.beginPath();
      this.moveTo(x, y);
      this.arc(x, y, radius, 0, Math.PI * 2, false);
      this.fill();
    };
    ctx.clearTo = function(fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fillRect(0, 0, CANVAS_SIze, CANVAS_SIze);
    };
    ctx.clearTo('#ffffff');
    //ctx.fillStyle = '#000000';
  }, []);

  useEffect(() => {
    async function loadPreTrainedModel() {
      const _pretrainedModel = await loadModel();
      setPreTrainedModel(_pretrainedModel);
    }
    loadPreTrainedModel();
  }, []);

  const onMouseMove = e => {
    mousex = parseInt(e.clientX - canvas_x);
    mousey = parseInt(e.clientY - canvas_y);

    if (canvas.isDrawing) {
      var radius = 3; // or whatever
      var fillColor = '#000000';
      ctx.fillCircle(mousex, mousey, radius, fillColor);
    }
    // if (canvas.isDrawing) {
    //   ctx.beginPath();
    //   ctx.globalCompositeOperation = 'source-over';
    //   ctx.strokeStyle = 'black';
    //   ctx.lineWidth = 8;
    //   ctx.moveTo(last_mousex, last_mousey);
    //   ctx.lineTo(mousex, mousey);
    //   ctx.lineJoin = ctx.lineCap = 'round';
    //   ctx.stroke();
    // }
    last_mousex = mousex;
    last_mousey = mousey;
  };

  const onMouseUp = () => {
    canvas.isDrawing = false;
  };

  const onMouseDown = e => {
    last_mousex = mousex = parseInt(e.clientX - canvas_x);
    last_mousey = mousey = parseInt(e.clientY - canvas_y);
    canvas.isDrawing = true;
  };

  const eraseCanvasDrawing = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.isDrawing = false;
  };

  return (
    <>
      <canvas
        id="canvas"
        width={CANVAS_SIze}
        height={CANVAS_SIze}
        style={{ border: '1px solid black', cursor: 'crosshair' }}
        ref={canvasRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      ></canvas>
      <div>
        <button onClick={eraseCanvasDrawing}>erase</button>
        <button disabled={!preTrainedModel} onClick={predictNumber}>
          predict
        </button>
      </div>
      <div>
        {!preTrainedModel ? (
          <div>Loading Model...</div>
        ) : (
          <div>{/* <pre dangerouslySetInnerHTML={{ __html: preTrainedModel.summary() }}></pre> */}</div>
        )}
      </div>
    </>
  );
};

export default App;
