import axios from 'axios';

export const addPet = (pet) => {
  return(dispatch) => {
    const { name, species, birthday, notes} = pet;
    // TODO: Add user id?
    axios.post(`/api/pets`, { pet: { name, species, birthday, notes } })
    .then( res => {
      dispatch({ type: 'ADD_PET', pet: res.data });
      console.log(res);
      alert("Pet successfully added");
    }).catch( res => {
      console.log(res);
      console.log("Request to AddPet Failed :(");
    });
  }
}

export const fetchPets = () => {
  return(dispatch) => {
    axios.get(`/api/pets`)
    .then( res => {
      console.log("Request to fetchPets succeeded :)")
      console.log(res);
      console.log("DISPATCHING");
      dispatch( { type: 'GET_PETS', pets: res.data});
    }).catch( res => {
      alert("Request to fetchPets failed :(");
      console.log(res);
    });
  }
}
