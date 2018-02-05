import {
  FETCH_PROTOTYPES
} from './types'


//gets all prototypes and related data
export const fetchPrototypes = () => {
  return async (dispatch) => {
    const token = await window.localStorage.getItem('testFlightToken')
    const data = await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/prototypes`, {
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

//adds prototype to db
export const addPrototype = (body) => {
  return async (dispatch) => {
    const token = await window.localStorage.getItem('testFlightToken')
    await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/prototypes`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
  }
}

//removes prototype from db
export const deletePrototype = (id) => {
  return async (dispatch) => {
    const token = await window.localStorage.getItem('testFlightToken')
    await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/prototypes/${id}`, {
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
