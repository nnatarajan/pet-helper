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

        <div class='row'>
     <div class="col s12 m6">
       <br />
       <Card className='teal accent-2'>

         <span class="card-title">
           <h2>{pet.name}</h2>
         </span>

         <div class='card-content'>
           <br />
           <span>
            <Button href={`managepet/${pet.id}`}
            color='blue'
            size='tiny'
            content = 'MANAGE MY PET'
            />
           </span>
           <br />
         </div>

     </Card>
   </div>
   </div>
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


const mapStateToProps = (state) => {
  return { pets: state.pets };
}

export default connect(mapStateToProps)(Pets);
