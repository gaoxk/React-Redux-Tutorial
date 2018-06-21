import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reducer, getName, changeName, jadName} from './client.js';
import { bindActionCreators } from 'redux'

//This component demonstrates Redux

class Welcome2 extends React.Component {
 render() {
   return <h1>{this.props.name}</h1>;
 }
}

const mapStateToProps = state => {
  return {name: getName(state)};
}

export default connect(mapStateToProps)(Welcome2);
