import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header,
        Grid,
        Segment,
        Image,
        Button,
        Card
      }
        from 'semantic-ui-react';
import { fetchPets } from '../actions/pets';
import Dog from '../images/dog2.jpeg';

class Pets extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPets());
  }

  display = () => {
    return this.props.pets.map(pet => {
      return (

        <Grid.Row class='row'>
          <Grid.Column class='column'>
            <Card class='ui segment' style={styles.black} color='teal' fluid>
              <Card.Content>
                <Card.Header content={pet.name} />
                <Card.Description>
                <span>Birthday: {pet.birthday}</span>
                <br />
                <br />
                <span>
                 <Button href={`managepet/${pet.id}`}
                 color='blue'
                 size='tiny'
                 content = 'MANAGE MY PET'
                 style={styles.black}
                 />
                </span>
                <br />
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>

      )
    });
  }

  render() {
    return(
      <Segment textAlign='center'>
        <Header as='h1' textAlign='center'>
          <strong>My Pets</strong>
        </Header>
        <Image src={Dog} alt='Dog' centered />
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
  return { pets: state.pets };
}

export default connect(mapStateToProps)(Pets);
