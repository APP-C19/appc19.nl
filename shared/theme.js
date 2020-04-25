const colors = {
  green: '#778E7F',
  lightGreen: '#A6B5AC',
  lightGreenExtra: '#B2BFB7',
  darkGreen: '#3D4840',
  lightGrey: '#F5F6F8',
  grey: '#767b7f',
  darkGrey: '#3A3C42',
  white: 'white',
  red: '#EB3941',
  blue: '#2E3191'
};

const breakpoints = {
  xs: {
    min: 0,
    max: 767
  },
  // Small devices (tablets)
  sm: {
    min: 768,
    max: 991
  },
  // Medium devices (desktops)
  md: {
    min: 992,
    max: 1199
  },
  // Large devices (large desktops)
  lg: {
    min: 1200
  }
};

const grid = {
  maxWidth: 1440,
  gutterWidth: 36,
  outsideGutterWidth: 18,
  columnWidth: 64,
  numColums: 12
};

const gridPercentages = {
  gutterWidth: (100 / grid.maxWidth) * grid.gutterWidth,
  outsideGutterWidth: (100 / grid.maxWidth) * grid.outsideGutterWidth,
  columnWidth: (100 / grid.maxWidth) * grid.columnWidth
};

const device = {
  phone: `(max-width: ${breakpoints.xs.max}px)`,
  tablet: `(min-width: ${breakpoints.sm.min}px) and (max-width: ${
    breakpoints.sm.max
  }px)`,
  laptop: `(min-width: ${breakpoints.md.min}px) and (max-width: ${
    breakpoints.md.max
  }px)`,
  desktop: `(min-width: ${breakpoints.lg.min}px)`
};

export default {
  colors,
  breakpoints,
  device,
  grid,
  gridPercentages
};
