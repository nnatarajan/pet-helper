const pets = (state = [], action) => {
  console.log("CALLING REDUCER")
    switch (action.type) {
      case 'GET_PETS':
        return action.pets;
      case 'ADD_PET':
        return [ ...state, action.pet ];
      case 'GET_SELECTED_PET':
        console.log("SPREAD IS");
        console.log(action.pet);
        console.log("NEXT IS");
        console.log({ ...action.pet });
        return { ...action.pet };
      default:
        return state;
    }
}

export default pets;
