import React, { Component } from 'react';
var greetings = require('./config.json');

class Greeter extends Component {
  render() {
    return (
      <div>
        {greetings.greetText}
      </div>
    );
  }
};

export default Greeter;
