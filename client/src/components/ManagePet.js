import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Image, Button, Grid } from 'semantic-ui-react';
import { fetchSelectedPet } from '../actions/pets';
import Pets from '../images/pets.jpg';
import { Card } from 'react-materialize';

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
          <Card className="card teal accent-2 left-align" >
            <span className="card-title"><h2>{pet.name}</h2></span>
            <div className="card-content">
            <h4>
              <p>Species:  {pet.species}</p>
              <p>Birthday:  {pet.birthday}</p>
              <p>Notes:  {pet.notes}</p>
            </h4>
            </div>
            <div className="card-action">
              <Button className='grey lighten-2 btn-large' >
                <a href={`/reminders/${this.props.match.params.petid}`}  style={styles.black}>Create Reminders</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
)
  }

  render() {
    return(
      <div>
        <div class="row">
          <div class="col s12">
            <br />
        <Header textAlign='center'>
          <h1><strong>Manage My Pet</strong></h1>
        </Header>
      <br />
        <Image src={ Pets } alt='Pets' centered />
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
  return { pet: state.pets };
}

export default connect(mapStateToProps)(ManagePet);
