import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome2 from './Welcome2.jsx';
import { store } from './store.js';

class App extends Component {
  render() {
    return (
      <div >
        <Welcome2 store={store}/>
        {/* <Welcome name="Jad" />*/}
      </div>
    );
  }
}

export default App;
