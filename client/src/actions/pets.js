import axios from 'axios';

export const addPet = (pet) => {
  return(dispatch) => {
    const { name, species, birthday, notes } = pet;
    // TODO: Add user id?
    axios.post(`/api/pets`, { pet: { name, species, birthday, notes } })
    .then( res => {
      dispatch({ type: 'ADD_PET', pet: res.data });
      console.log(res);
      alert("Pet add successfully!");
    })
    .catch( res => {
      console.log(res);
    });
  }
}

export const fetchSelectedPet = (petid) => {
  console.log("CALLING FETCH SELECTED PET");
  return(dispatch) => {
    // const petid = this.props.match.params.petid;
    axios.get(`/api/pets/${petid}`)
    .then( (res) => {
      console.log("GOT PET SUCCESSFULLY")
      console.log(res);
      dispatch({ type: 'GET_SELECTED_PET', pet: res.data });
    })
    .catch ((res) => {
      console.log("could not fetch pet");
      console.log(res);
    });
  }
}

export const fetchPets = () => {
  return(dispatch) => {
    axios.get(`/api/pets`)
    .then( res => {
      dispatch( { type: 'GET_PETS', pets: res.data});
    }).catch( res => {
      console.log(res);
    });
  }
}
