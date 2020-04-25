export const fontFamily = 'SofiaPro, Helvetica, Arial, Verdana, sans-serif;';

export const colors = {
  darkGrey: '#3A3C42',
  green: '#778E7E',
  yellow: '#AD9559',
  red: '#844E3D',
  grey: '#787d85',
  lightGrey: '#e7e7e9',
  orange: '#a2724e',
  link: '#3E5CB7',
  blue: '#5258BA'
};

export const grid = {
  maxWidth: 1440,
  gutterWidth: 36,
  outsideGutterWidth: 18,
  columnWidth: 64,
  numColums: 12
};

export const gridPercentages = {
  gutterWidth: (100 / grid.maxWidth) * grid.gutterWidth,
  outsideGutterWidth: (100 / grid.maxWidth) * grid.outsideGutterWidth,
  columnWidth: (100 / grid.maxWidth) * grid.columnWidth
};

export const breakpoints = {
  xs: {
    from: 0,
    to: 320
  },
  s: {
    from: 321,
    to: 480
  },
  m: {
    from: 481,
    to: 768
  },
  l: {
    from: 769,
    to: 1024
  },
  xl: {
    from: 1025,
    to: 1200
  },
  xxl: {}
};
