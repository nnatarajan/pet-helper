import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import { Row, Col} from 'react-materialize';
// import {HomeImage} from './HomeImage';
import Dog from '../images/kitten-750-425.jpeg';

const containerStyle = {
  maxWidth: 900,
  marginTop: 20
};

class Home extends Component {
  render() {
    return(

      <Container text style={containerStyle}>
        <Row>
          <Col s={12}>
            <Header textAlign='center'><h1><strong>Welcome to Pet Helper!</strong></h1></Header>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
          <Image src={Dog} alt='Dog' centered fluid />
          </Col>
        </Row>
      <br />
      </Container>

    );
  }
}

export default Home;
