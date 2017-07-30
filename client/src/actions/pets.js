import axios from 'axios';

export const addPet = (pet) => {
  return(dispatch) => {
    const { name, species, birthday, notes} = pet;
    // TODO: Add user id?
    axios.post(`/api/pets`, { pet: { name, species, birthday, notes } })
    .then( (res) => {
      dispatch({ type: 'ADD_PET', pet: res.data });
      console.log(res);
      console.log("Request to AddPet Succeeded :)");
    }).catch( (res) => {
      console.log(res);
      console.log("Request to AddPet Failed :(");
    });
  }
}

export const fetchPets = () => {
  return(dispatch) => {
    axios.get(`/api/pets`)
    .then( (res) => {
      dispatch( { type: 'GET_PETS', pets: res.data});
      console.log("REQUEST SUCCEEDED");
      console.log(res);
    }).catch((res) => {
      console.log("REQUEST FAILED");
      console.log(res);
    });
  }
}
