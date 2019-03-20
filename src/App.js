import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Kick-Ass Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
