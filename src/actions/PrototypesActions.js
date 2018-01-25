import {
  FETCH_PROTOTYPES
} from './types'

export const fetchPrototypes = (prototypes) => {
  return {
    type: FETCH_PROTOTYPES,
    payload: prototypes
  }
}
