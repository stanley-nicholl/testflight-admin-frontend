import { combineReducers } from 'redux'
import TestPilotReducer from './TestPilotReducer'
import PrototypesReducer from './PrototypesReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
  auth: AuthReducer,
  testPilots: TestPilotReducer,
  prototypes: PrototypesReducer
})
