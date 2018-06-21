import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.jsx';

class App extends Component {
  render() {
    return (
      <div >
        <Welcome name="Jad"/>
      </div>
    );
  }
}

export default App;
