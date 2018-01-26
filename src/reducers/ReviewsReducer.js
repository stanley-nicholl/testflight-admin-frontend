import {
  FETCH_REVIEWS
} from '../actions/types'

const INITIAL_STATE ={
  reviews: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REVIEWS:
      return action.payload
    default:
      return state
  }
}
