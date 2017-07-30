import React, { Component } from 'react';
import axios from 'axios';
import { Header, Grid, Segment, Menu, Image} from 'semantic-ui-react';
import Pet from './Pet';
import Dog from '../images/dog2.jpeg';

class Pets extends Component {
  constructor(props){
    super(props);
  // initialized state
    this.state = { my_pets: [ { id: 'sample_id', name: 'Fido', species: 'Dog', birthday:"7/22/2017" }] };
  }
  componentDidMount() {

  }

  render() {
    return(
      <div>
        <Segment basic textAlign='center'>
          <Header as='h1' textAlign='center'>My Pets</Header>
          <Image src={Dog} alt='Dog' centered />
        </Segment>
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
            <Grid.Column>
              <Segment>Pet Care</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <hr />

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
