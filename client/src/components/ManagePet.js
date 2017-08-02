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
    let pet = this.props.pet;
    return (

        <Table.Row>
          <Table.Cell as='h2'>{pet.name}</Table.Cell>
          <Table.Cell as='h3'>Species: {pet.species}</Table.Cell>
          <Table.Cell  as='h3'>Birthday: {pet.birthday}</Table.Cell>
          <Table.Cell  as='h3'>Notes: {pet.notes}</Table.Cell>
        </Table.Row>
    )
  }


  render() {
    return(
      <div>
      <Segment basic textAlign='center' computer={8} tablet={16} mobile={16}>
        <Header as='h1' textAlign='center'>Manage My Pet</Header>
        <Image src={ Kittens } alt='Kitten' centered />
      </Segment>

        <Table padded='very' computer={8} tablet={16} mobile={16}>
        <Table.Body>
        { this.display() }
        </Table.Body>

        <br />
        <Button href={`/reminders/${this.props.match.params.petid}`} fluid color='red' content = 'CREATE REMINDERS' style={styles.black}
        />
        </Table>
      </div>
    );
  }
}

const styles = {
  black: { color: 'black' },
}

const mapStateToProps = (state) => {
  return { pet: state.pets };
}

export default connect(mapStateToProps)(ManagePet);
