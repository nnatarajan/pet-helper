import React, { Component } from 'react';
import axios from 'axios'
import { Header, Segment, Grid, Image, Item, Divider } from 'semantic-ui-react';
import Kitty from '../images/adoption.jpg';

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
        <Segment color='green' inverted>
               <Grid.Column computer={8} tablet={16} mobile={16}>
                 <Item>
                   <Item.Content>
                     <Item.Header as='h2' style={styles.black}>
                         <strong>{adoptions.name.$t}</strong>
                     </Item.Header>
                     <Item.Meta as='h3' style={styles.black}>
                         <div>
                           <span>{adoptions.address1.$t}</span>
                           <br />
                         </div>
                         <div>
                           <span>{adoptions.city.$t}, {adoptions.state.$t}, {adoptions.zip.$t}</span>
                           <br />
                         </div>
                         <div>
                           <span>{adoptions.email.$t}</span>
                           <br />
                         </div>
                         <div>
                           <span>{adoptions.phone.$t}</span>
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
    return (
      <Segment textAlign='center'>
        <Header as='h1' textAlign='center'>
          <strong>Pet Adoption Shelters</strong>
        </Header>
        <Image src={Kitty} alt='kitten' centered />
        <br />
        { this.display() }
      </Segment>
    )
  }
}

const styles = {
  black: { color: 'black' },
}

export default Adoptions;
