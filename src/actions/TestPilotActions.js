import {
  FETCH_PILOTS
} from './types'

export const fetchTestPilots = (pilots) => {
  return {
    type: FETCH_PILOTS,
    payload: pilots
  }
}
