import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header,
        Grid,
        Segment,
        Image
      }
        from 'semantic-ui-react';
import { fetchPets } from '../actions/pets';
import Dog from '../images/dog2.jpeg';
import { Card, Button } from 'react-materialize';

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

        <div className='row'>
          <div className="col s12">
          <br />
          <Card className='card teal accent-2 center-align'>
          <div className='card-content'>
            <span className="card-title">
              <h2>{pet.name}</h2>
            </span>
            <br />

            <div className="card-action">
              <Button className='grey lighten-2 btn-large' >
              <a href={`managepet/${pet.id}`} style={styles.black}>PET INFO</a>
              </Button>
            </div>

            </div>
          </Card>
          </div>
        </div>
      )
    });
  }

  render() {
    return(

      <div>
        <div class="row">
          <div class="col s12">
          <br />
          <Header textAlign='center'>
            <h1><strong>My Pets</strong></h1>
          </Header>
          <br/>
          <Image src={Dog} alt='Dog' centered />
          </div>
        </div>
        <br />
          { this.display() }
      </div>
    )
  }
}

const styles = {
  black: { color: 'black' },
}

const mapStateToProps = (state) => {
  return { pets: state.pets };
}

export default connect(mapStateToProps)(Pets);
