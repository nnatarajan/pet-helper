import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Grid, Segment, Menu, Image} from 'semantic-ui-react';
import { fetchSelectedPet } from '../actions/pets';
import Kittens from '../images/kittens.jpg';

class ManagePet extends Component {
  componentDidMount() {
    let { dispatch, match: { params } } = this.props;
    dispatch(fetchSelectedPet(params.petid));
  }

  display = () => {
    console.log("IN DISPLAY")
    console.log(this.props)
    let pet = this.props.pet;
    if (!pet) {
      return (
        <div> WHAT THE HELL IS GOING ON </div>
      )
    }
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
          <Segment>{pet.notes}</Segment>
        </Grid.Column>
      </Grid.Row>
    )
  }


  render() {
    return(
      <div>
        <Segment basic textAlign='center'>
          <Header as='h1' textAlign='center'>Manage My Pet</Header>
          <Image src={ Kittens } alt='Kitten' centered />
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
              <Segment>Notes</Segment>
            </Grid.Column>
          </Grid.Row>
        { this.display() }
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("IN MAP STATE TO PROPS");
  console.log(state);
  return { pet: state.pets };
}

export default connect(mapStateToProps)(ManagePet);
