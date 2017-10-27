import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Container, Header, Image, Card, Button} from 'semantic-ui-react';
import { fetchPets } from '../actions/pets';
import Kittens from '../images/kittens-800-578.jpeg';
import { Row, Col} from 'react-materialize';

const containerStyle = {
  maxWidth: 900,
  marginTop: 20,
  fontFamily: 'Roboto',
  justifyContent: 'center',
  alignItems: 'center'
};

const sectionStyle = {
  backgroundColor: '#E8E8E8'
};

const innerSectionStyle = {
  margin: 20,
  fontFamily: 'Montserrat',
  fontSize: 15
};

const cardStyle = {
  backgroundColor: '#D0E6E6'
};

const buttonStyle = {
  backgroundColor: '#C0DEDB'
};

const headerStyle = {
  marginTop: 15,
  marginBottom: 15
};

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

        <Card centered style={cardStyle}>

          <Card.Content>
            <Card.Header>{pet.name}</Card.Header>
          </Card.Content>
          <Card.Content extra>
              <Button style={buttonStyle}>
                <a href={`managepet/${pet.id}`}><strong>Click Here for Summary</strong></a>
              </Button>
          </Card.Content>

        </Card>

      )
    });
  }

  render() {
    return(

      <Container text style={containerStyle}>
        <Row>
          <Col s={12}>
            <Header textAlign='center' style={headerStyle}>
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
        <div style={sectionStyle}>
        <Grid style={innerSectionStyle}>
          <Grid.Row columns={1} centered>

          <Card.Group>
            { this.display() }
          </Card.Group>

        <br />
        </Grid.Row>
      </Grid>
      </div>
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return { pets: state.pets };
}

export default connect(mapStateToProps)(Pets);
