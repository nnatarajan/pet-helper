import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header,
        Grid,
        Segment,
        Image
      }
        from 'semantic-ui-react';
import { fetchPets } from '../actions/pets';
import Lady from '../images/lady_pets.jpg';
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

        <div class='row'>
          <div class="col s12 m6">
          <br />
          <Card className='lighten-3'>

            <span class="card-title">
              <h2>{pet.name}</h2>
            </span>
            <br />
              <div class='card-content'>
              <div class="card-action">
                <Button class='light-blue btn-large' >
                <a href={`managepet/${pet.id}`} style={styles.black}><strong>PET INFO</strong></a>
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

          <Image src={Lady} alt='Lady with Pets' centered />
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
