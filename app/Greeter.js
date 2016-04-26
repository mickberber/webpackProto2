import React, { Component } from 'react';
import greetings from './config.json';
import styles from './greeter.css';

class Greeter extends Component {
  render() {
    return (
      <div className='styles.root'>
        {greetings.greetText}
      </div>
    );
  }
};

export default Greeter;
