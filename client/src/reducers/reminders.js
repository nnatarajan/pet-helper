const reminders = (state = [], action) => {
    switch (action.type) {
      case 'ADD_REMINDER':
        return [ ...state, action.reminder ];
      default:
        return state;
    }
}

export default reminders;
