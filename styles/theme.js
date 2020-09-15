import { colors } from './vars';

export const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
};

export const lightTheme = {
  ui1: '#fff',
  text1: '#0a2540',
  titleText: '#0a2540',
  //text1: '#2e2e2e',
  text2: colors.grey[700],
  accent: '#0967D2',
  quoteHighlight: '#cc3232',

  //code
  code: '#011627',
  codeBg: '#f3f3f3',
  inlineCode: '#2e2e2e',
  inlineCodeBg: '#f3f3f3',

  //charts
  chart: {
    colors: chartColors,
    lineColor: colors.grey[200],
    tickColor: colors.grey[600],
    gridLineColor: colors.grey[200],
  },
};

export const darkTheme = {
  ui1: '#1F2933',
  text1: '#F5F7FA',
  titleText: '#F5F7FA',
  text2: colors.grey[200],
  accent: '#47A3F3',
  quoteHighlight: '#cc3232',

  //code
  code: '#011627',
  codeBg: '#f3f3f3',
  inlineCode: '#f3f3f3',
  inlineCodeBg: '#011627',

  //charts
  chart: {
    colors: chartColors,
    lineColor: colors.grey[400],
    tickColor: colors.grey[400],
    gridLineColor: colors.grey[800],
  },
};
