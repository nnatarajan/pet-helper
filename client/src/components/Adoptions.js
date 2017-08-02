import React, { Component } from 'react';
import axios from 'axios'
import { Header, Segment, Grid, Image, Card } from 'semantic-ui-react';
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

        <Grid.Row class='row'>
        <Grid.Column class='column'>
            <Card class='ui segment' style={styles.black} color='green' fluid>
              <Card.Content>
              <Card.Header content={adoptions.name.$t} />

              <Card.Description>

              <span>{adoptions.address1.$t}</span>
              <br />

              <span>{adoptions.city.$t}, {adoptions.state.$t}, {adoptions.zip.$t}</span>
              <br />

              <span>{adoptions.email.$t}</span>
              <br />

              <span>{adoptions.phone.$t}</span>
              <br />
            </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        </Grid.Row>





      )
    });
  }

  render() {
    return (
      <Segment textAlign='center'>
        <Header as='h1' textAlign='center'>
          <strong>Pet Adoption Shelters</strong>
        </Header>
        <Image src={Kitty} alt='kitten' centered />
        <br />
        <Grid class='ui equal width grid' container columns={2} centered>

            { this.display() }

        </Grid>
      </Segment>
    )
  }
}

const styles = {
  black: { color: 'black' },
}

export default Adoptions;
