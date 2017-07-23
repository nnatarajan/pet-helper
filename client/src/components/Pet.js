import React, { Component } from 'react';
import axios from 'axios';

class Pet extends Component {

  render() {
    return(
      <div>
        <p>
          {this.props.pet.name} {this.props.pet.species}
        </p>
      </div>
    )
  }
}

export default Pet;
