const babelJest = require('babel-jest').default;

module.exports = babelJest.createTransformer({
  presets: [require.resolve('@tablecheck/babel-preset')],
  babelrc: false
});
