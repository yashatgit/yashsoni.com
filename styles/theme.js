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
  accent: '#0967D2',
  accentLight: '#ff5252',
  body: '#3a4145',
  code: '#011627',
  codeBg: '#f3f3f3',
  inlineCode: '#2e2e2e',
  inlineCodeBg: '#f3f3f3',
  lightGrey: colors.grey[200],
  darkGrey: colors.grey[700],
  primary: colors.text,
  secondary: '#fff',
  text: '#2e2e2e',
  subText: 'rgb(108, 118, 147);',
  quoteHighlight: '#cc3232',
  chart: {
    colors: chartColors,
    lineColor: colors.grey[200],
    tickColor: colors.grey[600],
    gridLineColor: colors.grey[200],
  },
};

export const darkTheme = {
  accent: '#47A3F3',
  accentLight: '#BAE3FF',
  body: '#F5F7FA',
  code: '#011627',
  codeBg: '#f3f3f3',
  inlineCode: '#f3f3f3',
  inlineCodeBg: '#011627',
  lightGrey: colors.grey[200],
  darkGrey: colors.grey[200],
  primary: '#F5F7FA',
  secondary: '#1F2933',
  text: '#F5F7FA',
  subText: 'rgb(126, 140, 154);',
  quoteHighlight: '#cc3232',
  chart: {
    colors: chartColors,
    lineColor: colors.grey[400],
    tickColor: colors.grey[400],
    gridLineColor: colors.grey[800],
  },
};
