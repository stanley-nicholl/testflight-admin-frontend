import {
  FETCH_PILOTS
} from './types'

export const fetchTestPilots = () => {
  return async (dispatch) => {
    const token = await window.localStorage.getItem('testFlightToken')
    const data = await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/users`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const users = await data.json()
    const pilots = users.users.filter((user) => {
      return !user.admin
    })
    dispatch (
      {
        type: FETCH_PILOTS,
        payload: pilots
      }
    )
  }
}

export const deleteTestPilot = (id) => {
  return async (dispatch) => {
    const token = await window.localStorage.getItem('testFlightToken')
    await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/users/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: 'DELETE'
    })
    dispatch (fetchTestPilots())
  }
}

export const addTestPilot = (body) => {
  console.log('addTestPilot');
  return async (dispatch) => {
    const token = await window.localStorage.getItem('testFlightToken')
    await fetch(`${process.env.REACT_APP_TESTFLIGHT_API_URL}/users`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
    dispatch(fetchTestPilots)
  }
}
