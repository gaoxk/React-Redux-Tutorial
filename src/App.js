import React, { Component } from 'react';
import Welcome from './Welcome.jsx';
import Welcome2 from './Welcome2.jsx';
import { store, jadName } from './client.js';

class App extends Component {
  render() {
    return (
      <div >
        {/*React*/}
        <Welcome name="Jad" />

        {/*Redux*/}
        <Welcome2 store={store}/>
        <button type="button" onClick={() => {
          console.log("hi");
          store.dispatch(jadName);
        }}>Hi!</button>
      </div>
    );
  }
}

export default App;
