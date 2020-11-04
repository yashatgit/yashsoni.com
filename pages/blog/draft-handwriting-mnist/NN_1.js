//https://www.chartjs.org/docs/latest/charts/line.html#line-styling
//https://codesandbox.io/s/nameless-bird-fz5gk?file=/src/index.js:549-620
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// https://www.yashsoni.com/static/blog/handwriting-mnist/model/model.json
// https://github.com/mick703/mnist-tfjs/blob/master/mnist.html
// https://yanming.me/2018/08/04/machine-learning-in-javascript-powered-by-tensorflow-js/
// https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/keras/save_and_load.ipynb

// https://observablehq.com/@rootbabu/doodle-recognition-with-tensorflow-js
// https://towardsdatascience.com/deploying-a-simple-machine-learning-model-into-a-webapp-using-tensorflow-js-3609c297fb04
import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import CanvasComponent from './Canvas';

const tf = require('@tensorflow/tfjs');
let model;

const loadModel = async () => {
  model = await tf.loadLayersModel('https://www.yashsoni.com/static/blog/handwriting-mnist/model/model.json');
  console.log(model.summary());
  return model;
};

const getPrediction = async input => {
  const scores = await model.predict([tf.tensor(input).reshape([1, 28, 28, 1])]).array();
  return scores[0];
};

const App = () => {
  const theme = useTheme();
  const [predictionState, setPredictionState] = useState({ reset: true, predicting: true, prediction: null });
  const [preTrainedModel, setPreTrainedModel] = useState(false);
  const canvasRef = React.useRef();

  useEffect(() => {
    async function loadPreTrainedModel() {
      const _pretrainedModel = await loadModel();
      setPreTrainedModel(_pretrainedModel);
    }
    loadPreTrainedModel();
  }, []);

  const predictNumber = async data => {
    setPredictionState({ predicting: true });
    const predictionProbs = await getPrediction(data);
    const finalPrediction = predictionProbs.indexOf(Math.max(...predictionProbs));
    setPredictionState({ predicting: false, prediction: finalPrediction });
  };

  return (
    <>
      <CanvasComponent ref={canvasRef} onDrawEnd={predictNumber} />
      <div>
        <button
          onClick={() => {
            canvasRef.current.clearCanvas();
            setPredictionState({ reset: true });
          }}
        >
          erase
        </button>
      </div>
      {predictionState.reset ? null : (
        <div>{predictionState.predicting ? 'Predicting...' : predictionState.prediction}</div>
      )}
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
