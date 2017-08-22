import React, { Component } from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import { Col } from 'react-materialize';
import '../styles/flash.css';
// import {HomeImage} from './HomeImage';
import Dog from '../images/dog.jpeg';

class Home extends Component {
  render() {
    return(
     <div class="row">
       <div class="col s12">
         <br />
         <Header textAlign='center'>
           <h1><strong>Welcome to Pet Care!</strong></h1>
         </Header>
         <br />
         <Image src={Dog} alt='Dog' centered />
       </div>
     </div>
    );
  }
}

export default Home;
