// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// https://github.com/mick703/mnist-tfjs/blob/master/mnist.html
// https://yanming.me/2018/08/04/machine-learning-in-javascript-powered-by-tensorflow-js/
// https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/keras/save_and_load.ipynb
// https://observablehq.com/@rootbabu/doodle-recognition-with-tensorflow-js
// https://medium.com/tensorflow/train-on-google-colab-and-run-on-the-browser-a-case-study-8a45f9b1474e
// https://towardsdatascience.com/deploying-a-simple-machine-learning-model-into-a-webapp-using-tensorflow-js-3609c297fb04
// https://github.com/carlos-aguayo/carlos-aguayo.github.io/blob/master/tfjs.html

"use client";

import React, { useState } from 'react';
import FreehandDrawingCanvas from './FreehandDrawingCanvas';
import { Button } from '../button';
import {loadLayersModel, tensor} from '@tensorflow/tfjs';

let model;
const loadModel = async () => {
  model = await loadLayersModel(
    'https://www.yashsoni.com/static/media/handwriting-recognition-using-CNN/model.json'    
  );
  console.log('Model Loaded. Summary:');
  model.summary();
  return model;
};

const MODEL_STATE_TO_TEXT = {
  INIT: 'Please draw something to load Model and start the prediction',
  LOADING: 'Loading Model...',
  PREDICTING: 'Predicting...',
  RESET: 'Model ready for prediction'
};

const HandwritingRecogniser = () => {
  const [modelState, setModelState] = useState('INIT');
  const [predictionSummary, setPredictionSummary] = useState(null);
  const [preTrainedModel, setPreTrainedModel] = useState(false);
  const canvasRef = React.useRef();

  const loadModelOnce = async () => {
    if (model) return model;

    setModelState('LOADING');
    const _pretrainedModel = await loadModel();
    setPreTrainedModel(_pretrainedModel);
  };

  const predictNumber = React.useCallback(
    async (inputData) => {
      await loadModelOnce();

      setModelState('PREDICTING');
      console.log('Normalised Image data', inputData);

      const predictionProbs = await model
        .predict([tensor(inputData).reshape([1, 28, 28, 1])])
        .dataSync();
      console.log('Prediction result array', predictionProbs);

      const maxProbability = Math.max(...predictionProbs);
      const finalPrediction = predictionProbs.indexOf(maxProbability);
      console.log('Final Prediction', finalPrediction);
      console.log('=============================');

      setPredictionSummary({
        prediction: finalPrediction,
        prob: (maxProbability * 100).toFixed(2)
      });
      setModelState('PREDICTED');
    },
    [preTrainedModel]
  );

  return (
    <>
      <FreehandDrawingCanvas
        size={300}
        ref={canvasRef}
        onDrawEnd={predictNumber}
      />
      <div className="mt-2">
        <Button
          onClick={() => {
            canvasRef.current.clearCanvas();
            setModelState('RESET');
          }}
        >
          erase canvas
        </Button>
      </div>

      <div>
        {modelState !== 'PREDICTED' ? (
          <div>{MODEL_STATE_TO_TEXT[modelState]}</div>
        ) : (
          <div>
            <div>
              Predicted <strong>{predictionSummary.prediction}</strong> with{' '}
              <strong>{predictionSummary.prob}%</strong> confidence.
            </div>
            <div>Check developer console for detailed logs.</div>
          </div>
        )}
      </div>
    </>
  );
};

export default HandwritingRecogniser;
