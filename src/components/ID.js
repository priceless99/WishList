import React from 'react';

let counter = 0;

class Id extends React.Component {
  state = {
    id: counter++ // acquire unique id on component creating
  }    
  render() {
    this.props.children('id'+this.state.counter); // pass it down
  }  
}  

export default ID;