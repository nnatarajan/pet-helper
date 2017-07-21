import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

class Pet extends Component {
    
  render() {
    return(
      <Header as='h1' textAlign='center'>Pets Component</Header>


    );
  }
}

export default Pet;