export const colors = {
  grey: {
    100: '#F5F7FA',
    200: '#E4E7EB',
    300: '#CBD2D9',
    400: '#9AA5B1',
    500: '#7B8794',
    600: '#616E7C',
    700: '#52606D',
    800: '#3E4C59',
    900: '#323F4B',
    1000: '#1F2933'
  }
};

export const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

export const lightTheme = {
  chart: {
    colors: chartColors,
    lineColor: colors.grey[200],
    tickColor: colors.grey[600],
    gridLineColor: colors.grey[200]
  }
};

export const darkTheme = {
  chart: {
    colors: chartColors,
    lineColor: colors.grey[400],
    tickColor: colors.grey[400],
    gridLineColor: colors.grey[800]
  }
};
