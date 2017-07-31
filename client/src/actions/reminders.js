import axios from 'axios';

export const addReminder = (reminder) => {
  return(dispatch) => {
    // TODO: Add const reminder
    axios.post(`/reminders/{:petid}`, {reminder: {} })
    .then( res => {
      dispatch({ type: 'ADD_REMINDER', reminder: res.data });
      console.log(res);
      alert("Reminder added successfully!");
    })
    .catch( res => {
      console.log(res);
    });
  }
}
