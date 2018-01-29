import {
  FETCH_PROTOTYPES
} from './types'

export const fetchPrototypes = () => {
  return async (dispatch) => {
    const data = await fetch(`http://localhost:3000/api/prototypes`)
    const prototypes = await data.json()
    dispatch(
      {
        type: FETCH_PROTOTYPES,
        payload: prototypes.prototypes
      }
    )
  }
}

export const deletePrototype = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:3000/api/prototypes/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    dispatch (fetchPrototypes())
  }
}
