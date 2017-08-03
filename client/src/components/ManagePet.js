import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Image, Button, Grid, Card} from 'semantic-ui-react';
import { fetchSelectedPet } from '../actions/pets';
import Kittens from '../images/kittens.jpg';

class ManagePet extends Component {
  componentDidMount() {
    let { dispatch, match: { params } } = this.props;
    dispatch(fetchSelectedPet(params.petid));
  }

  display = () => {
    let pet = this.props.pet;
    return (

        <div class='row'>
          <div class="col s12 m6">
          <br />
          <Card className='teal accent-2'>

            <span class="card-title">
              <h2>{pet.name}</h2>
            </span>

            <br />

            <span class='card-content' >
            <h4>
              <p>Species:  {pet.species}</p>

              <p>Birthday:  {pet.birthday}</p>

              <p>Notes:  {pet.notes}</p>

            </h4>
              <Button className='grey lighten-2'>
              <a href={`/reminders/${this.props.match.params.petid}`}  >CREATE REMINDERS</a>
              <br />
              </Button>

            <br />
          </span>

          </Card>
          </div>
        </div>
      )
  }

  render() {
    return(
      <Segment textAlign='center'>
        <Header as='h1' textAlign='center'>
          <strong>Manage My Pet</strong>
        </Header>
        <Image src={ Kittens } alt='Kitten' centered />
        <br />
        <Grid class='ui equal width grid' container columns={2} centered>
          { this.display() }
        </Grid>
      </Segment>
    )
  }
}

const styles = {
  black: { color: 'black' },
}

const mapStateToProps = (state) => {
  return { pet: state.pets };
}

export default connect(mapStateToProps)(ManagePet);
