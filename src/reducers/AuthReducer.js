import {
  FETCH_USER,
  SIGNIN_USER,
  LOGOUT_USER
} from '../actions/types'

const INITIAL_STATE ={
  name: 'Guest',
  isAuthenticated: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload
    case SIGNIN_USER:
      return action.payload
    case LOGOUT_USER:
      return INITIAL_STATE
    default:
      return state
  }
}
