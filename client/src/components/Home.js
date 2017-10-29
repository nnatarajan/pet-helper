import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
import { Row, Col, Carousel} from 'react-materialize';
// import {HomeImage} from './HomeImage';
// import Cat from '../images/kitten-800-580.jpeg';

const containerStyle = {
  maxWidth: 900,
  marginTop: 20,
  fontFamily: 'Roboto',
  justifyContent: 'center',
  alignItems: 'center'
};

const headerStyle = {
  marginTop: 15,
  marginBottom: 15
};


class Home extends Component {
  render() {
    return(

      <Container text style={containerStyle}>
        <Row>
          <Col s={12}>
            <Header textAlign='center' style={headerStyle}><h1><strong>Welcome to Pet Helper!</strong></h1></Header>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Carousel options={{ fullWidth: true }} images={[
            	'http://placekitten.com/800/580',
              'http://lorempixel.com/800/580/animals/10/',
              'http://placekitten.com/800/581',
              'http://lorempixel.com/800/580/animals/9/'
            ]} />
          </Col>
        </Row>
      <br />
      </Container>

    );
  }
}

export default Home;
