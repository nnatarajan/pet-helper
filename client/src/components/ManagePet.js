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

      <Grid.Row class='row'>
      <Grid.Column class='column'>
          <Card class='ui segment' style={styles.black} color='grey' fluid>
            <Card.Content>
            <Card.Header content={pet.name} />

            <Card.Description>

            <span>Species:  {pet.species}</span>
            <br />

            <span>Birthday:  {pet.birthday}</span>
            <br />

            <span>Notes:  {pet.notes}</span>
            <br />

          </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
      </Grid.Row>

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
        <br />
        <Button  href={`/reminders/${this.props.match.params.petid}`}  color='blue' content = 'CREATE REMINDERS' style={styles.black}
        />

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
