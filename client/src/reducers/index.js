import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import pets from './pets'

const rootReducer = combineReducers({
  user,
  flash,
  pets
})

export default rootReducer
