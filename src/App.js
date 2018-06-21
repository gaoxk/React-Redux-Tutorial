import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.jsx';
import { createStore } from "redux";

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




const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {...state, name: action.name};
      break;
    case "JAD_NAME":
      return {...state, name: "JAD :D "};
      break;
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({type:"CHANGE_NAME", name:"korst"});
