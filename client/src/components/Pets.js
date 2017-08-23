import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Image, Card, Button} from 'semantic-ui-react';
import { fetchPets } from '../actions/pets';
import Kittens from '../images/kitten-800-800.jpeg';
import { Row, Col, Container} from 'react-materialize';

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

        <Card fluid className='cyan lighten-5'>

          <Card.Content>
            <Card.Header>{pet.name}</Card.Header>
          </Card.Content>
          <Card.Content extra>
              <Button
                className='cyan lighten-3'>
                <a href={`managepet/${pet.id}`} style={styles.black}><strong>Click Here for Summary</strong></a>
              </Button>
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
              <Image src={Kittens} alt='Kittens in Basket' centered fluid/>
            </Col>
        </Row>
        <br />
        <Card.Group centered>
          { this.display() }
        </Card.Group>
        <br />
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
