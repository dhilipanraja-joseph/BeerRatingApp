import { combineReducers } from 'redux'
import user from './userReducer'
import beer from './beerReducer'


export default combineReducers({
  user,
  beer,
})
