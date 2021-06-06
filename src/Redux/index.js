import { combineReducers } from 'redux'
import authReducer from './authReducer'
import data from './data'



export default combineReducers({
   authReducer,
   data
});
