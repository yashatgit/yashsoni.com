import React from 'react';
//import { defaults } from 'react-chartjs-2';
import { useTheme } from 'styled-components';

export { chartColors } from '../../../styles/theme';

const useCharts = () => {
  const theme = useTheme();

  // React.useEffect(() => {
  //   defaults.global.elements.line.borderColor = theme.chart.lineColor;
  //   defaults.global.elements.line.borderWidth = 10;
  // });

  const lineChartOptions = React.useMemo(
    () => ({
      //responsive: true,
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
              labelString: 'x',
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
              labelString: 'y',
            },
          },
        ],
      },
    }),
    [theme]
  );

  const lossChartOptions = React.useMemo(
    () => ({
      //responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            ticks: { fontColor: theme.chart.tickColor, maxTicksLimit: 20 },
            gridLines: {
              color: theme.chart.gridLineColor,
            },
            scaleLabel: {
              labelString: 'x',
            },
          },
        ],
        yAxes: [
          {
            ticks: { fontColor: theme.chart.tickColor, max: 4.5, min: 0 },
            gridLines: {
              color: theme.chart.gridLineColor,
            },
            scaleLabel: {
              labelString: 'y',
            },
          },
        ],
      },
    }),
    [theme]
  );

  return { lineChartOptions, lossChartOptions };
};

export default useCharts;
