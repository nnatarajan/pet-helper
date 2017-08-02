import React, { Component } from 'react';
import axios from 'axios'
import { Header, Grid, Segment, Menu, Image, Button} from 'semantic-ui-react';

class Adoptions extends Component {
  constructor(props) {
    super(props);
    this.state = { adoptions: [] };
  }
  componentDidMount() {
    axios.get('/api/adoptions/index')
      .then( res => {
        console.log("RESPONSE IS");
        console.log(res);
        this.setState({ adoptions: res.data.petfinder.shelters.shelter })
        console.log(this.state);
      })
      .catch( res => {
        alert('adoptions call failed');
        console.log(res);
      })
  }
  display = () => {
    return this.state.adoptions.map( adoptions => {
      return (
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <p>{adoptions.name.$t}</p>
              <p>{adoptions.address1.$t}</p>
              <p>{adoptions.city.$t}, {adoptions.state.$t}, {adoptions.zip.$t}</p>
              <p>{adoptions.email.$t}</p>
              <p>{adoptions.phone.$t}</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      )
    });
  }

  render() {
    return (
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>Pet Adoption</Header>
        <br />
        { this.display() }
      </Segment>
    )
  }
}

export default Adoptions;
