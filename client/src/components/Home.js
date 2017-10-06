import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import { Row, Col, Container } from 'react-materialize';
// import {HomeImage} from './HomeImage';
import Dog from '../images/dog2.jpeg';

class Home extends Component {
  render() {
    return(

      <Container>
        <Row>
          <Col s={12}>
          <br />
            <Header textAlign='center'>
              <h1><strong>Welcome to Pet Helper!</strong></h1>
            </Header>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
          <Image src={Dog} alt='Dog' centered fluid/>
          </Col>
        </Row>
      <br />
      </Container>

    );
  }
}

export default Home;
