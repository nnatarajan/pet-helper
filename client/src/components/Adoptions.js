import React, { Component } from 'react';
import axios from 'axios'
import { Header, Grid, Segment, Menu, Image, Button} from 'semantic-ui-react';


class Adoptions extends Component {
  componentDidMount() {
    axios.get('/adoptions')
      .then( res => this.setState({ adoptions: res.data.data }) )
  }

  render() {
    return (
      <Segment basic textAlign='center'>
        <Header as='h1' textAlign='center'>Pet Adoption</Header>
        <br />
      </Segment>
    )
  }
}

export default Adoptions;
