import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Pet from './Pet';

class Pets extends Component {
    
  render() {
    const {details, index } = this.props;
    return(
      <Header as='h1' textAlign='center'>Pets Component</Header>
    );
  }
}

export default Pets;
