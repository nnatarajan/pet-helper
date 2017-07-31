import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions/reminders';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Header, Grid, Segment, Menu, Image, Button} from 'semantic-ui-react';

class Reminders extends Component {

  render() {
    return(
      <div>
        <Header as='h1' textAlign='center'>Set Reminders</Header>

        {/* <DatePicker
          dateFormat="YYYY/MM/DD"
          selected={this.state.startDate}
          onChange={this.handleChange}
        /> */}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return { reminders: state.reminders };
}

export default connect(mapStateToProps)(Reminders);
