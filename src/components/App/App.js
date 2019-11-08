import React, { Component } from 'react';
import Home from '../Home/Home.js';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
