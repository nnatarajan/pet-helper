import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Grid, Segment, Menu, Image} from 'semantic-ui-react';
import Pet from './Pet';
import Pets from './Pets';
import { fetchSelectedPet } from '../actions/pets';
import Tiger from '../images/tiger.jpeg';

class ManagePet extends Component {
  // constructor(props){
  //   super(props);
  // // initialized state
  //   this.state = { my_pet: { id: 'sample_id', name: 'Fido', species: 'Dog', birthday:"7/22/2017" } };
  // }

  componentDidMount() {
    // Get the petid from match
    console.log("props");
    console.log(this.props);
    const petid = this.props.match.params.petid;
    console.log("ID IS");
    console.log(petid);
    this.props.dispatch(fetchSelectedPet(petid));
  }

  display = () => {
    if (!this.props.pet) {
      return (
        <div></div>
      )
    }
    return this.props.pet.map(pet => {
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
    });
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
        { this.display() }
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { pet: state.pet };
}

export default connect(mapStateToProps)(ManagePet);
