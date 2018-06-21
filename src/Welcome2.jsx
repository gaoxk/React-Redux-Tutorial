import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeName, jadName} from './actions.js'

class Welcome2 extends React.Component {

 componentDidMount() {
   setTimeout(
     () =>
       this.setState({
         message: this.state.message + "I also like React and Redux!"
       }),
     3000
   );
 }

 componentWillMount() {
   this.setState({
     message: "Hello! My name is " + this.props.name + "... "
   });
 }

 render() {
   return <h1>{this.state.message}</h1>;
 }
}



export default Welcome2;
