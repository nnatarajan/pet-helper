import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Menu, Image, Table, Button} from 'semantic-ui-react';
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

        <Table.Row>
          <Table.Cell>Pet Name: {pet.name}</Table.Cell>
          <Table.Cell>Species: {pet.species}</Table.Cell>
          <Table.Cell>Birthday: {pet.birthday}</Table.Cell>
          <Table.Cell>Notes: {pet.notes}</Table.Cell>
        </Table.Row>
    )
  }


  render() {
    return(
      <div>
        <Segment basic textAlign='center'>
          <Header as='h1' textAlign='center'>Manage My Pet</Header>
          <Image src={ Kittens } alt='Kitten' centered />
        </Segment>

        <Table padded='very'>
        <Table.Body>
          { this.display() }
        </Table.Body>
        <Button href={`reminders`} fluid color='blue'
        size='small' content = 'Create reminders'
        />
      </Table>
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
