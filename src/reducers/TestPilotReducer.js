import {
  FETCH_PILOTS
} from '../actions/types'

const INITIAL_STATE ={
  pilots: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PILOTS:
      return action.payload
    default:
      return state
  }
}
