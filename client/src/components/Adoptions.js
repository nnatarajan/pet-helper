import React, { Component } from 'react';
import axios from 'axios'
import { Header, Segment, Grid, Image, Card} from 'semantic-ui-react';
import Kitty from '../images/adoption.jpg';

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

                <Card.Group >
                <Card color='green' fluid>
                  <Card.Content header={adoptions.name.$t} />
                  <Card.Content>
                    <p>{adoptions.address1.$t}</p>
                    <p>{adoptions.city.$t}, {adoptions.state.$t}, {adoptions.zip.$t}</p>
                    <p>{adoptions.email.$t}</p>
                    <p>{adoptions.phone.$t}</p>
                  </Card.Content>
                </Card>
                </Card.Group>

      )
    });
  }

  render() {
    return (
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>Pet Adoption Shelters</Header>
        <Image src={Kitty} alt='kitten' centered />
        <br />
        { this.display() }
      </Segment>
    )
  }
}

export default Adoptions;
