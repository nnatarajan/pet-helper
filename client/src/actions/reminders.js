import axios from 'axios';

export const addReminder = (reminder, petid) => {
  return(dispatch) => {
    const { reminder_type, date_time, repeat, repeat_pattern } = reminder;
    const pet_id = petid;
    axios.post(`/api/pets/${petid}/reminders/`, {reminder: { reminder_type, date_time, repeat, repeat_pattern } })
    .then( res => {
      dispatch({ type: 'ADD_REMINDER', reminder: res.data });
      console.log(res);
      alert("Reminder added successfully!");
    })
    .catch( res => {
      console.log(res);
      alert("Reminder failed");
    });
  }
}
