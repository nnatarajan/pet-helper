import React, { Component } from 'react';
import axios from 'axios'

class Adoptions extends Component {
  componentDidMount() {
    axios.get('/adoptions')
      .then( res => this.setState({ adoptions: res.data.data }) )
  }

  render() {
    return (
      null
    )
  }
}

export default Adoptions;
