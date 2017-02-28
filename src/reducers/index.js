import { combineReducers } from 'redux'
import navState from './navigation'
import drawer from './drawer'

const rootReducer = combineReducers({
  navState,
  drawer
})

export default rootReducer
