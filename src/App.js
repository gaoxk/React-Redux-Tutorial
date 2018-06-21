import React, { Component } from 'react';
import {connect} from 'react-redux';
import Welcome from './Welcome.jsx';
import Welcome2 from './Welcome2.jsx';
import { store, jadName, changeName } from './client.js';

const App = ({
  jadName
}) => (
  <div >
    {/*React*/}
    <Welcome name="Jad" />

    {/*Redux*/}
    <Welcome2/>
    <button type="button" onClick={jadName}>Hi!</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  changeName : () => dispatch(changeName("Gregg")),
  jadName: () => dispatch(jadName()),
});

export default connect(null, mapDispatchToProps)(App);
