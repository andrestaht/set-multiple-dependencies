// require all "tests/**/*Test.js"
var testsContext = require.context("./specs/", true, /Test\.js$/);
testsContext.keys().forEach(testsContext);
