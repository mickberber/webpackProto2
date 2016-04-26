var greetings = require('./config.json');

module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = greetings.greetText;
  return greet;
};
