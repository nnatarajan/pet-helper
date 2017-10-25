import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Image, Button, Card, Table} from 'semantic-ui-react';
import { fetchSelectedPet } from '../actions/pets';
import Kitten from '../images/kitten-800-409.jpeg';
import { Row, Col} from 'react-materialize';

const containerStyle = {
  maxWidth: 900,
  marginTop: 20
};

class ManagePet extends Component {
  componentDidMount() {
    let { dispatch, match: { params } } = this.props;
    dispatch(fetchSelectedPet(params.petid));
  }


  display = () => {
    let pet = this.props.pet;
    return (

      <Card fluid centered className="card purple lighten-5 center-align" >
        <Card.Content>
          <Card.Header><h1>{pet.name}</h1></Card.Header>
        </Card.Content>
        <Card.Content>
        <Card.Description>

          <Table unstackable className="purple lighten-4">
            <Table.Header >
              <Table.Row>
                <Table.HeaderCell>Species</Table.HeaderCell>
                <Table.HeaderCell>Birthday</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{pet.species}</Table.Cell>
                <Table.Cell>{pet.birthday}</Table.Cell>
                <Table.Cell>{pet.notes}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button className="purple lighten-3" >
            <a href={`/reminders/${this.props.match.params.petid}`}>Click to Create Reminders</a>
          </Button>

        </Card.Content>
      </Card>

)
  }

  render() {
    return(

      <Container text style={containerStyle}>
        <Row>
          <Col s={12}>
          <Header textAlign='center'>
            <h1><strong>Manage My Pet</strong></h1>
          </Header>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
        <Image src={ Kitten } alt='Kitten' centered fluid />
          </Col>
        </Row>


        <Col>
          { this.display() }
        </Col>
        <br />
    </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return { pet: state.pets };
}

export default connect(mapStateToProps)(ManagePet);
