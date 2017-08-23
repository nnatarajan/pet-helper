import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Image, Card} from 'semantic-ui-react';
import { fetchPets } from '../actions/pets';
import Lady from '../images/lady_pets.jpg';
import { Row, Col, Button, Container} from 'react-materialize';

class Pets extends Component {
  constructor(props) {
    super(props)
    this.setState({ pets: [] });
  }
  componentDidMount() {
    this.props.dispatch(fetchPets());
  }

  display = () => {
    return this.props.pets.map(pet => {
      return (

        <Card className='cyan lighten-5'>

          <Card.Content>
            <Card.Header>{pet.name}</Card.Header>
            <Card.Description>
              <Button className='cyan lighten-3'>
              <a href={`managepet/${pet.id}`} style={styles.black}><strong>PET INFO</strong></a>
              </Button>
            </Card.Description>
          </Card.Content>

        </Card>

      )
    });
  }

  render() {
    return(

      <div>
      <Container>
        <Row>
          <Col s={12}>
          <br />
            <Header textAlign='center'>
              <h1><strong>My Pets</strong></h1>
            </Header>
          </Col>
          </Row>
          <Row>
            <Col s={12}>
              <Image src={Lady} alt='Lady with Pets' centered fluid/>
            </Col>
        </Row>
        <br />
        <Card.Group centered>
          { this.display() }
        </Card.Group>
      </Container>
      </div>
    )
  }
}

const styles = {
  black: { color: 'black' },
}

const mapStateToProps = (state) => {
  return { pets: state.pets };
}

export default connect(mapStateToProps)(Pets);
