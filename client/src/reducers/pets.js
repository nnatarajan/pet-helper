const pets = (state = [], action) => {
    switch (action.type) {
      case 'GET_PETS':
        return action.pets;
      case 'ADD_PET':
        return [ ...state, action.pet ];
      case 'GET_SELECTED_PET':
        return action.pet;
      default:
        return state;
    }
}

export default pets;
