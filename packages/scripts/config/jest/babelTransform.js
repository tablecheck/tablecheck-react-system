const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [require.resolve('@tablecheck/babel-preset')],
  babelrc: false
});