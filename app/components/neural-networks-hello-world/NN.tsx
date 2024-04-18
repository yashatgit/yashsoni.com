//https://codesandbox.io/s/blue-rain-xf6nz?file=/src/App.js:0-2842
//https://www.chartjs.org/docs/latest/charts/line.html#line-styling
"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Button } from "../button";
import { lightTheme, darkTheme, chartColors } from "../../styles/theme";

import * as tf from "@tensorflow/tfjs";

const getY = (x) => 3 * x - 2;
const X = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const Y = X.map(getY);

const x = tf.tensor(X);
const y = tf.tensor(Y);

const buildModel = () => {
  const model = tf.sequential({
    layers: [tf.layers.dense({ units: 1, inputShape: [1] })],
  });
  model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

  return model;
};
const model = buildModel();

const predict = (model, val) => model.predict(tf.tensor([val])).arraySync();

const noop = () => {};
const trainModel = ({ epochs, _onEpochEnd, onDone = noop, restart = true }) => {
  const currentModel = restart ? buildModel() : model;
  currentModel
    .fit(x, y, {
      epochs,
      verbose: 0,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          const interimValue = predict(currentModel, 10);
          _onEpochEnd({
            epoch: epoch + 1,
            loss: Number(logs?.loss).toFixed(5),
            prediction: Number(interimValue).toFixed(5),
          });
        },
      },
    })
    .then((h) => {
      console.log("training done!");
      onDone();
    });
};

const getLineChartData = (theme) => ({
  labels: [...X, 10],
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: { fontColor: theme.chart.tickColor },
          gridLines: {
            color: theme.chart.gridLineColor,
          },
          scaleLabel: {
            labelString: "x",
          },
        },
      ],
      yAxes: [
        {
          ticks: { fontColor: theme.chart.tickColor },
          gridLines: {
            color: theme.chart.gridLineColor,
          },
          scaleLabel: {
            labelString: "y",
          },
        },
      ],
    },
  },
  datasets: [
    {
      label: "y = 3x -2",
      fill: false,
      pointRadius: 5,
      pointHoverRadius: 8,
      pointBackgroundColor: [...Y.map((y) => chartColors.red), chartColors.blue],
      backgroundColor: "red",
      borderColor: theme.chart.lineColor,
      data: [...Y, 0],
    },
  ],
});

type ChartInstance = {
  chartInstance: { update: () => void };
};

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [summary, setSummary] = useState("");

  const themeObj = darkTheme;
  const chartData = React.useMemo(() => getLineChartData(themeObj), [themeObj]);
  const chartRef = React.useRef<ChartInstance>(null);

  const updateChartPoint = (newValue) => {
    if (chartRef.current) {
      chartData.datasets[0].data[11] = newValue;
      chartRef.current.chartInstance?.update();
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
      // @ts-ignore
      onEpochEnd: ({ loss, epoch, prediction }) => {
        if (epoch % 5 === 0 && chartRef.current) {
          updateChartPoint(prediction);
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
      {/* @ts-ignore */}
      <Line ref={chartRef} data={chartData} options={chartData.options} />
      <Button onClick={() => startTraining()} disabled={isOn}>
        {"Train Model"}
      </Button>
      <p style={{ fontVariantNumeric: "tabular-nums" }}>{summary}</p>
    </>
  );
}
