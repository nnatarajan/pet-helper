import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Image, Button, Card} from 'semantic-ui-react';
import { fetchSelectedPet } from '../actions/pets';
import Pets from '../images/pets.jpg';
import { Row, Col, Container } from 'react-materialize';

class ManagePet extends Component {
  componentDidMount() {
    let { dispatch, match: { params } } = this.props;
    dispatch(fetchSelectedPet(params.petid));
  }

  display = () => {
    let pet = this.props.pet;
    return (

      <Card centered className="card teal accent-2 center-align fluid" >
        <Card.Content>
          <Card.Header>{pet.name}</Card.Header>
        </Card.Content>
        <Card.Content>
        <Card.Description>
          <p><strong>Species:</strong>  {pet.species}</p>
          <p><strong>Birthday:</strong>  {pet.birthday}</p>
          <p><strong>Notes:</strong>  {pet.notes}</p>
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button className='grey lighten-2' >
            <a href={`/reminders/${this.props.match.params.petid}`}  style={styles.black}>Click to Create Reminders</a>
          </Button>

        </Card.Content>
      </Card>

)
  }

  render() {
    return(

      <Container>
        <Row>
          <Col s={12}>
            <br />
          <Header textAlign='center'>
            <h1><strong>Manage My Pet</strong></h1>
          </Header>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
        <Image src={ Pets } alt='Pets' centered />
          </Col>
        </Row>

        <br />
        <Col s12>
          { this.display() }
        </Col>
    </Container>
    )
  }
}

const styles = {
  black: { color: 'black' },
}

const mapStateToProps = (state) => {
  return { pet: state.pets };
}

export default connect(mapStateToProps)(ManagePet);
