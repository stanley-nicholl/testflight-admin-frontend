import { combineReducers } from 'redux'
import TestPilotReducer from './TestPilotReducer'
import PrototypesReducer from './PrototypesReducer'
import AuthReducer from './AuthReducer'
import ReviewsReducer from './ReviewsReducer'

export default combineReducers({
  auth: AuthReducer,
  testPilots: TestPilotReducer,
  prototypes: PrototypesReducer,
  reviews: ReviewsReducer
})
