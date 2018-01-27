import {
  SET_ALIGNMENT
} from '../actions/types'

const INITIAL_STATE ={
  alignment: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ALIGNMENT:
      return { alignment: { ...state.alignment, ...action.payload } }
    default:
      return state
  }
}
