import React, { Component } from 'react';
import axios from 'axios'
import { Header, Segment, Grid, Image} from 'semantic-ui-react';
import Kitty from '../images/adoption.jpg';
import { Card, CardTitle, Col } from 'react-materialize';

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
        alert('adoptions call failed');
        console.log(res);
      })
  }
  display = () => {
    return this.state.adoptions.map( adoptions => {
      return (


        <div class='row'>
          <div class="col s12 m6">
            <br />
            <Card className='teal accent-2'>

              <span class="card-title">
                <h2>{adoptions.name.$t}</h2>
              </span>

              <div class='card-content'>
              <h4>
              <p>{adoptions.city.$t}, {adoptions.state.$t} {adoptions.zip.$t}</p>

              <p>{adoptions.email.$t}</p>

              <p>{adoptions.phone.$t}</p>
            </h4>
              </div>

          </Card>
        </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col s12">
            <br />
            <Header textAlign='center'>
            <h1><strong>Pet Adoption Shelters</strong></h1>
            </Header>

            <br />

            <Image src={Kitty} alt='kitten' centered />
          </div>
        </div>
        <br />

            { this.display() }

      </div>
    )
  }
}



export default Adoptions;
