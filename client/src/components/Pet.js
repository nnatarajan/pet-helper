import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Segment } from 'semantic-ui-react';

class Pet extends Component {

  render() {
    return(
      <div>
        {/* <p>
          {this.props.pet.name} {this.props.pet.species}  {this.props.pet.birthday}
        </p> */}
          <br />

          <Grid columns='equal' textAlign='center'>
            <Grid.Row>
              <Grid.Column>
                <Segment>{this.props.pet.name}</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>{this.props.pet.species}</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>{this.props.pet.birthday}</Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>


          <br />








      </div>
    )
  }
}

export default Pet;
