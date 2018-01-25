import {
  FETCH_PROTOTYPES
} from '../actions/types'

const INITIAL_STATE ={
  prototypes: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROTOTYPES:
      return action.payload
    default:
      return state
  }
}
