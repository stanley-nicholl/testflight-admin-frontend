import {
  FETCH_PROTOTYPES
} from './types'

export const fetchPrototypes = () => {
  return async (dispatch) => {
    const token = await window.localStorage.getItem('testFlightToken')
    const data = await fetch(`http://localhost:3000/api/prototypes`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
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
    const token = await window.localStorage.getItem('testFlightToken')
    await fetch(`http://localhost:3000/api/prototypes/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: 'DELETE'
    })
    dispatch (fetchPrototypes())
  }
}
