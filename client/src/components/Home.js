import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import '../styles/flash.css';
// import {HomeImage} from './HomeImage';
import dog from '../images/dog.jpeg';

class Home extends Component {
  render() {
    return(
  <Segment basic textAlign='center'>
    <Header as='h1' textAlign='center'>Welcome to Pet Care!</Header>
    <Image src={dog} alt='dog' fluid />
  </Segment>
    );
  }
}

export default Home;
