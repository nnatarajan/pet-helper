import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header,
        Grid,
        Segment,
        Menu,
        Image,
        Button,
        Label,
        Item,
        Divider
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

        <Segment color='blue' inverted>
        <Grid.Column computer={8} tablet={16} mobile={16}>
          <Item>
            <Item.Content>
              <Item.Header as='h2' style={styles.black}>
                  <strong>{ pet.name }</strong>
              </Item.Header>
              <Item.Meta as='h3' style={styles.black}>
                  <div>
                    <span>Birthday: { pet.birthday }</span>
                    <br />
                  </div>
                  <br />
                  <div>
                    <span>
                      <Button href={`managepet/${pet.id}`}
                      color='red'
                      size='small'
                      content = 'MANAGE MY PET'
                      style={styles.black}
                      />
                    </span>
                    <br />
                  </div>
              </Item.Meta>
              <Divider />
            </Item.Content>
          </Item>
        </Grid.Column>
      </Segment>

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
        { this.display() }
      </Segment>
    );
  }
}

const styles = {
  black: { color: 'black' },
}


const mapStateToProps = (state) => {
  return { pets: state.pets };
}

export default connect(mapStateToProps)(Pets);
