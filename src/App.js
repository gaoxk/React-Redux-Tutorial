import React, { Component } from 'react';
import Welcome2 from './Welcome2.jsx';
import { store } from './store.js';
import { jadName } from './actions.js';

class App extends Component {
  render() {
    return (
      <div >
        <Welcome2 store={store}/>
        <button type="button" onClick={() => {
          console.log("hi");
          store.dispatch(jadName);
        }}>Hi!</button>
        {/* <Welcome name="Jad" />*/}
      </div>
    );
  }
}

export default App;
