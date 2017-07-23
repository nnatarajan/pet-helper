import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Pet from './Pet';

class Pets extends Component {
  constructor(props){
    super(props);
  // initialized state
    this.state = { my_pets: [ { id: 'sample_id', name: 'Fido', species: 'Dog' }] };
  }
  componentDidMount() {
    axios.get('/api/pets')
        .then( (response) => {
          this.setState( {my_pets: (response.data)  });
        })
  }

  render() {
    return(
      <div>
        <Header as='h1' textAlign='center'>Pets Component</Header>
      {
        <ol>
          {
            this.state.my_pets.map(
              (pet) => <li><Pet key={pet.id} pet={pet} /></li>
            )
          }
        </ol>
      }
      </div>
    );
  }
}

export default Pets;
