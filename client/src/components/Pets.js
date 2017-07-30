import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Grid, Segment, Menu, Image, Button} from 'semantic-ui-react';
import { fetchPets } from '../actions/pets';
import Dog from '../images/dog2.jpeg';

class Pets extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPets());
  }

  display = () => {
    return this.props.pets.map(pet => {
      return (
        <Grid.Row>
          <Grid.Column>
            <Segment>{pet.name}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>{pet.species}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>{pet.birthday}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Button onClick fluid color='blue'
              size='small' content = 'Manage my pet'
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      )
    });
  }

  render() {
    return(
        <Segment basic textAlign='center'>
          <Header as='h1' textAlign='center'>My Pets</Header>
          <Image src={Dog} alt='Dog' centered />
          <br />
          <Grid columns='equal' textAlign='center'>
            { this.display() }
          </Grid>
        </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { pets: state.pets };
}

export default connect(mapStateToProps)(Pets);
