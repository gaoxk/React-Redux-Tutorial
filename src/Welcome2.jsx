import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeName, jadName} from './actions.js';
import {reducer, getName} from './reducer.js';
import { bindActionCreators } from 'redux'

class Welcome2 extends React.Component {
 render() {
   return <h1>{this.props.name}</h1>;
 }
}

const mapStateToProps = state => {
  return {name: getName(state)};
}

const mapDispatchToProps = {
  changeName,
  jadName
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome2);
