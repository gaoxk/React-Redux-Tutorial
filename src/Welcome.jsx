import React, { Component } from 'react';

class Welcome extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     message: ""
   };
 }

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

export default Welcome;
