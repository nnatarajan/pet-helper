import React, { Component } from 'react';
import axios from 'axios';
import { Header, Grid, Segment, Menu, Image} from 'semantic-ui-react';
import Pet from './Pet';
import tiger from '../images/tiger.jpeg';

class Pets extends Component {
  constructor(props){
    super(props);
  // initialized state
    this.state = { my_pets: [ { id: 'sample_id', name: 'Fido', species: 'Dog', birthday:"7/22/2017" }] };
  }
  componentDidMount() {
    axios.get('/api/pets')
        .then( (response) => {
          console.log("REQUEST SUCCEEDED");
          console.log(response);
          this.setState( {my_pets: (response.data)  });
        }).catch ((response) => {
          console.log("REQUEST FAILED");
          console.log(response);
        })
  }

  render() {
    return(
      <div>
        <Segment basic textAlign='center'>
          <Header as='h1' textAlign='center'>My Pets</Header>
          <Image src={tiger} alt='tiger' size='medium' centered />
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
