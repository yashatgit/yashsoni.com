//https://codesandbox.io/s/blue-rain-xf6nz?file=/src/App.js:0-2842
//https://www.chartjs.org/docs/latest/charts/line.html#line-styling
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import useCharts, { chartColors } from './useCharts';

const tf = require('@tensorflow/tfjs');

const getY = x => 3 * x - 2;
const X = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const Y = X.map(getY);
const TOTAL_EPOCHS = 200;

const x = tf.tensor(X);
const y = tf.tensor(Y);

const buildModel = () => {
  const model = tf.sequential({
    layers: [tf.layers.dense({ units: 1, inputShape: [1] })],
  });
  model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

  return model;
};
const model = buildModel();

const predict = (model, val) => model.predict(tf.tensor([val])).arraySync();

const noop = () => {};
const trainModel = ({ epochs, onEpochEnd = noop, onDone = noop, restart = true }) => {
  const currentModel = restart ? buildModel() : model;
  currentModel
    .fit(x, y, {
      epochs,
      verbose: 0,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          onEpochEnd({
            epoch: epoch + 1,
            loss: Number(logs.loss).toFixed(5),
            prediction: Number(predict(currentModel, 10)).toFixed(5),
          });
        },
      },
    })
    .then(h => {
      console.log('training done!');
      onDone();
    });
};

const rulePlotData = {
  labels: [...X, 10],
  datasets: [
    {
      label: 'y = 3x -2',
      fill: false,
      pointRadius: 5,
      pointHoverRadius: 8,
      pointBackgroundColor: [...Y.map(y => chartColors.red), chartColors.blue],
      //borderColor: theme.chart.lineColor,
      data: [...Y, 0],
    },
  ],
};

const lossAndAccuracyData = {
  labels: Array.from(Array(TOTAL_EPOCHS), (_, i) => i + 1),
  datasets: [
    {
      label: 'Loss',
      fill: false,
      backgroundColor: chartColors.red,
      data: [4],
    },
  ],
};

export default function App() {
  const { lineChartOptions, lossChartOptions } = useCharts();
  const [isOn, setIsOn] = useState(false);
  const [summary, setSummary] = useState('');

  const chartRef = React.useRef();
  const lossAndAccChartRef = React.useRef();

  const updateChartPoints = ({ loss, epoch, prediction }) => {
    if (chartRef.current && lossAndAccChartRef.current) {
      rulePlotData.datasets[0].data[11] = prediction;
      chartRef.current.chartInstance.update();

      lossAndAccuracyData.datasets[0].data[epoch] = loss;
      lossAndAccChartRef.current.chartInstance.update();
    }
  };

  const reset = () => {
    rulePlotData.datasets[0].data[11] = 0;
    lossAndAccuracyData.datasets[0].data[0] = 4;
    chartRef.current.chartInstance.update();
    lossAndAccChartRef.current.chartInstance.update();
  };

  const startTraining = () => {
    reset();
    setIsOn(true);
    trainModel({
      epochs: TOTAL_EPOCHS,
      onEpochEnd: ({ loss, epoch, prediction }) => {
        if (epoch % 5 === 0 && chartRef.current) {
          updateChartPoints({ loss, epoch, prediction });
        }
        setSummary(`Loss after epoch ${epoch} is ${loss}. Current prediction for y when x=10 is: ${prediction}`);
      },
      onDone: () => {
        setIsOn(false);
      },
    });
  };
  return (
    <>
      <div>
        <div>
          <Line ref={chartRef} data={rulePlotData} options={lineChartOptions} />
        </div>
        <div>
          <Line ref={lossAndAccChartRef} data={lossAndAccuracyData} options={lossChartOptions} />
        </div>
      </div>
      <button onClick={() => startTraining()} disabled={isOn}>
        {'Train Model'}
      </button>
      <p style={{ fontVariantNumeric: 'tabular-nums' }}>{summary}</p>
    </>
  );
}
