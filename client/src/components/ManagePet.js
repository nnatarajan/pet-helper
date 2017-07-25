import React, { Component } from 'react';
import axios from 'axios';
import { Header, Grid, Segment, Menu, Image} from 'semantic-ui-react';
import Pet from './Pet';
import Pets from './Pets';
import Tiger from '../images/tiger.jpeg';

class ManagePet extends Component {
  constructor(props){
    super(props);
  // initialized state
    this.state = { my_pet: { id: 'sample_id', name: 'Fido', species: 'Dog', birthday:"7/22/2017" } };
  }

  componentDidMount() {
    console.log("the props are");
    console.log(this.props);
    const petid = this.props.match.params.petid;
    axios.get('/api/pets/{petid}')
        .then( (response) => {
          console.log("REQUEST SUCCEEDED");
          console.log(response);
          this.setState( {my_pet: (response.data)  });
        }).catch ((response) => {
          console.log("REQUEST FAILED");
          console.log(response);
        })
  }

  render() {
    return(
      <div>
        <Segment basic textAlign='center'>
          <Header as='h1' textAlign='center'>Manage My Pet</Header>
          <Image src={Tiger} alt='Tiger' centered />
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
          <Pet pet={this.state.my_pet} key={this.state.my_pet.id}/>
        }

      </div>
    );
  }
}

export default ManagePet;
