// context for all js files in 'src' directory
var srcContext = require.context('../src', true, /\.js$/);

// context for all js files in 'test' directory
var testContext = require.context('./specs', true, /\.js$/);

// provide coverage for all js files
srcContext.keys().forEach(srcContext);

// include test files
testContext.keys().forEach(testContext);
