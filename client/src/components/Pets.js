import React, { Component } from 'react';
import axios from 'axios';
import { Header, Grid, Segment, Menu, Image} from 'semantic-ui-react';
import Pet from './Pet';

class Pets extends Component {
  constructor(props){
    super(props);
  // initialized state
    this.state = { my_pets: [ { id: 'sample_id', name: 'Fido', species: 'Dog', birthday:"7/22/2017" }] };
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
        <br />
        <Header as='h1' textAlign='center'>My Pets</Header>

        <br />
        <Grid columns='equal' textAlign='center'>
          <Grid.Row>
            <Grid.Column>
              <Segment>Pet Name</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Species</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Birthday</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {
          this.state.my_pets.map(
            (pet) => <Pet key={pet.id} pet={pet} />
          )
        }

      </div>
    );
  }
}

export default Pets;
