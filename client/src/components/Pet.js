import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

        //     <div>
        // //   <p>
        // //     {this.props.pet.name}
        // //     {this.props.pet.species}
        // //     {this.props.pet.birthday}
        // //   </p>
        // // </div>

class Pet extends Component {

  render() {
    return(
      <Header as='h1' textAlign='center'>Pets Component</Header>

    )
  }
}

export default Pet;