import React, { Component } from 'react';
import axios from 'axios'
import { Header, Segment, Card, Image} from 'semantic-ui-react';
import Kitty from '../images/adoption.jpg';
import { Row, Col, Container } from 'react-materialize';

class Adoptions extends Component {
  constructor(props) {
    super(props);
    this.state = { adoptions: [] };
  }
  componentDidMount() {
    axios.get('/api/adoptions/index')
      .then( res => {
        console.log("RESPONSE IS");
        console.log(res);
        this.setState({ adoptions: res.data.petfinder.shelters.shelter })
        console.log(this.state);
      })
      .catch( res => {
        console.log(res);
      })
  }
  display = () => {
    return this.state.adoptions.map( adoptions => {
      return (

        <Card className='green lighten-3'>

          <Card.Content>
          <Card.Header>{adoptions.name.$t}</Card.Header>
          <Card.Description>
            <p>{adoptions.city.$t}, {adoptions.state.$t} {adoptions.zip.$t}</p>

            <p>{adoptions.email.$t}</p>

            <p>{adoptions.phone.$t}</p>
          </Card.Description>
        </Card.Content>
        </Card>


      )
    });
  }

  render() {
    return (

      <Container>
        <Row>
          <Col s={12}>
          <br />
            <Header textAlign='center'>
              <h1><strong>Pet Adoption Shelters</strong></h1>
            </Header>

          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Image src={Kitty} alt='kitten' centered fluid/>
          </Col>
        </Row>

        <br />
        <Col s4>
        <Card.Group >
        { this.display() }
        </Card.Group>
        </Col>
    </Container>
    )
  }
}



export default Adoptions;
