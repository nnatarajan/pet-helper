import React, { Component } from 'react';
import {
        Container,
        Header,
        Form,
        Button,
        Segment,
        Dropdown,
        Menu,
        Checkbox
        }
        from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addReminder } from '../actions/reminders';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';

// const types = [
// { key: 'vet', text: 'Take Pet to Vet', value: 'vet' },
// { key: 'bathe', text: 'Bathe Pet', value: 'bathe' },
// { key: 'food', text: 'Buy Food for Pet', value: 'food' },
// { key: 'misc', text: 'Enter Custom Reminder', value: 'misc' },
// ]

// const pattern = [
// { key: 'daily', text: 'Daily', value: 'daily' },
// { key: 'weekly', text: 'Weekly', value: 'weekly' },
// { key: 'monthly', text: 'Monthly', value: 'monthly' },
// { key: 'yearly', text: 'Yearly', value: 'yearly'},
// ]

const containerStyle = {
  maxWidth: 900,
  marginTop: 15
};

const headerStyle = {
  marginTop: 15,
  marginBottom: 15
};

class Reminders extends Component {
  state = { reminder_type: '', date_time: '', repeat: true, repeat_pattern: 'yearly'};

  handleSubmit = (e) => {
    e.preventDefault();
    let { dispatch, match: { params } } = this.props;
    console.log("I think the pet id is");
    console.log(params.petid);
    this.props.dispatch(addReminder(this.state, params.petid))
  }

  handleChange = (e) => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = e.target;
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { reminder_type, date_time, repeat, repeat_pattern } = this.state;

    return(

      <Container text style={containerStyle}>
        <Segment basic>
          <Header as='h1' textAlign='center' style={headerStyle}>Set Reminders</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Reminder Type</label>
              <input
                id='reminder_type'
                placeholder='Enter reminder type. For example, Vet Appointment'
                required
                value={reminder_type}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Date of Reminder</label>
              <input
                id='date_time'
                placeholder='Enter Date Format: YYYY/MM/DD'
                required
                value={date_time}
                onChange={this.handleChange}
            />
            </Form.Field>
            {/* <Form.Field>
              <label>Select for Reminders</label>
              <Checkbox toggle />
            </Form.Field>
            </Form.Field>
            <Form.Field>
                <Menu compact>
                  <Dropdown text='Pattern' options={pattern} simple item />
                </Menu>
            </Form.Field> */}
            <Segment basic textAlign='center'>
              <Button type='submit'>Submit</Button>
            </Segment>
          </Form>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { reminders: state.reminders };
}

export default connect(mapStateToProps)(Reminders);
