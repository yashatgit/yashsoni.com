//https://codesandbox.io/s/blue-rain-xf6nz?file=/src/App.js:0-2842
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
const tf = require('@tensorflow/tfjs');

const x = tf.tensor([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
const y = tf.tensor([-5, -2, 1, 4, 7, 10, 13, 16, 19, 22]);

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
          const interimValue = predict(currentModel, 10);
          onEpochEnd({
            epoch: epoch + 1,
            loss: Number(logs.loss).toFixed(5),
            prediction: Number(interimValue).toFixed(5),
          });
        },
      },
    })
    .then(h => {
      console.log('training done!');
      onDone();
    });
};

const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
};

const lineChartData = {
  labels: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  options: {
    responsive: true,
    legend: {
      display: false,
    },
  },
  datasets: [
    {
      label: 'y = 3x -2',
      fill: false,
      pointRadius: 5,
      pointHoverRadius: 8,
      pointBackgroundColor: [
        chartColors.red,
        chartColors.red,
        chartColors.red,
        chartColors.red,
        chartColors.red,
        chartColors.red,
        chartColors.red,
        chartColors.red,
        chartColors.red,
        chartColors.red,
        chartColors.red,
        chartColors.blue,
      ],
      data: [-5, -2, 1, 4, 7, 10, 13, 16, 19, 22, 25, 0],
    },
  ],
};

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [summary, setSummary] = useState('');

  //const [chartData, updateChartData] = useState(lineChartData);
  const chartRef = React.useRef();

  const updateChartPoint = newValue => {
    if (chartRef.current) {
      lineChartData.datasets[0].data[11] = newValue;
      chartRef.current.chartInstance.update();
    }
  };

  const reset = () => {
    updateChartPoint(0);
  };

  const startTraining = () => {
    reset();
    setIsOn(true);
    trainModel({
      epochs: 600,
      onEpochEnd: ({ loss, epoch, prediction }) => {
        if (epoch % 5 === 0 && chartRef.current) {
          updateChartPoint(prediction);
        }
        setSummary(`Loss after epoch ${epoch} is ${loss}. Current prediction for y=10 is: ${prediction}`);
      },
      onDone: () => {
        setIsOn(false);
      },
    });
  };
  return (
    <>
      <Line ref={chartRef} data={lineChartData} options={lineChartData.options} />
      <button onClick={() => startTraining()} disabled={isOn}>
        {'Train Model'}
      </button>
      <p style={{ fontVariantNumeric: 'tabular-nums' }}>{summary}</p>
    </>
  );
}
