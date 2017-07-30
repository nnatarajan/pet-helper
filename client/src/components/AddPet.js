import React, { Component } from 'react';
import { Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addPet } from '../actions/pets';

class AddPet extends Component {
  // constructor(props) {
  // super(props);
  // this.handleSubmit = this.handleSubmit.bind(this);
  // }
  //
  state = { name: '', species: '', birthday: '', notes: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addPet(this.state))
  }

  handleChange = (e) => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = e.target;
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { name, species, birthday, notes } = this.state;

    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>Add a Pet</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              id='name'
              placeholder='Pet Name'
              required
              value={name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Species</label>
            <input
              id='species'
              placeholder='Species'
              type='species'
              required
              value={species}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Birthday</label>
            <input
              id='birthday'
              placeholder='Birthday'
              type='birthday'
              required
              value={birthday}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment basic textAlign='center'>
            <Button type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    );
  }
}

export default AddPet;
